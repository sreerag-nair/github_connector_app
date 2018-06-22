const body_parser = require('body-parser')
const passport = require('passport');
const GitHubStrategy = require('passport-github').Strategy;
const app = require('express')();
const axios = require('axios');


app.use(body_parser.json())
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS')
    next();
});
app.use(passport.initialize())


app.listen(8001, function () {
    console.log("SERVER RUNNING ON 8001")
})

//----------------------GITHUB STRATEGY--------------------------//

passport.use(new GitHubStrategy({
    clientID: '3fb8c782622ac4a1d0a6',
    clientSecret: 'fe62abf8e17b91d71e2c94c367af00e6ba7ba8e6',
    callbackURL: 'http://localhost:3000/d',
    passReqToCallback: true,
    scope: ['user:email', 'gist'],         //the dealbreaker!!!
}, function (req, accessToken, refreshToken, profile, done) {
    console.log("access token : ", accessToken)
    done(null, { access_token: accessToken })
}))


//----------------------GITHUB STRATEGY--------------------------//


app.get('/authenticate', passport.authenticate('github', {
    session: false
}))

app.get('/getaccesstoken', function (req, res, next) {
    console.log("CAME HERE")

    passport.authenticate('github', {
        session: false
    }, function (err, user, info) {
    
        console.log("user : ", user);
        
        if(user){
            res.send({access_token : user.access_token})

        }
        else{
            res.status(404).send()
        }
        
    })(req, res, next);

   
})




app.post('/create_gist', function (req, res, next) {

    passport.authenticate('github', {
        session: false
    }, function (err, user, info) {

        console.log("user : ", user);

    })(req, res, next);

})

