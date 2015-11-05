var clubs = [];
$(document).ready(function(){
	//initialize parse
	Parse.initialize("dO5dcZCWKkHdj1w6WZUqekwO7W2XZ9QZ2YvRliNb", "ebdBBzIGWLCbJO6PCVViW8yhOWEuxDC8qZxVvG7h");

	//get the clubs and display them
	getClubs();
});

//display the clubs on the website
var displayClubs = function()
{
	for(var i = 0; i < clubs.length; i++)
	{
		var club = clubs[i];

		$(".clubs").append(""
			+"<div class=\"club col-md-3\">"
				+"<h4>"+club.name+"</h4>"
				+"<p>"+club.description+"</p>"
			+"</div>");
	}
}

//get the clubs
var getClubs = function()
{
	var Club = Parse.Object.extend("Club");
	var query = new Parse.Query(Club);
	query.find({
  		success: function(results) {
    		// Do something with the returned Parse.Object values
    		for (var i = 0; i < results.length; i++) {
    			var clubObject = {name: results[i].get("name"), description: results[i].get("description")};
      			clubs.push(clubObject);
    		}

    		//display the clubs on the site
    		displayClubs();
  		},
  		error: function(error) {
    		console.log("Error: " + error.code + " " + error.message);
  		}
	});
}