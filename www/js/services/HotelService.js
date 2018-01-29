almundoApp.service('HotelService', function($http, $q) {
    return {
      'getHotels': () => {
        var defer = $q.defer();
        $http.get('/hotel/getHotels').success(function(resp){
          defer.resolve(resp);
        }).error( function(err) {
          defer.reject(err);
        });
        return defer.promise;
      },
      'addHotel': (hotel) => {
        var defer = $q.defer();
        $http.post('/hotel/addHotel', hotel).success(function(resp){
          defer.resolve(resp);
        }).error( function(err) {
          defer.reject(err);
        });
        return defer.promise;
      },
      'removeHotel': function(hotel) {
        var defer = $q.defer();
        $http.post('/hotel/removeHotel', hotel).success(function(resp){
          defer.resolve(resp);
        }).error( function(err) {
          defer.reject(err);
        });
        return defer.promise;
      }
  }});