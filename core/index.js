const http = require("http");

const next = require('next');

const express = require('express');
const esession = require('express-session')

const passport = require("passport");
const passportSnap = require("passport-snapchat");
const {Strategy : SnapchatStrategy} = passportSnap;


const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const nxt = next({ dev });
const handle = nxt.getRequestHandler();



function User(snapchatId) {
    this.snapchatId = snapchatId;


    return this;
}

// passport snapchat config
passport.use(new SnapchatStrategy({
        clientID: "0dc791e7-dace-4966-84e5-7e12aa537ef0",
        clientSecret: "",
        callbackURL: "http://localhost:3000/auth/snapchat/callback",
        profileFields: ['id', 'displayName', 'bitmoji'],
        scope: [
            'user.display_name',
            'user.bitmoji.avatar',
            'user.external_id'
        ],
        pkce: true,
        state: true,
    },
    // serialize user
    async function(accessToken, refreshToken, profile, done) {

        console.log(`Bearer ${accessToken}`);
        console.log(`Profile`, profile);
        console.log(`JSON`, profile._json.data.me);
        console.log(`curl -X GET 'https://bitmoji.api.snapchat.com/bitmoji-for-games/model?avatar_id=${profile.bitmoji.avatarId}&lod=3' \\\n-H 'Accept-Encoding: gzip, deflate' \\\n-H 'Authorization: Bearer ${accessToken}' --output test.glb`);

        let user = new User(profile.id);

        return done(null, user);
    }
));


passport.serializeUser(function(user, done) {
    done(null, user);
});

passport.deserializeUser(function(user, done) {
    done(null, user);
});
  
  

nxt.prepare().then(() => {

    let app = express();

    app.use(esession({
        secret: "doggo",
        resave: true,
        saveUninitialized: true
    }));


    let snapchat = passport.authenticate('snapchat', { 
        successRedirect: '/home',
        failureRedirect: '/login'
    });
    
    app.get('/auth/snapchat', snapchat);
    app.get('/auth/snapchat/callback', snapchat);
    
    
    app.use(express.json());

    app.use("/api", require('./api.js'));

    // if none get resolved by express then let the pages get resolved by next
    app.all('*', handle);
    
    const httpServer = http.createServer(app);
    httpServer.listen(port, (err) => {
        if (err) throw err;
        console.log(`> Ready on http://localhost:${port}`);
    });
});