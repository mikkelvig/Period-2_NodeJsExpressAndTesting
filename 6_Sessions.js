/**
 * Created by Mikkel on 06-03-2016.
 */

// A cookie is a small piece of data that a website asks your browser to store on your computer
// or mobile device. The cookie allows the website to "remember" your actions or preferences over
// time.

// if a cookie is used to track user behavior, user consent is required, and a solution to handle
// this must be implemented on the site.


// How to use sessions:

// Start by enabling session:
app.use(session({secret:'secret_3162735',saveUninitialized:true, resave: true}));
// Get the session like this:
var session = req.session;
// Add objects to the session like this:
session.bobaFett = req.body.userInput;




// This part is from ex 3 - sessions
// custom middleware executed for all requests to the server
app.use(function(req,res,next){
    var session = req.session;
    if(session.userName){
        return next();
    } else{
        if(req.body.userName){
            session.userName = req.body.userName;
            return res.redirect('/');
        } else {
            req.url = '/login';
            return next();
        }
    }
});
