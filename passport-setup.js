const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth2').Strategy;
const keys = require('./config/keys');
const User = require('./models/user');
const LocalStrategy = require('passport-local').Strategy;;
const bcrypt = require('bcrypt');
const saltRounds = 10;


encyptPass = function (plainpassword) {

    return bcrypt.hash(plainpassword, saltRounds, function (err, hash) {
        // Store hash in your password DB.

        if (err) {
            console.log(err)
        }
        else {
            console.log("hash:" + hash)
            return hash
        }
    });
}


passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    User.findById(id).then((user) => {
        done(null, user);
    });
});


console.log("clientid: " + keys.googleKey.clientID)

passport.use(
    new GoogleStrategy({
        // options for google strategy
        clientID: keys.googleKey.clientID,
        clientSecret: keys.googleKey.clientSecret,
        callbackURL: '/api/google/redirect'
    }, (accessToken, refreshToken, profile, done) => {
        // check if user already exists in our own db
        User.findOne({ googleId: profile.id }).then((currentUser) => {
            if (currentUser) {
                // already have this user
                console.log('user is: ', currentUser);
                done(null, currentUser);
                console.log(profile)
            } else {
                // if not, create user in our db
                console.log(profile)
                User.create({
                    googleId: profile.id,
                    username: profile.displayName,
                    thumbnail: profile._json.picture,
                    type: "google"
                }).then((newUser) => {
                    console.log('created new user: ', newUser);
                    done(null, newUser);
                });
            }
        });
    })
);

//local strategy signup

passport.use('local-signup', new LocalStrategy({
    // by default, local strategy uses username and password, we will override with 
    usernameField: 'username',
    passwordField: 'password',
    passReqToCallback: true // allows us to pass back the entire request to the callback
},
    (req, username, password, done) => {

        console.log("entire req:" + req.body.username)

        // find a user whose username is the same as the forms username
        // we are checking to see if the user trying to login already exists
        User.findOne({ 'username': username, type: "local" }).then((currentUser) => {
            if (currentUser) {
                // already have this user
                console.log('user is: ', currentUser);
                done(null, false);

            } else {
                // if not, create user in our db

                bcrypt.hash(password, saltRounds, function (err, hash) {
                    // Store hash in your password DB.

                    if (err) {
                        throw err
                    }

                    console.log("in cerate new user:")
                    //has password
                    //
                    console.log("hash password:" + hash)
                    User.create({
                        username: username,
                        password: hash,
                        email: req.body.email,
                        type: "local"
                    }).then((newUser) => {
                        console.log('created new user: ', newUser);
                        done(null, newUser);
                    });


                });

            }
        }
        );
    })
);

//local tsrategy login

passport.use('local-login', new LocalStrategy({
    // by default, local strategy uses username and password, we will override with email
    usernameField: 'username',
    passwordField: 'password',
    passReqToCallback: true // allows us to pass back the entire request to the callback
},
    (req, username, password, done) => {

        console.log("entire req:" + req.body.email)

        // find a user whose username is the same as the forms username
        // we are checking to see if the user trying to login already exists
        User.findOne({ 'username': username, type: "local" }).then((currentUser) => {
            if (currentUser) {
                // already have this user
                console.log('user is: ', currentUser.password);
                //check password match

                bcrypt.compare(password, currentUser.password, function (err, result) {
                    // result == true

                    if (err) {
                        throw err
                    }
                    if (result) {
                        console.log("password check passed")
                        done(null, currentUser);

                    }
                    else {

                        ///password match failed
                        done(null, false);
                    }
                });

            } else {
                // fail login for no user match

                done(null, false);

            }
        }
        );
    })
);

