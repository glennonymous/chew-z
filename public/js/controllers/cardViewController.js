app.controller('cardViewController', function ($scope) {

    $scope.isVisible = true;

    $scope.changeVisibility = function () {
        if ($scope.isVisible) {
            $scope.isVisible = false;
            console.log('Eeyup')
        }
        else {$scope.isVisible = true;
        console.log('and that too')}
    }

})