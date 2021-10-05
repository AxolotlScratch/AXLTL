import React from 'react';
import Login from './Login';
import CreateAccount from './CreateAccount';
import NewsfeedDisplay from './NewsfeedDisplay';
//import GoogleLogin from 'react-google-login';

function App(props) {
  return (
    <div>
      <Login />

      <div id='announcementBar'>
        <div id='newsNav'>
          <span>Home</span>
          <span>Favorite</span>
        </div>
        <div id='accountNav'>
          <span>Settings</span>
          <span onClick={() => location.assign('http://localhost:3000/google')}>
            Login
          </span>
        </div>
      </div>
      <div id='newsDisplay'>
        <NewsfeedDisplay />
        {/* {displayArticle && <ArticleModal/>}
            {displayLogin && <Login/>}
            {displayCreateAcc && <CreateAccount/>} */}
      </div>
    </div>
  );
}

export default App;
