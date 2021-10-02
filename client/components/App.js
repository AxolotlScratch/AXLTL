import React from 'react';
import Login from './Login';
import CreateAccount from './CreateAccount';
import ArticleModal from './ArticleModal'
import NewsfeedDisplay from './NewsfeedDisplay'

function App (props){

    //functionality for Home & Favorite

    //functionality for Login Module 
    return(
      <div>
          <div id='announcementBar'> 
              <div id='newsNav'>
                  <span>Home</span>
                  <span>Favorite</span>
              </div>
              <div id='accountNav'>
                  <span>Settings</span>
                  <span>Login</span>
              </div>
          </div>
          <div id='newsDisplay'>
            <NewsfeedDisplay/>
            {/* {displayArticle && <ArticleModal/>}
            {displayLogin && <Login/>}
            {displayCreateAcc && <CreateAccount/>} */}
          </div>
      </div>
    )
}

export default App;