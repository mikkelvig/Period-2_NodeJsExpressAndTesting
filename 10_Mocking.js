/**
 * Created by Mikkel on 06-03-2016.
 */



//  mock objects are simulated objects that mimic the behavior of real objects in
// controlled ways. A programmer typically creates a mock object to test the behavior
// of some other object, in much the same way that a car designer uses a crash test dummy
// to simulate the dynamic behavior of a human in vehicle impacts.


// Nock is an HTTP mocking and expectations library for Node.js
// Nock can be used to test modules that perform HTTP requests in isolation.

//  This code was added to the JokeApi as part the exercises, and it shows
// mocking of a HTTP-request using Nock:

var expect = require("chai").expect;
var jokes = require("../model/jokes");
var nock = require("nock");

var testJoke = {"id": 1234, "joke": "Sunshine reggae....jubiii", "reference": "unknown"};

var n = nock('http://localhost:3000');


describe('Jokes API Get', function () {
    before(function (done) {
        n.get('/api/joke/random')
            .reply(200,testJoke );
        done();
    });
    it('should fetch the "Sunshine reggae....jubiii" joke', function () {
        jokes.getRandomJoke(function (err, joke) {
            if (err) {
                throw err;
            }
            expect(joke.reference).to.be.equal("unknown");
            expect(joke).to.be.eql(testJoke);
        })
    });
});
