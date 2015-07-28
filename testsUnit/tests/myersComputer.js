describe('MyersComputer', function () {
    var MyersComputer;

    beforeEach(module('myApp'));
    beforeEach(inject(function (_MyersComputer_) {
        MyersComputer = _MyersComputer_;
    }));

    describe('basic computing', function () {

        it('getsNewMyers', function() {
            var myers = MyersComputer.getNewMyers();
            expect(myers.i).toBe(0);
            expect(myers.n).toBe(0);
            expect(myers.t).toBe(0);
            expect(myers.p).toBe(0);
        });

        it('doForEach - affectation - return', function () {
            var myersA = MyersComputer.doForEach(null, null, null, function(a, b) {
                return 1;
            });

            expect(myersA.i).toBe(1);
            expect(myersA.n).toBe(1);
            expect(myersA.t).toBe(1);
            expect(myersA.p).toBe(1);
        });
        it('doForEach - affectation - reference', function () {
            var myers = MyersComputer.getNewMyers();
            var myersA = MyersComputer.doForEach(myers, null, null, function(a, b) {
                return 1;
            });

            expect(myersA.i).toBe(myers.i);
            expect(myersA.n).toBe(myers.n);
            expect(myersA.t).toBe(myers.t);
            expect(myersA.p).toBe(myers.p);

            expect(myersA.i).toBe(1);
            expect(myersA.n).toBe(1);
            expect(myersA.t).toBe(1);
            expect(myersA.p).toBe(1);
        });

        it('doForEach - double assign', function () {
            var myersA = MyersComputer.doForEach(null, null, null, function(a, b) {
                return 1;
            });

            var myersB = MyersComputer.doForEach(null, null, null, function(a, b) {
                return 3;
            });

            var myersC = MyersComputer.doForEach(null, myersA, myersB, function(a, b) {
                return a+b;
            });

            expect(myersC.i).toBe(4);
            expect(myersC.n).toBe(4);
            expect(myersC.t).toBe(4);
            expect(myersC.p).toBe(4);
        });

        it('addition', function () {
            var myersA = MyersComputer.doForEach(null, null, null, function(a, b) {
                return 1;
            });

            var myersB = MyersComputer.doForEach(null, null, null, function(a, b) {
                return 3;
            });

            var myersC = MyersComputer.addScores(myersA, myersB);

            expect(myersC.i).toBe(4);
            expect(myersC.n).toBe(4);
            expect(myersC.t).toBe(4);
            expect(myersC.p).toBe(4);
        });

        it('multByCoef', function () {

            var myersA = MyersComputer.doForEach(null, null, null, function(a, b) {
                return 8;
            });

            var myersC = MyersComputer.multByCoef(myersA, 0.5);
            expect(myersC.i).toBe(4);
            expect(myersC.n).toBe(4);
            expect(myersC.t).toBe(4);
            expect(myersC.p).toBe(4);
        });

    });

    describe('score computing', function() {

        it('compute response', function() {
            var question = {
                responses: {
                    i: -1,
                    n: 0,
                    t: 0,
                    p: 1
                },
                result: -1
            };

            var response = MyersComputer.getResponse(question);

            expect(response.i).toBe(1);
            expect(response.n).toBe(0);
            expect(response.t).toBe(0);
            expect(response.p).toBe(-1);

        });

        it('computes score', function() {
            var questions = [
                {
                    responses: {
                        i: -1,
                        n: 0,
                        t: 0,
                        p: 1
                    },
                    result: 1
                },
                {
                    responses: {
                        i: 1,
                        n: 1,
                        t: 1,
                        p: 1
                    },
                    result: 0
                },
                {
                    responses: {
                        i: 0,
                        n: 1,
                        t: 1,
                        p: 1
                    },
                    result: -1
                }
            ];

            var score = MyersComputer.computeScore(questions);

            expect(score.i).toBe(-1);
            expect(score.n).toBe(-1);
            expect(score.t).toBe(-1);
            expect(score.p).toBe(0);


        })
    });
});