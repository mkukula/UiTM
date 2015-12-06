(function(angular) {
  'use strict';
angular.module('ngRouteExample', ['ngRoute', 'myFilters'])

 .controller('MainController', function($scope, $route, $routeParams, $location) {
     $scope.$route = $route;
     $scope.$location = $location;
     $scope.$routeParams = $routeParams;
 })

 .controller('PostController', function($scope, $routeParams, $http) {
     $scope.currentView = "postListView";
     $scope.name = "PostController";
     $scope.params = $routeParams;
     $scope.currentView = "postListView";
     $scope.posts = [];
     $http.get("http://jsonplaceholder.typicode.com/posts").success(function(data) {
      $scope.posts = data;
     });
     $scope.users = [];
     $http.get("http://jsonplaceholder.typicode.com/users").success(function(data) {
      $scope.users = data;
     });
     $scope.goToPost = function(id) {
      $http.get("http://jsonplaceholder.typicode.com/posts/" + id).success(function(data) {
      $scope.currentPost = data;
      $scope.currentView = "postView";
      });
     }       
 })

 .controller('UserController', function($scope, $routeParams, $http) {
     $scope.currentView = "userListView";
     $scope.name = "UserController";
     $scope.params = $routeParams;
     $scope.posts = [];
     $http.get("http://jsonplaceholder.typicode.com/posts").success(function(data) {
      $scope.posts = data;
     });
     $scope.users = [];
     $http.get("http://jsonplaceholder.typicode.com/users").success(function(data) {
      $scope.users = data;
     }); 
     $scope.listUserPosts = function(userId) {
      $http.get("http://jsonplaceholder.typicode.com/posts?userId=" + userId).success(function(data) {
      $scope.userPosts = data;
      $scope.currentView = "userPostsView";
     });
     };
 })

.config(function($routeProvider, $locationProvider) {
  $routeProvider
  .when('/', {
    templateUrl: 'posty.html',
    controller: 'PostController',
  })
  .when('/Posty', {
    templateUrl: 'posty.html',
    controller: 'PostController',
  })
  .when('/Uzytkownicy', {
    templateUrl: 'uzytkownicy.html',
    controller: 'UserController',
  })
  .when('/OMnie', {
    templateUrl: 'omnie.html',
  });

  // configure html5 to get links working on jsfiddle
  $locationProvider.html5Mode(true);
});
})(window.angular);