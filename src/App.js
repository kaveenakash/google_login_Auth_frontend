import "./App.css";
import GoogleLogin from "react-google-login";
import axios from "axios";

function App() {
  const responseSuccessGoogle = (response) => {
    console.log(response);
    axios({
      method: "POST",
      url: "http://localhost:8000/api/googlelogin",
      data: {
        tokenId: response.tokenId,
      },
    })
      .then((response) => {
        console.log("Google login success",response);
      })
      .catch((err) => {
       
      });
  };
  const responseErrorGoogle = (response) => {
    
  };

  return (
    <div className="App">
      <h1>Login with google</h1>
      <GoogleLogin
        clientId="361577374258-c45jn6o7muma9cj62ptm5r7ivvtdfa8k.apps.googleusercontent.com"
        buttonText="Login with Google"
        onSuccess={responseSuccessGoogle}
        onFailure={responseErrorGoogle}
        cookiePolicy={"single_host_origin"}
      />
    </div>
  );
}

export default App;
