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

    setMyScore({
        i: -0.5,
        n: 0.3,
        t: 1,
        p: -1
    });

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