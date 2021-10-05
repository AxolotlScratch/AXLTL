const express = require('express');
const app = express();
const apiRouter = require('./routes/api');
const passport = require('passport');
const cookieSession = require('cookie-session');
require('./passport-setup');

const path = require('path');
const port = process.envPORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cookieSession({
  name: 'AXLTL-session',
  keys: ['key1', 'key2']
}))

app.use(passport.initialize());
app.use(passport.session()); //leverages sessions

//changed '../build' to '../client'

app.use('/', express.static(path.join(__dirname, '../client')));
//need a route to access
app.use('/api', apiRouter);

//built a route to the homepage
// app.get('/', (req, res) => {
//   console.log('in app.get serving html file');

//   return res
//     .status(200)
//     .sendFile(path.resolve(__dirname, '.../client/index.html'));
// });

app.get('/failed', (req, res) => res.send('Failed to log in!'));

app.get(
  '/google',
  passport.authenticate('google', { scope: ['profile', 'email'] })
);

//http://www.passportjs.org/docs/authenticate/

app.get(
  '/google/callback',
  passport.authenticate('google', { failureRedirect: '/failed' }),
  function (req, res) {
    // Successful authentication, redirect home.
    res.status(200).redirect('/');
  }
);

// app.get('/google/auth', (req, res) => {
//   console.log('in google consent route');

//   const url =
//     'https://accounts.google.com/o/oauth2/v2/auth?' +
//     'scope=https%3A//www.googleapis.com/auth/drive.metadata.readonly&' +
//     'access_type=offline&' +
//     // include_granted_scopes=true&
//     'response_type=code&' +
//     // state=state_parameter_passthrough_value&
//     'redirect_uri=http://localhost:3000' +
//     'client_id=654603570277-pufpvf214ua0glh4veeobvehcmcimfc4.apps.googleusercontent.com'; // replace with client id    clientId='654603570277-pufpvf214ua0glh4veeobvehcmcimfc4.apps.googleusercontent.com'
//   res.redirect(url);
// });

// catch-all route handler for any requests to an unknown route
app.use((req, res) =>
  res.status(404).send("This is not the page you're looking for...")
);

// Global error handling middleware
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 400,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).send(errorObj.message);
});

// start server and log which port is being listened
app.listen(port, () => console.log(`Listening on port 3000`));
