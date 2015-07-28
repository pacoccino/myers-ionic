application.controller('ResultPersoCtrl', function($scope, ResultStore) {

    var updateMyScore = function() {
        $scope.resultScore = ResultStore.myScore();
    };

    $scope.$on("update.myscore", updateMyScore)

    updateMyScore();

});