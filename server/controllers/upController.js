const db = require('../models/upModels');

// middlewares, remember to called next() at the end of function!

const upController = {};

upController.addUser = async (req, res, next) => {
  console.log('in upController', req.body);

  const userInfo = [req.body.username];

  console.log(userInfo);
  const userQuery = `INSERT INTO users (username)
    VALUES ($1)
    ON CONFLICT (username)
    DO NOTHING
    RETURNING user_id`;
  try {
    const result = await db.query(userQuery, userInfo);
    // res.locals.newUserId = result.rows[0]._id;
    next();
  } catch (err) {
    return next({
      log: `Error in addUser middleware: ${err}`,
      status: 500,
      message: { error: 'An error occurred. Could not add user.' },
    });
  }
};

upController.addPost = async (req, res, next) => {
  const postInfo = [req.body.articleUrl];
  console.log(postInfo);
  const postQuery = `INSERT INTO posts (article_url)
    VALUES ($1)
    ON CONFLICT (article_url)
    DO NOTHING;`;
  try {
    const result = await db.query(postQuery, postInfo);
    // res.locals.newPostId = result.rows[0]._id;
    next();
  } catch (err) {
    return next({
      log: `Error in addPost middleware: ${err}`,
      status: 500,
      message: { error: 'An error occurred. Could not add post.' },
    });
  }
};

upController.addFavorite = async (req, res, next) => {
  // console.log("we are currently in the addFavorite middleware");
  // console.log("hi, I am the request", req.body);

  const query = `INSERT INTO post_users (user_id, post_id)
    SELECT u.user_id, p.post_id
    FROM users u, posts p
    WHERE u.username = ($1)
    AND p.article_url = ($2);`;

  try {
    const info = [req.body.username, req.body.articleUrl];
    const result = await db.query(query, info);
    // res.locals.newJunctionId = result.rows[0]._id;
    return next();
  } catch (err) {
    return next({
      log: `Error in addFavorite middleware: ${err}`,
      status: 500,
      message: { error: 'An error occurred. Coud not add favorite.' },
    });
  }
};

upController.deleteFavorite = async (req, res, next) => {
  console.log('we are currently in the deleteFavorite middleware');
  console.log('hi, I am the request', req.body);

  const query = `DELETE FROM post_users
    WHERE user_id IN (SELECT user_id FROM users WHERE username = ($1))
    AND post_id IN (SELECT post_id FROM posts WHERE article_url = ($2));`;

  try {
    const info = [req.body.username, req.body.articleUrl];
    const result = await db.query(query, info);
    // res.locals.newJunctionId = result.rows[0]._id;
    return next();
  } catch (err) {
    return next({
      log: `Error in deleteFavorite middleware: ${err}`,
      status: 500,
      message: { error: 'An error occurred. Coud not delete favorite.' },
    });
  }
};

upController.getFavorites = async (req, res, next) => {
  console.log('we are currently in the getFavorites middleware');
  console.log('hi, I am the request', req.body);

  const query = `SELECT * FROM post_users
  WHERE user_id IN (SELECT user_id FROM users WHERE username = ($1));`;

  try {
    const info = [req.body.username];
    const result = await db.query(query, info);
    // res.locals.newJunctionId = result.rows[0]._id;
    return next();
  } catch (err) {
    return next({
      log: `Error in addFavorite middleware: ${err}`,
      status: 500,
      message: { error: 'An error occurred. Could not add favorite.' },
    });
  }
};

module.exports = upController;
