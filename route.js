app.config(['$routeProvider', function($routeProvider) {
   $routeProvider.when('/tableResult', {
      templateUrl: 'tableResult.html'
   });
    $routeProvider.when('/progressBar', {
      templateUrl: 'progressBar.html'
   });     
    $routeProvider.when('/detail', {
      templateUrl: 'detail.html'
   });     
}]);