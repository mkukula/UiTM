var APP = angular.module('myFilters', [])

APP.filter('get_author_name', function() {
  return function(input, match) {
  	var name = "";

  	for( var i=0; i < input.length; i++) {
  		if (input[i].id==match) {
  			name=input[i].name
  		}
  	}
    return name;
  };
});

APP.filter('cut', function() {
  return function(input) {
  	result=input.slice(0,100)
  	if (input.length > 100) {
  		result=result+"...";
  	}
    return result;
  };
});
