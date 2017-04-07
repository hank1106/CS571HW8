var app = angular.module('myApp', ['ngRoute','ngAnimate']);
app.controller('myCtrl', function($scope,$http,$location) {
    $scope.accesstoken = 'EAAFgkMau1f8BAD02HfQNS9t7E6qp6Mw7WYrplAapbqZCrJ7xFSxpZAtpSahbTbXWxYCcUoohPmISw1diiDZBaaPZCQbxXgcSNLNbersPBBYMsZCmB0HhFz196psfZBKWMDXmGw1Kj7mtqrtiN2hXWW0HZBScPZBXpfkZD'
    $scope.currurl ='';
    $scope.search = function(type) {
        $location.path('/progressBar');
        $http({
        	method: 'GET',
        	url: 'https://graph.facebook.com/v2.8/search?q='+$scope.input+'&type='+type+'&fields=id,name,picture.width(700).height(700)&access_token=' + $scope.accesstoken
        }).then(function successCallback(response) {
            $scope.pagenum = 0;
        	$scope.jsondata = response.data.data;
            $scope.paging = undefined;
        	$scope.paging = response.data.paging.next;
            $scope.pagingprev = undefined;
            $scope.currurl = 'https://graph.facebook.com/v2.8/search?q='+$scope.input+'&type='+type+'&fields=id,name,picture.width(700).height(700)&access_token=' + $scope.accesstoken;
        	$location.path('/tableResult');
        }, function errorCallback(response) {
        	alert("error");
        });
    };
    $scope.nextpage = function() {
        $location.path('/progressBar');
        $http({
            method: 'GET',
            url: $scope.paging
        }).then(function successCallback(response) {
            $scope.pagenum++;
            $scope.jsondata = response.data.data;
            $scope.pagingprev = response.data.paging.previous;
            $scope.currurl = $scope.paging;
            $scope.paging = response.data.paging.next;
            $location.path('/tableResult');
        }, function errorCallback(response) {
            alert("error");
        });
    };
    $scope.prevpage = function() {
        $location.path('/progressBar');
        $http({
            method: 'GET',
            url: $scope.pagingprev
        }).then(function successCallback(response) {
            $scope.jsondata = response.data.data;
            $scope.currurl = $scope.pagingprev;
            $scope.pagingprev = response.data.paging.previous;
            $scope.paging = response.data.paging.next;
            $location.path('/tableResult');
        }, function errorCallback(response) {
            alert("error");
        });
    };
    $scope.back = function() {
        $http({
            method: 'GET',
            url: $scope.currurl
        }).then(function successCallback(response) {
            $scope.jsondata = response.data.data;
            $scope.pagingprev = response.data.paging.previous;
            $scope.paging = response.data.paging.next;
            $location.path('/tableResult');
        }, function errorCallback(response) {
            alert("error");
        });
    };
    $scope.todetail = function(id) {
        $http({
            method: 'GET',
            url: 'https://graph.facebook.com/v2.8/'+id+'?fields=%20albums.limit(5){name,photos.limit(2){name,%20picture}},posts.limit(5){message,created_time},picture.width(700).height(700),name&access_token=' + $scope.accesstoken
        }).then(function successCallback(response) {
            $location.path('/detail');
            $scope.albums = response.data.albums.data;
            $scope.posts = response.data.posts.data;
            $scope.pic = response.data.picture.data;
            $scope.name = response.data.name;
        }, function errorCallback(response) {
            alert("error");
        });
    };
});