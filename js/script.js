var app = angular.module("myApp", ['myFilters']);

app.controller("myController", function($scope, $http) {

	$scope.currentView = "postListView";

	$scope.posts = [];
	$http.get("http://jsonplaceholder.typicode.com/posts").success(function(data) {
		$scope.posts = data;
	});

	$scope.users = [];
	$http.get("http://jsonplaceholder.typicode.com/users").success(function(data) {
		$scope.users = data;
	});

	$scope.currentPost = {};
	
	$scope.goToPost = function(id) {
		$http.get("http://jsonplaceholder.typicode.com/posts/" + id).success(function(data) {
			$scope.currentPost = data;
			$scope.currentView = "postView";
		});
	};

	$scope.changeView = function(viewName) {
		$scope.currentView = viewName;
	};

	$scope.userPosts = [];
	$scope.listUserPosts = function(userId) {
		$http.get("http://jsonplaceholder.typicode.com/posts?userId=" + userId).success(function(data) {
			$scope.userPosts = data;
			$scope.currentView = "userPostsView";
		});
	};
});

