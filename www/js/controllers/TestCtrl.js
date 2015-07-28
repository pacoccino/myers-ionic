application.controller('TestCtrl', function($scope, Questionary, ResultStore, MyersComputer, $ionicTabsDelegate) {

    $scope.questions = Questionary.questions();

    $scope.respond = function(question, coefResponse) {
        question.result = coefResponse;
    };

    $scope.validate = function() {
        var score = MyersComputer.computeScore($scope.questions);
        ResultStore.setMyScore(score);
        $ionicTabsDelegate.select(1);
    };
});