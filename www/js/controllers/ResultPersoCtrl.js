application.controller('ResultPersoCtrl', function($scope, ResultStore) {

    var updateMyScore = function() {
        $scope.resultScore = ResultStore.myScore();
    };

    $scope.$on("update.myscore", updateMyScore);

    updateMyScore();

    $scope.getBarStyle = function(barScore, orientation) {
        var style = {};

        if(orientation * barScore.score > 0) {
            style.width = Math.abs(barScore.score) + '%';
        }

        return style;
    };

    var computeBarScores = function() {
        $scope.barScores = [
            {
                name: 'Intro',
                score: Math.round($scope.resultScore.i * 100)
            },
            {
                name: 'Neutrino',
                score: Math.round($scope.resultScore.n * 100)
            },
            {
                name: 'Terato',
                score: Math.round($scope.resultScore.t * 100)
            },
            {
                name: 'Peloto',
                score: Math.round($scope.resultScore.p * 100)
            }
        ]
    };

    computeBarScores();
});