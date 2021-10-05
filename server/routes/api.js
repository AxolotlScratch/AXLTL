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

//GET /favorites/user#: get a list of favorites with user#
router.get('/favorites',
  upController.getFavorites,
  (req, res) => res.status(200).json('List of all articles liked by user was successfully queried.')
);
//POST /favorites: create a new favorite 
router.post('/favorite',
  upController.addUser,
  upController.addPost,
  upController.addFavorite,
  (req, res) => res.status(200).json('Article post was successfully added to favorites.')
);

// YOU CAN CLEAN UP BELOW CODE USING ROUTER
// get all posts a user has liked
// router.get('/:id', (req, res, next) => {
//     // ${req.params.id}
//     console.log("Favorites Router Working");
//     res.end();
// });

//DELETE /favorites/post#
//when user presses a liked post, delete the user and article url combo from junction table
router.delete('/favorite',
  upController.deleteFavorite,
  (req, res) => res.status(200).json('Article post was successfully deleted from favorites.')
);

// router.delete('/:id', (req, res, next) => {
//     // ${req.params.id}
//     console.log("Favorites Router Working");
//     res.end();
// });

// front end will send user name and post url


module.exports = router;

// select * from accounts where id = :accountId