/**
 * Created by Mikkel on 06-03-2016.
 */

// Express is a routing and middleware web framework that has minimal functionality
// of its own. An Express application is essentially a series of middleware function calls.

// Middleware functions are functions that have access to the request object (req),
// the response object (res), and the next middleware function in the application’s
// request-response cycle. The next middleware function is commonly denoted by a variable
// named next.


// Bind middleware to an instance of the app object by using the app.use()
// This example shows a middleware function with no mount path.
// The function is executed every time the app receives a request.

var app = express();

app.use(function (req, res, next) {
    console.log('Time:', Date.now());
    next();
});


// This is a small example from the JokeApi assignment. Any request on the path /api, is
// handled by jokeApi
var jokeApi = require('./routes/jokeApi');

app.use('/api', jokeApi);
