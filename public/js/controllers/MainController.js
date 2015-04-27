app.controller('MainController', function ($scope, FlashCardsFactory) {

    var setFlashCards;
    $scope.loaded = false;

    setFlashCards = function (flashCards) {
        $scope.loaded = true;
        $scope.flashCards = flashCards;
        console.log($scope.loaded);
    };

    var getThenSetAllFlashCards = function () {
        $scope.loaded = false;
        FlashCardsFactory.getFlashCards().then(setFlashCards);
    };

    $scope.categories = [
        'MongoDB',
        'Express',
        'Angular',
        'Node'
    ];

    $scope.getCategoryCards = function (category) {
        $scope.currentCategory = category;
        $scope.loaded = false;
        FlashCardsFactory.getFlashCards(category).then(setFlashCards);
    };

    $scope.resetCategory = function () {
        $scope.currentCategory = null;
        getThenSetAllFlashCards();
    };

    getThenSetAllFlashCards();

});
