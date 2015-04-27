app.controller('chewzController', function ($scope, GameFactory) {

    $scope.games = [];

    var gameObj = function(){
        this.title = "";
        this.passages = [];
        this.passages.push(new passageObj());
    };

    var passageObj = function(){
        this.prev;
        this.text = "";
        this.links = [];
    };

    $scope.createGame = function(){
        $scope.games.push(new gameObj);
    };

});