application.service('ResultStore', function($rootScope) {
    var myScore = null;

    var emptyScore = {
        i: 0,
        n: 0,
        t: 0,
        p: 0
    };

    var setMyScore = function(score) {
        myScore = score;
        $rootScope.$broadcast('update.myscore');
    };

    return {
        myScoreComputed: function() {
            return myScore ? true : false;
        },
        myScore: function() {
            return myScore;
        },
        setMyScore: setMyScore
    };
});