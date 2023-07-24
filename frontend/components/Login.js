import { GoogleLogin } from "react-google-login";

const clientId = "331433894305-56oun3q5ljv8mfe11ks7bsk4fujdvs7v.apps.googleusercontent.com";

export default function Login() {
   
  const onSuccess = (res) => {
    console.log("LOGIN SUCCESS  Current user:",res.profileObj);
  }
  
  const onFailure = (res) => {
    console.log("LOGIN FAIL res:",res);
  }

  return (
    <div id="signInButton">
      <GoogleLogin
      clientId={clientId}
      buttonText="Login with BITS Mail"
      onSuccess={onSuccess}
      onFailure={onFailure}
      cookiePolicy={'single_host_origin'}
      isSignedIn={true}/>
    </div>
  );
}
