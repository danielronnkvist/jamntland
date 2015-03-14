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
    parenting: function() {
      var promise = fetch('foraldrapenning').then(function(resp) {
        var males = _.filter(resp.data, function(entry) {
          return entry.key[1] === '1';
        });
        var females = _.filter(resp.data, function(entry) {
          return entry.key[1] === '2';
        });
        var total = _.filter(resp.data, function(entry) {
          return entry.key[1] === '1+2';
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
        total = _.map(total, function(entry) {
          return {
            year: parseInt(entry.key[2]),
            value: parseFloat(entry.values[0])
          };
        });

        return {
          males: males,
          females: females,
          total: total
        };
      });

      return promise;
    },

    work: function() {
      var data = fetch('medelarbetstid').then(function(resp) {
        var males = _.filter(resp.data, function(entry) {
          return entry.key[1] === '1';
        });
        var females = _.filter(resp.data, function(entry) {
          return entry.key[1] === '2';
        });
        var total = _.filter(resp.data, function(entry) {
          return entry.key[1] === '1+2';
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
        total = _.map(total, function(entry) {
          return {
            year: parseInt(entry.key[2]),
            value: parseFloat(entry.values[0])
          };
        });

        return {
          males: males,
          females: females,
          total: total
        };
      });

      return data;
    },
    aid: function() {
      var data = fetch('BistandMottagSoS').then(function(resp) {
        var males = _.filter(resp.data, function(entry) {
          return entry.key[1] === '1';
        });
        var females = _.filter(resp.data, function(entry) {
          return entry.key[1] === '2';
        });
        var total = _.filter(resp.data, function(entry) {
          return entry.key[1] === '1+2';
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
        total = _.map(total, function(entry) {
          return {
            year: parseInt(entry.key[2]),
            value: parseFloat(entry.values[0])
          };
        });

        return {
          males: males,
          females: females,
          total: total
        };
      });

      return data;
    }

  };
}]);
