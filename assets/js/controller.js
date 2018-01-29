'use strict';
almundoApp.controller('HotelCtrl', ['$scope', '$rootScope', 'HotelService', '$mdSidenav', function ($scope, $rootScope, HotelService, $mdSidenav) {
    $scope.formData = {};
    $scope.hotels = [];
    console.log('HotelController')
    $scope.getNumber = (num) => {
        return new Array(num);
    }
    $scope.viewHotel = (id) => {
        console.log(id)
    }
    HotelService.getHotels().then( (response) => {
        var _response = []
        console.log(response)
        response.data.forEach((h) => {
            h.stars = $scope.getNumber(h.stars)
            _response.push(h)
        })
        $scope.hotels = _response;
    });

    $scope.addHotel = () => {
        HotelService.addHotel($scope.formData).then( (response) => {
            $scope.hotels.push($scope.formData)
            $scope.formData = {};
        });
    }

    $scope.removeHotel = (hotel) => {
        HotelService.removeTodo(hotel).then( (response) => {
            $scope.hotels.splice($scope.hotels.indexOf(hotel), 1)
        });
    }
    $scope.openLeftMenu = () => {
        $mdSidenav('left').toggle();
    };

}]);