app.factory('GamesFactory', function ($http) {

    return {
        getGames: function (category) {

            return $http.get('/cards', {
                params: queryStringParameters
            }).then(function (response) {
                return response.data;
            });
        }
    };

});