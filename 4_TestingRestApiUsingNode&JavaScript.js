/**
 * Created by Mikkel on 04-03-2016.
 */

// The following is taken from my own project: JokeApiExercises-Period2
// This code is in the apiTester.js file found here:
// https://github.com/mikkelvig/JokeApiExercises-Period2/blob/master/testOfApi/apiTester.js

// For this question, i haven't included anything about Mocha or Chai, as this is included
// in another question.
// I use the request-module to perform calls to my Rest-Api, and then i console.log
// the response, and check if i get what i wanted.

// Using the request package to perform actual HTTP-requests, was recommended in the
// exercise description.

// Simply running this file wont work, unless the actual joke-Api is running as well.

var request = require("request");

var testOfPost = {
    url: "http://localhost:3000/api/joke",
    method: "POST",
    json: true,
    body: {joke : "Darth Vader is the prom queen"}
};

request(testOfPost, function(error, response, body){
    console.log(body.joke); // This will log 'Darth Vader is the prom queen'
});

request('http://localhost:3000/api/joke/random', function (error, response, body) {
    if (!error && response.statusCode == 200) {
        var randomJoke = JSON.parse(body);
        console.log("Here we have a random joke: "+randomJoke.joke)
    }
});

request('http://localhost:3000/api/jokes', function (error, response, body) {
    if (!error && response.statusCode == 200) {
        var allJokes = JSON.parse(body);
        console.log("All the jokes: "+allJokes.jokes)
    }
});
