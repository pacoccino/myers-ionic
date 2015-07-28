application.service('MyersComputer', function() {

    var emptyMyers = {
        i: 0,
        n: 0,
        t: 0,
        p: 0
    };

    var getNewMyers = function() {
        return angular.copy(emptyMyers);
    };

    var doForEach = function(dest, a, b, fn) {
        if(!dest) {
            dest = getNewMyers();
        }
        if(!a) {
            a = getNewMyers();
        }
        if(!b) {
            b = getNewMyers();
        }

        dest.i = fn(a.i, b.i);
        dest.n = fn(a.n, b.n);
        dest.t = fn(a.t, b.t);
        dest.p = fn(a.p, b.p);

        return dest;
    };

    var addScores = function(a, b, dest) {
        if(!dest) {
            dest = getNewMyers();
        }
        doForEach(dest, a, b, function(aa, bb) {
            return aa + bb;
        });

        return dest;
    };

    var multByCoef = function(a, coef, dest) {
        if(!dest) {
            dest = getNewMyers();
        }

        doForEach(dest, a, a, function(aa, bb) {
            return aa * coef;
        });

        return dest;
    };

    var getResponse = function(question) {

        var response = getNewMyers();
        multByCoef(question.responses, question.result, response);

        return response;
    };

    var computeScore = function(questions) {
        var score = getNewMyers();

        for (var i = 0; i < questions.length; i++) {
            var question = questions[i];

            var response = getResponse(question);

            addScores(score, response, score);
        }

        multByCoef(score, questions.length);
        return score;
    };


    return {
        getNewMyers: getNewMyers,
        doForEach: doForEach,
        addScores: addScores,
        multByCoef: multByCoef,
        getResponse: getResponse,
        computeScore: computeScore
    };
})