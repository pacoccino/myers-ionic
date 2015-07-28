application.service('Questionary', function() {

    var questions = MYERS_Questionary;

    return {
        questions: function() {
            return angular.copy(questions);
        }
    };
});
