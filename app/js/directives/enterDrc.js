'use strict';
app.directive("enter", function(){
 return function(scope, element) {
      element.bind("mouseenter", function(){
	    element.css('background-color', 'blue');
      })
    }
});