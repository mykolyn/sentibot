const router = require('express').Router();
const passport = require('passport');


// auth logout
router.get('/logout', (req, res) => {
    console.log("logout backend")
    req.logout();
    res.send("success")
    // res.redirect("http://localhost:3000/login");
});

//auth with google
router.get('/google', passport.authenticate('google', {
    scope: ['profile']
}));

// callback route for google to redirect to
// hand control to passport to use code to grab profile info
router.get('/google/redirect', passport.authenticate('google'), (req, res) => {
    // res.send(req.user);
    // res.redirect('/profile');
    console.log("google redirect")
    // var token = req.username;
    res.redirect("https://sleepy-atoll-40002.herokuapp.com/");
});


const authCheck = (req, res, next) => {
    console.log("in user check"+req.user)
    if(!req.user){

        console.log("in if statement")
        // res.send("test data from user check")
        // res.redirect('/login');
        res.send("NoUser")
    } else {
        next();
    }
};

router.get('/checkuser', authCheck, (req, res) => {
   console.log("in user fetch:"+req.user)
    res.json({ user: req.user });
});

//local signup rout


router.post('/signup', passport.authenticate('local-signup', {
    successRedirect : '/api/newuserCreated', // redirect to the secure profile section
    failureRedirect : '/api/userExist' // redirect back to the signup page if there is an error
    // failureFlash : true // allow flash messages
}));


router.get('/userExist',(req,res)=>{
    res.send("UserExist");

})

router.get('/newuserCreated',(req,res)=>{
    res.redirect("https://sleepy-atoll-40002.herokuapp.com/");

})

//local login

router.post('/localLogin',passport.authenticate('local-login', {
    successRedirect : '/api/loginsuccess', // redirect to the secure profile section
    failureRedirect : '/api/loginfailed' // redirect back to the signup page if there is an error
    // failureFlash : true // allow flash messages
}))


router.get('/loginfailed',(req,res)=>{
    res.send("LoginFailed");

})

router.get('/loginsuccess',(req,res)=>{
    console.log("login success")
    res.redirect("https://sleepy-atoll-40002.herokuapp.com/");

})


module.exports = router;