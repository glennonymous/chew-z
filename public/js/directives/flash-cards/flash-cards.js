app.directive('flashCards', function (ScoreFactory) {
    return {
        restrict: 'E',
        templateUrl: 'js/directives/flash-cards/flash-cards.html',
        link: function (scope, element, attr) {
            scope.answeredCorrectly = null;
            scope.loaded = false;

            scope.answerQuestion = function (answer) {

                if (scope.answered) {
                    return;
                }

                scope.answered = true;
                scope.answeredCorrectly = answer.correct;

                if (answer.correct) {
                    ScoreFactory.correct = ScoreFactory.correct + 1;
                } else {
                    ScoreFactory.incorrect = ScoreFactory.incorrect + 1;
                }

            };
        },
        scope: {
            card: "="
        }
    }
})