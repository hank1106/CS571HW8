var app = angular.module('myApp', ['ngRoute']);
app.controller('myCtrl', function($scope,$http,$location) {
    accesstoken = 'EAAFgkMau1f8BAD02HfQNS9t7E6qp6Mw7WYrplAapbqZCrJ7xFSxpZAtpSahbTbXWxYCcUoohPmISw1diiDZBaaPZCQbxXgcSNLNbersPBBYMsZCmB0HhFz196psfZBKWMDXmGw1Kj7mtqrtiN2hXWW0HZBScPZBXpfkZD'
    $scope.search = function() {
        $http({
        	method: 'GET',
        	url: 'https://graph.facebook.com/v2.8/search?q='+$scope.input+'&type=page&fields=id,name,picture.width(700).height(700)&access_token=' + accesstoken
        }).then(function successCallback(response) {
        	$scope.jsondata = response.data.data;
        	$scope.paging = response.data.paging.next;
        	$location.path('/tableResult');
        }, function errorCallback(response) {
        	alert("error");
        });
    };
});