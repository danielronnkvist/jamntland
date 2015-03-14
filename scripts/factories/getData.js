kontApp.factory('getData', ['$http', function($http){
  var fetch =  function(data) {
    var promise = $http.get('data/'+data+'.json').then(function(response){
      // success!
      return response.data;
    }).catch(function(response) {
      // error!
      console.error(response);
    });
    return promise;
  }

  return {
    aid: function() {
      var data = fetch('foraldrapenning').then(function(resp) {
        console.log(resp);
        return resp;
      });

      return data;
    },
    work: function() {
      var data = fetch('medelarbetstid').then(function(resp) {
        var males = _.filter(resp.data, function(entry) {
          return entry.key[1] === '1';
        });
        var females = _.filter(resp.data, function(entry) {
          return entry.key[1] === '2';
        });

        males = _.map(males, function(entry) {
          return {
            year: parseInt(entry.key[2]),
            value: parseFloat(entry.values[0])
          };
        });
        females = _.map(females, function(entry) {
          return {
            year: parseInt(entry.key[2]),
            value: parseFloat(entry.values[0])
          };
        });

        males = _.object(_.pluck(males, 'year'), _.pluck(males, 'value'));
        females = _.object(_.pluck(females, 'year'), _.pluck(females, 'value'));

        return {
          males: males,
          females: females
        };
      });

      return data;
    }
  };
}]);
