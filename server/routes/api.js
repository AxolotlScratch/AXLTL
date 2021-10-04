const express = require('express');
const router = express.Router();
const upController = require('../controllers/upController.js');

// route handlers 
//test if router is correctly connected.
// router.get('/', (req, res, next) => {
//     console.log("Router Working");
//     res.send('this works perfectly');
// })

//ROUTES//
// GET /:id : add username to user table
// router.post('/user',
//   upController.addUser,
//   (req, res) => res.status(200).json('Username was successfully added to users table.')
// );

//GET /favorites/user#: get a list of favorites with user#

//POST /favorites: create a new favorite 
router.post('/favorite',
  upController.addUser,
  upController.addPost,
  upController.addFavorite,
  (req, res) => res.status(200).json('Article post was successfully added to favorites.')
);

// DELETE /favorites/post#

// YOU CAN CLEAN UP BELOW CODE USING ROUTER
// get all posts a user has liked
// router.get('/:id', (req, res, next) => {
//     // ${req.params.id}
//     console.log("Favorites Router Working");
//     res.end();
// });

// // when user presses a liked post, delete the user and article url combo from junction table
// router.delete('/:id', (req, res, next) => {
//     // ${req.params.id}
//     console.log("Favorites Router Working");
//     res.end();
// });

// front end will send user name and post url


module.exports = router;

// select * from accounts where id = :accountId