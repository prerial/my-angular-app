'use strict';
app.filter('shuffle', function() {
    return function(input) {
		return input.split("").reverse().join("");
    };
});