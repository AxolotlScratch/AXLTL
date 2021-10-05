import React from 'react';
// import GoogleLogin from 'react-google-login';

// const responseGoogle = (response) => {
//   console.log(response);
//   //console.log(response.profileObj);
// };

function Login(props) {
  return (
    <div id='loginPg'>
      {/* <GoogleLogin
        // onclick={() =>
        //   location.assign({ url: 'http://localhost:3000/google/auth' })
        // }
        clientId='654603570277-pufpvf214ua0glh4veeobvehcmcimfc4.apps.googleusercontent.com'
        buttonText='Login with Google'
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={'single_host_origin'}
        // isSignedIn={true}
      /> */}
    </div>
  );
}
export default Login;
