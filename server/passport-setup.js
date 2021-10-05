const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const upController = require('./controllers/upController');

passport.serializeUser(function (user, done) {
  done(null, user.id);
});

passport.deserializeUser(function (id, done) {
  User.findById(id, function (err, user) {
    done(err, user);
  });
});

passport.use(
  new GoogleStrategy(
    {
      clientID:
        '654603570277-pufpvf214ua0glh4veeobvehcmcimfc4.apps.googleusercontent.com',
      clientSecret: '9DlDaIsTb8HhG9bw7uVfW84k',
      callbackURL: 'http://localhost:3000/google/callback',
    },
    function (accessToken, refreshToken, profile, done) {
      //leverage profile id if user is registered in DB
      upController.addUser(profile),
        function (err, user) {
          return done(err, user);
        };
    }
  )
);

// User.findOrCreate({ googleId: profile.id }
