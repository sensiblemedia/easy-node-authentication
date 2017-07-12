// config/auth.js

// expose our config directly to our application using module.exports
const env = process.env;
const facebookAppId = (env.FACEBOOK_APP_ID);
const facebookAppSecret = (env.FACEBOOK_APP_SECRET);
console.log('auth.js: ENV FACEBOOK_APP_ID =' + facebookAppId);
console.log('auth.js: ENV FACEBOOK_APP_SECRET =' + facebookAppSecret);
module.exports = {

    'facebookAuth' : {
        'clientID'        : facebookAppId, // your App ID
        'clientSecret'    : facebookAppSecret, // your App Secret
        'callbackURL'     : 'http://auth-nodejs-authenticate.127.0.0.1.nip.io/auth/facebook/callback',
        'profileURL': 'https://graph.facebook.com/v2.5/me?fields=first_name,last_name,email'

    },

    'twitterAuth' : {
        'consumerKey'        : 'your-consumer-key-here',
        'consumerSecret'     : 'your-client-secret-here',
        'callbackURL'        : 'http://localhost:8080/auth/twitter/callback'
    },

    'googleAuth' : {
        'clientID'         : 'your-secret-clientID-here',
        'clientSecret'     : 'your-client-secret-here',
        'callbackURL'      : 'http://localhost:8080/auth/google/callback'
    }

};


