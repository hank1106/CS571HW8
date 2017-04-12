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
   	$routeProvider.when('/favorites', {
      templateUrl: 'favorites.html'
   	});
    $routeProvider.when('/favdetail', {
      templateUrl: 'favdetail.html'
    });          
}]);