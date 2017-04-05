var app = angular.module('myApp', ['ngRoute']);
app.controller('myCtrl', function($scope,$http,$location) {
    accesstoken = 'EAAFgkMau1f8BAD02HfQNS9t7E6qp6Mw7WYrplAapbqZCrJ7xFSxpZAtpSahbTbXWxYCcUoohPmISw1diiDZBaaPZCQbxXgcSNLNbersPBBYMsZCmB0HhFz196psfZBKWMDXmGw1Kj7mtqrtiN2hXWW0HZBScPZBXpfkZD'
    $scope.search = function(type) {
        $http({
        	method: 'GET',
        	url: 'https://graph.facebook.com/v2.8/search?q='+$scope.input+'&type='+type+'&fields=id,name,picture.width(700).height(700)&access_token=' + accesstoken
        }).then(function successCallback(response) {
            $scope.pagenum = 0;
        	$scope.jsondata = response.data.data;
            $scope.paging = undefined;
        	$scope.paging = response.data.paging.next;
            $scope.pagingprev = undefined;
        	$location.path('/tableResult');
        }, function errorCallback(response) {
        	alert("error");
        });
    };
    $scope.nextpage = function() {
       $http({
            method: 'GET',
            url: $scope.paging
        }).then(function successCallback(response) {
            $scope.pagenum++;
            $scope.jsondata = response.data.data;
            $scope.pagingprev = response.data.paging.previous;
            $scope.paging = response.data.paging.next;
            $location.path('/tableResult');
        }, function errorCallback(response) {
            alert("error");
        });
    };
    $scope.prevpage = function() {
       $http({
            method: 'GET',
            url: $scope.pagingprev
        }).then(function successCallback(response) {
            $scope.pagenum--;
            $scope.jsondata = response.data.data;
            $scope.pagingprev = response.data.paging.previous;
            $scope.paging = response.data.paging.next;
            $location.path('/tableResult');
        }, function errorCallback(response) {
            alert("error");
        });
    };
});