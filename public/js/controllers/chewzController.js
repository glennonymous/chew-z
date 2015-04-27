app.controller('chewzController', function ($scope) {

    $scope.games = {
        data: []
    };

    var gameObj = function(){
        this.title = "Choose a title";
        this.passages = [];
        this.passages.push(new passageObj());
    };

    var passageObj = function(){
        this.prev = null;
        this.text = "Enter text here";
        this.links = [];
    };

    $scope.createGame = function(){
        $scope.games.data.push(new gameObj());
    };

    $scope.addLink = function(text){

    };

});