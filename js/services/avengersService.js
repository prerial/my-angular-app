'use strict';
app.factory('avengersService',function(){
	var Avengers = {};
    Avengers.cast = [ 
	  { "Character" : "Iron Man",
		"Name" : "Robert Downey Jr."
	  },
	  { "Character" : "Captain America",
		"Name" : "Chris Evans"
	  },
	  { "Character" : "The Hulk",
		"Name" : "Mark Ruffalo"
	  },
	  { "Character" : "Thor",
		"Name" : "Chris Hemsworth"
	  },
	  { "Character" : "Black Widow",
		"Name" : "Scarlett Johansson"
	  },
	  { "Character" : "Hawkeye",
		"Name" : "Jeremy Renner"
	  },
	  { "Character" : "Loki",
		"Name" : "Tom Hiddleston"
	  },
	  { "Character" : "Agent Phil Coulson",
		"Name" : "Clark Gregg"
	  },
	  { "Character" : "Agent Maria Hill",
		"Name" : "Cobie Smulders"
	  },
	  { "Character" : "Nick Fury",
		"Name" : "Samuel L. Jackson"
	  }
	];
	for (var i = 0; i < Avengers.cast.length; i++) {
		Avengers.cast[i].Index = i;
	}
	
    return Avengers;
});