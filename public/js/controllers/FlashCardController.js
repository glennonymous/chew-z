app.controller('FlashCardController', function ($scope, ScoreFactory) {

    $scope.answeredCorrectly = null;
    $scope.loaded = false;

    $scope.answerQuestion = function (answer) {

        if ($scope.answered) {
            return;
        }

        $scope.answered = true;
        $scope.answeredCorrectly = answer.correct;

        if (answer.correct) {
            ScoreFactory.correct = ScoreFactory.correct + 1;
        } else {
            ScoreFactory.incorrect = ScoreFactory.incorrect + 1;
        }

    };

});