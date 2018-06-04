const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys.js');

//console.developer.google.com for keys
passport.use(
	new GoogleStrategy(
		{
			clientID: keys.googleClientID,
			clientSecret: keys.googleClientSecret,
			callbackURL: '/auth/google/callback'
		},
		(accessToken, refreshToken, profile, done) => {
			console.log('ACCESS TOKEN', accessToken);
			console.log('REFRESH TOKEN', refreshToken);
			console.log('PROFILE', JSON.stringify(profile, 0, 2));
		}
	)
);