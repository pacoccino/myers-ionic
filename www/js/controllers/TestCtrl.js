application.controller('TestCtrl', function($scope, Questionary, ResultStore, MyersComputer, $ionicPosition, $ionicTabsDelegate, $ionicPopup, $ionicScrollDelegate) {

    $scope.questions = Questionary.questions();
    $scope.highlightUndefined = false;

    var errorNeedAll = function(questionId) {

        var alertPopup = $ionicPopup.alert({
            title: 'Not finished yet',
            template: 'Please try to answer to all questions'
        });
        alertPopup.then(function(res) {
            var questionLineElem = angular.element(document.querySelector("#question-line-" + questionId));
            var position = $ionicPosition.position(questionLineElem);
            $ionicScrollDelegate.scrollTo(position.left, position.top);
            $scope.highlightUndefined = true;
        });
    };

    $scope.respond = function(question, coefResponse) {
        question.result = coefResponse;
    };

    $scope.validate = function() {
        for (var i = 0; i < $scope.questions.length; i++) {
            var question = $scope.questions[i];

            if(question.result === undefined) {
                errorNeedAll(question.id);
                return;
            }
        }

        $scope.highlightUndefined = false;

        var score = MyersComputer.computeScore($scope.questions);
        ResultStore.setMyScore(score);
        $ionicTabsDelegate.select(1);
    };
});