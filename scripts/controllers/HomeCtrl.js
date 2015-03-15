kontApp.controller('HomeCtrl', ['$scope', '$location', '$http', 'getData', function($scope, $location, $http, getData){
  if($location.search().age < 1)
    $location.path('/').search({age: $location.search().age}); // Redirect to start page

  $scope.age = $location.search().age;
  var datas = ['medelinkomst','barn_fritid_kultur','utbildning','foraldrapenning','BistandMottagSoS','personer_inkomstintervall'];

  $scope.year = 2005;
    $scope.salary = {
    2005: [115.1, 89.5],
    2006: [122.2, 94.8],
    2007: [132.6, 100.6],
    2008: [137.2, 104.4],
    2009: [123.0, 97.3],
    2010: [122.7, 97.1],
    2011: [136.3, 104.5],
    2012: [140.1, 109.3],
    2013: [139.9, 112.7],
    2014: [-4751.97 + 2.43*2014, -4479.39 + 2.28*2014],
    2015: [-4751.97 + 2.43*2015, -4479.39 + 2.28*2015],
    2016: [-4751.97 + 2.43*2016, -4479.39 + 2.28*2016],
    2017: [-4751.97 + 2.43*2017, -4479.39 + 2.28*2017],
    2018: [-4751.97 + 2.43*2018, -4479.39 + 2.28*2018],
    2019: [-4751.97 + 2.43*2019, -4479.39 + 2.28*2019],
    2020: [-4751.97 + 2.43*2020, -4479.39 + 2.28*2020],
    2021: [-4751.97 + 2.43*2021, -4479.39 + 2.28*2021],
    2022: [-4751.97 + 2.43*2022, -4479.39 + 2.28*2022],
    2023: [-4751.97 + 2.43*2023, -4479.39 + 2.28*2023],
    2024: [-4751.97 + 2.43*2024, -4479.39 + 2.28*2024],
    2025: [-4751.97 + 2.43*2025, -4479.39 + 2.28*2025],
    2026: [-4751.97 + 2.43*2026, -4479.39 + 2.28*2026],
    2027: [-4751.97 + 2.43*2027, -4479.39 + 2.28*2027],
    2028: [-4751.97 + 2.43*2028, -4479.39 + 2.28*2028],
    2029: [-4751.97 + 2.43*2029, -4479.39 + 2.28*2029],
    2030: [-4751.97 + 2.43*2030, -4479.39 + 2.28*2030],
    2031: [-4751.97 + 2.43*2031, -4479.39 + 2.28*2031],
    2032: [-4751.97 + 2.43*2032, -4479.39 + 2.28*2032],
    2033: [-4751.97 + 2.43*2033, -4479.39 + 2.28*2033],
    2034: [-4751.97 + 2.43*2034, -4479.39 + 2.28*2034],
    2035: [-4751.97 + 2.43*2035, -4479.39 + 2.28*2035]
  };
  $scope.work = {
    2005: [39.6, 34.8],
    2006: [39.5, 34.7],
    2007: [39.5, 34.6],
    2008: [39.4, 34.7],
    2009: [39.2, 34.7],
    2010: [39.2, 34.8],
    2011: [39.1, 34.9],
    2012: [39.1, 35.0],
    2013: [39.0, 35.0],
    2014: [193.312 - 0.0766667*2014, -45.56 + 0.04*2014],
    2015: [193.312 - 0.0766667*2015, -45.56 + 0.04*2015],
    2016: [193.312 - 0.0766667*2016, -45.56 + 0.04*2016],
    2017: [193.312 - 0.0766667*2017, -45.56 + 0.04*2017],
    2018: [193.312 - 0.0766667*2018, -45.56 + 0.04*2018],
    2019: [193.312 - 0.0766667*2019, -45.56 + 0.04*2019],
    2020: [193.312 - 0.0766667*2020, -45.56 + 0.04*2020],
    2021: [193.312 - 0.0766667*2021, -45.56 + 0.04*2021],
    2022: [193.312 - 0.0766667*2022, -45.56 + 0.04*2022],
    2023: [193.312 - 0.0766667*2023, -45.56 + 0.04*2023],
    2024: [193.312 - 0.0766667*2024, -45.56 + 0.04*2024],
    2025: [193.312 - 0.0766667*2025, -45.56 + 0.04*2025],
    2026: [193.312 - 0.0766667*2026, -45.56 + 0.04*2026],
    2027: [193.312 - 0.0766667*2027, -45.56 + 0.04*2027],
    2028: [193.312 - 0.0766667*2028, -45.56 + 0.04*2028],
    2029: [193.312 - 0.0766667*2029, -45.56 + 0.04*2029],
    2030: [193.312 - 0.0766667*2030, -45.56 + 0.04*2030],
    2031: [193.312 - 0.0766667*2031, -45.56 + 0.04*2031],
    2032: [193.312 - 0.0766667*2032, -45.56 + 0.04*2032],
    2033: [193.312 - 0.0766667*2033, -45.56 + 0.04*2033],
    2034: [193.312 - 0.0766667*2034, -45.56 + 0.04*2034],
    2035: [193.312 - 0.0766667*2035, -45.56 + 0.04*2035]
  };
  $scope.parenting = {
    2005: [8319861, 34338497],
    2006: [8957876, 34526064],
    2007: [9434533, 35856118],
    2008: [10143062, 37117288],
    2009: [10669822, 37169343],
    2010: [11489945, 38228681],
    2011: [11921088, 38363061],
    2012: [12407072, 38370595],
    2013: [12741697, 38706268],
    2014: [-1.139641299194465*Math.pow(10,9) + 572582*2014,
           -1.1393040361777935*Math.pow(10,9) + 585499*2014],
    2015: [-1.139641299194465*Math.pow(10,9) + 572582*2015,
           -1.1393040361777935*Math.pow(10,9) + 585499*2015],
    2016: [-1.139641299194465*Math.pow(10,9) + 572582*2016,
           -1.1393040361777935*Math.pow(10,9) + 585499*2016],
    2017: [-1.139641299194465*Math.pow(10,9) + 572582*2017,
           -1.1393040361777935*Math.pow(10,9) + 585499*2017],
    2018: [-1.139641299194465*Math.pow(10,9) + 572582*2018,
           -1.1393040361777935*Math.pow(10,9) + 585499*2018],
    2019: [-1.139641299194465*Math.pow(10,9) + 572582*2019,
           -1.1393040361777935*Math.pow(10,9) + 585499*2019],
    2020: [-1.139641299194465*Math.pow(10,9) + 572582*2020,
           -1.1393040361777935*Math.pow(10,9) + 585499*2020],
    2021: [-1.139641299194465*Math.pow(10,9) + 572582*2021,
           -1.1393040361777935*Math.pow(10,9) + 585499*2021],
    2022: [-1.139641299194465*Math.pow(10,9) + 572582*2022,
           -1.1393040361777935*Math.pow(10,9) + 585499*2022],
    2023: [-1.139641299194465*Math.pow(10,9) + 572582*2023,
           -1.1393040361777935*Math.pow(10,9) + 585499*2023],
    2024: [-1.139641299194465*Math.pow(10,9) + 572582*2024,
           -1.1393040361777935*Math.pow(10,9) + 585499*2024],
    2025: [-1.139641299194465*Math.pow(10,9) + 572582*2025,
           -1.1393040361777935*Math.pow(10,9) + 585499*2025],
    2026: [-1.139641299194465*Math.pow(10,9) + 572582*2026,
           -1.1393040361777935*Math.pow(10,9) + 585499*2026],
    2027: [-1.139641299194465*Math.pow(10,9) + 572582*2027,
           -1.1393040361777935*Math.pow(10,9) + 585499*2027],
    2028: [-1.139641299194465*Math.pow(10,9) + 572582*2028,
           -1.1393040361777935*Math.pow(10,9) + 585499*2028],
    2029: [-1.139641299194465*Math.pow(10,9) + 572582*2029,
           -1.1393040361777935*Math.pow(10,9) + 585499*2029],
    2030: [-1.139641299194465*Math.pow(10,9) + 572582*2030,
           -1.1393040361777935*Math.pow(10,9) + 585499*2030],
    2031: [-1.139641299194465*Math.pow(10,9) + 572582*2031,
           -1.1393040361777935*Math.pow(10,9) + 585499*2031],
    2032: [-1.139641299194465*Math.pow(10,9) + 572582*2032,
           -1.1393040361777935*Math.pow(10,9) + 585499*2032],
    2033: [-1.139641299194465*Math.pow(10,9) + 572582*2033,
           -1.1393040361777935*Math.pow(10,9) + 585499*2033],
    2034: [-1.139641299194465*Math.pow(10,9) + 572582*2034,
           -1.1393040361777935*Math.pow(10,9) + 585499*2034],
    2035: [-1.139641299194465*Math.pow(10,9) + 572582*2035,
           -1.1393040361777935*Math.pow(10,9) + 585499*2035]
  };

  Chart.defaults.global.colours = ["#ED931C", "#22B38A", "#F7464A", "#46BFBD", "#FDB45C", "#949FB1", "#4D5360"];
  $scope.labels = ['Män', 'Kvinnor'];
}]);
