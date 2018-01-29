almundoApp.service('HotelService', function($http, $q) {
    return {
      'getHotels': function() {
        var defer = $q.defer();
        $http.get('/hotel/getHotels').then(function(resp){
          defer.resolve(resp);
        }).catch( function(err) {
          defer.reject(err);
        });
        return defer.promise;
      },
      'addHotel': (hotel) => {
        var defer = $q.defer();
        $http.post('/hotel/addHotel', hotel).then(function(resp){
          defer.resolve(resp);
        }).catch( function(err) {
          defer.reject(err);
        });
        return defer.promise;
      },
      'removeHotel': function(hotel) {
        var defer = $q.defer();
        $http.post('/hotel/removeHotel', hotel).then(function(resp){
          defer.resolve(resp);
        }).catch( function(err) {
          defer.reject(err);
        });
        return defer.promise;
      }
  }});