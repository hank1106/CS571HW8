var app = angular.module('myApp', ['ngRoute','ngAnimate']);
app.controller('myCtrl', function($scope,$http,$location) {
    $scope.accesstoken = 'EAAFgkMau1f8BAD02HfQNS9t7E6qp6Mw7WYrplAapbqZCrJ7xFSxpZAtpSahbTbXWxYCcUoohPmISw1diiDZBaaPZCQbxXgcSNLNbersPBBYMsZCmB0HhFz196psfZBKWMDXmGw1Kj7mtqrtiN2hXWW0HZBScPZBXpfkZD'
    $scope.currurl ='';
    $scope.currtab ='';
    var localStorage = window.localStorage;
    window.fbAsyncInit = function() {
        FB.init({
            appId      : '387649901614591',
            xfbml      : true,
            version    : 'v2.8'
        });
        FB.AppEvents.logPageView();
    };
    (function(d, s, id){
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) {return;}
        js = d.createElement(s); js.id = id;
        js.src = "//connect.facebook.net/en_US/sdk.js";
        fjs.parentNode.insertBefore(js, fjs);
    }
    (document, 'script', 'facebook-jssdk'));

    $scope.search = function(type) {
        if($scope.input!==undefined)
        {
            $location.path('/progressBar');
        }
        else if(type==='notsure')
        {
            alert('Empty input');
        }
        if(type ==='notsure')
        {
            if($scope.currtab==='')
            {
                $scope.currtab='user';
            }
            type = $scope.currtab;
        }
        else
        {
            $scope.currtab = type;
        }
        if($scope.currtab!=='place')
        {
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
                if($scope.input!==undefined)
                {
                    $location.path('/tableResult');
                }
            }, function errorCallback(response) {
                alert("error");
                $location.path('/');
                location.reload();
            });
        }
        else
        {
            $location.path('/progressBar');
            navigator.geolocation.getCurrentPosition(success, error, options);
                var options = {
                enableHighAccuracy: true,
                timeout: 5000,
                maximumAge: 0
            };

            function success(pos) {
                var crd = pos.coords;
                $http({
                    method: 'GET',
                    url: 'https://graph.facebook.com/v2.8/search?q='+$scope.input+'&type=place&fields=id,name,picture.width(700).height(700)&center='+crd.latitude+','+crd.longitude+'&access_token=' + $scope.accesstoken
                }).then(function successCallback(response) {
                    $scope.pagenum = 0;
                    $scope.jsondata = response.data.data;
                    $scope.paging = undefined;
                    $scope.paging = response.data.paging.next;
                    $scope.pagingprev = undefined;
                    $scope.currurl = 'https://graph.facebook.com/v2.8/search?q='+$scope.input+'&type='+type+'&fields=id,name,picture.width(700).height(700)&access_token=' + $scope.accesstoken;
                    if($scope.input!==undefined)
                    {
                        $location.path('/tableResult');
                    }
                }, function errorCallback(response) {
                    alert("error");
                    $location.path('/');
                    location.reload();
                });
            };

            function error(err) {
                console.warn('ERROR(${err.code}): ${err.message}');
            };
        }
    };

     $scope.tabsearch = function(type) {
        if($scope.input===undefined)
        {
            $location.path('/');
            location.reload();
            return;
        }
        $scope.currtab = type;
        if($scope.currtab!=='place')
        {
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
                if($scope.input!==undefined)
                {
                    $location.path('/tableResult');
                }
            }, function errorCallback(response) {
                alert("error");
                $location.path('/');
                location.reload();
            });
        }
        else
        {
                $location.path('/progressBar');
                navigator.geolocation.getCurrentPosition(success, error, options);
                var options = {
                    enableHighAccuracy: true,
                    timeout: 5000,
                    maximumAge: 0
                };

            function success(pos) {
                var crd = pos.coords;
                $http({
                    method: 'GET',
                    url: 'https://graph.facebook.com/v2.8/search?q='+$scope.input+'&type=place&fields=id,name,picture.width(700).height(700)&center='+crd.latitude+','+crd.longitude+'&access_token=' + $scope.accesstoken
                }).then(function successCallback(response) {
                    $scope.pagenum = 0;
                    $scope.jsondata = response.data.data;
                    $scope.paging = undefined;
                    $scope.paging = response.data.paging.next;
                    $scope.pagingprev = undefined;
                    $scope.currurl = 'https://graph.facebook.com/v2.8/search?q='+$scope.input+'&type=place&fields=id,name,picture.width(700).height(700)&center='+crd.latitude+','+crd.longitude+'&access_token=' + $scope.accesstoken;
                    if($scope.input!==undefined)
                    {
                        $location.path('/tableResult');
                    }
                }, function errorCallback(response) {
                    alert("error");
                    $location.path('/');
                    location.reload();
                });
            };

            function error(err) {
                console.warn(`ERROR(${err.code}): ${err.message}`);
            };
        }
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
            $scope.pagenum--;
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
        $location.path('/detail');
        $scope.leftloaded = false;
        $scope.rightloaded = false;
        $http({
            method: 'GET',
            url: 'https://graph.facebook.com/v2.8/'+id+'?fields=%20albums.limit(5){name,photos.limit(2){name,%20picture}},posts.limit(5){message,created_time},picture.width(700).height(700),name&access_token=' + $scope.accesstoken
        }).then(function successCallback(response) {
            $scope.albums = undefined;
            $scope.posts = undefined;
            $scope.pic = undefined;
            $scope.name = undefined;
            $scope.leftloaded = true;
            $scope.rightloaded = true;
            $scope.detailid = response.data.id;
            $scope.pic = response.data.picture.data;
            $scope.name = response.data.name;
            $scope.albums = response.data.albums.data;
            $scope.posts = response.data.posts.data;
        }, function errorCallback(response) {
            alert("error");
        });
    };

    $scope.tofavdetail = function(id) {
        $location.path('/favdetail');
        $scope.leftloaded = false;
        $scope.rightloaded = false;
        $http({
            method: 'GET',
            url: 'https://graph.facebook.com/v2.8/'+id+'?fields=%20albums.limit(5){name,photos.limit(2){name,%20picture}},posts.limit(5){message,created_time},picture.width(700).height(700),name&access_token=' + $scope.accesstoken
        }).then(function successCallback(response) {
            $scope.albums = undefined;
            $scope.posts = undefined;
            $scope.pic = undefined;
            $scope.name = undefined;
            $scope.leftloaded = true;
            $scope.rightloaded = true;
            $scope.albums = response.data.albums.data;
            $scope.posts = response.data.posts.data;
            $scope.pic = response.data.picture.data;
            $scope.name = response.data.name;
            $scope.detailid = response.data.id;
        }, function errorCallback(response) {
            alert("error");
        });
    };

    $scope.toshare = function(name,pic) {
        FB.ui({
            app_id: '387649901614591',
            method: 'feed',
            link: 'https://developers.facebook.com/docs/dialogs/',
            picture: pic,
            name: name,
            caption: 'FB SEARCH FROM USC CSCI571'
        }, function(response){
                if (response && !response.error_message)
                    alert('Posted Successfully')
                else
                    alert('Not Posted')
        });
    };

    $scope.light = function(id) {
    	var lightup =false;
    	var lightup = localStorage.hasOwnProperty(id);
    	return lightup;
    };

    $scope.fav = function(name,picurl,id) {
    	if(localStorage.hasOwnProperty(id))
    	{
            localStorage.removeItem(id);
    	}
    	else
    	{
    		var favitem = {'itemid':id, 'itemname':name, 'itempicurl':picurl,'type':$scope.currtab};
    		localStorage.setItem(id, JSON.stringify(favitem));
    	}
        $scope.favlist = localStorage;
    };

    $scope.getfavlist = function() {
        $scope.favList = [];
        for(var i = 0; i <localStorage.length; i++)
        {
            var favitem = JSON.parse(localStorage.getItem(localStorage.key(i)));
            $scope.favList.push(favitem);
        }
    };

    $scope.clearbutton = function() {
        $location.path('/');
        location.reload();
    };

     $scope.deletefavitem = function(id) {
        localStorage.removeItem(id);
    };

    String.prototype.replaceAt=function(index, replacement) {
        return this.substr(0, index) + replacement+ this.substr(index + replacement.length);
    }
});