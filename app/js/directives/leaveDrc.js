'use strict';
app.directive("leave", function(){
 return function(scope, element) {
      element.bind("mouseleave", function(){
	    element.css('background-color', 'green');
      })
    }
});