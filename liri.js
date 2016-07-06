//VARIABLES AND REQUIRED FILES/LIBRARIES
var twitterKeys  = require('./keys.js');
var fs = require('fs');
var request = require('request');

var command = process.argv[2];
var query = process.argv[3];


//FUNCTIONS
function tweeter(){
  //do the twitter thing
};

function movies(){
  //Do the movie thing
//request('http://www.omdbapi.com/?t=remember+the+titans&y=&plot=short&r=json', function (error, response, body) {

  //if there is no error and the response status is success
   //if (!error && response.statusCode == 200) {
      // do this
     //   console.log("The movie's rating is: " + JSON.parse(body)["imdbRating"])
    //}
};

function music(){
//do the spotify thing

};

function randomTask(){
  //read from random.txt and do stuff
};

//MAGIC TIME  
//Capture the user input and process the appropriate request

if (command == "my-tweets"){
  console.log("tweet " + query);
} else if (command == "spotify-this-song"){
  console.log("spotify " + query);
} else if (command == "movie-this"){
  console.log("OMDB " + query);
} else if (command == "do-what-it-says"){
  console.log("do it");
} else {
  console.log("Please try again");
};


