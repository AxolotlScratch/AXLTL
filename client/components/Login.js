import React from 'react';
import GoogleLogin from 'react-google-login';

const responseGoogle = (response) => {
  console.log(response);
  console.log(response.profileObj);
};

function Login(props) {
  
  
  return (
    <div id='loginPg'>
      <GoogleLogin
        clientId='654603570277-pufpvf214ua0glh4veeobvehcmcimfc4.apps.googleusercontent.com'
        buttonText='Login with Google'
        onSuccess={(response) => console.log(response.profileObj)}
        onFailure={responseGoogle}
        cookiePolicy='single_host_origin'
      />
    </div>
  );
}
export default Login;
