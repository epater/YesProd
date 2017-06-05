// Stuff angular single page app, include ngRoute
let stuffApp = angular.module("stuffApp", ["ngRoute", "ngAnimate"]);

// Configure routes
stuffApp.config(function ($routeProvider) {
	$routeProvider
		.when("/", {
			templateUrl: "stuffs/home.html",
			controller: "mainController"
		})

		// Route for service page
		.when("/services", {
			templateUrl: "stuffs/services.html",
			controller: "servicesController"
		})

		// Route for video page
		.when("/video", {
			templateUrl: "stuffs/video.html",
			controller: "videoController"
		})

		// Route for photo page
		.when("/photo", {
			templateUrl: "stuffs/photo.html",
			controller: "photoController"
		});
});

// Create controoler and inject angular's $scope
stuffApp.controller("mainController", function($scope) {
	$scope.message = "It's work!";
});

stuffApp.controller("servicesController", function($scope) {
	$scope.message = "It's work!";
});

stuffApp.controller("videoController", function($scope) {
	$scope.message = "It's work!";
});

stuffApp.controller("photoController", function($scope) {
	$scope.message = "It's work!";
});
