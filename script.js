var app= angular.module("myModule",["ngRoute"]);

app.config(function($routeProvider){
	$routeProvider
		.when("/cat",
		{ 
			controller:"myController",
			templateUrl:"cat.html"
		})
		.when("/dog",
		{
			controller:"myController",
			templateUrl:"dog.html"
		})
		.when("/whale",
		{
			controller:"myController",
			templateUrl:"whale.html"
		})

		.when("/bird",
		{
			controller:"myController",
			templateUrl:"bird.html"
		});
			
		$routeProvider.otherwise(
		{
			controller:"myController",
			templateUrl:"404.html"

		});		

});


app.controller("myController",function(){

	});

