const router = require('express').Router();
const passport = require('passport');


// auth logout
router.get('/api/logout', (req, res) => {
    console.log("logout backend")
    req.logout();
    res.send("success")
    // res.redirect("http://localhost:3000/login");
});

//auth with google
router.get('/api/google', passport.authenticate('google', {
    scope: ['profile']
}));

// callback route for google to redirect to
// hand control to passport to use code to grab profile info
router.get('/api/google/redirect', passport.authenticate('google'), (req, res) => {
    // res.send(req.user);
    // res.redirect('/profile');
    console.log("google redirect")
    // var token = req.username;
    res.redirect("http://localhost:3000");
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

router.get('/api/checkuser', authCheck, (req, res) => {
   console.log("in user fetch:"+req.user)
    res.json({ user: req.user });
});

//local signup rout


router.post('/api/signup', passport.authenticate('local-signup', {
    successRedirect : '/api/newuserCreated', // redirect to the secure profile section
    failureRedirect : '/api/userExist' // redirect back to the signup page if there is an error
    // failureFlash : true // allow flash messages
}));


router.get('/api/userExist',(req,res)=>{
    res.send("UserExist");

})

router.get('/api/newuserCreated',(req,res)=>{
    res.redirect("http://localhost:3000");

})

//local login

router.post('/api/localLogin',passport.authenticate('local-login', {
    successRedirect : '/api/loginsuccess', // redirect to the secure profile section
    failureRedirect : '/api/loginfailed' // redirect back to the signup page if there is an error
    // failureFlash : true // allow flash messages
}))


router.get('/api/loginfailed',(req,res)=>{
    res.send("LoginFailed");

})

router.get('/api/loginsuccess',(req,res)=>{
    console.log("login success")
    res.redirect("http://localhost:3000");

})


module.exports = router;