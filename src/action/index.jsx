import { auth, Provider } from "../firebase";

export function SignUpAPI() {
  return (dispatch) => {
    auth
      .SignInWithPopup(Provider)
      .then((payload) => {
        console.log(payload);
      })
      .catch((Error) => {
        alert(Error.message);
      });
  };
}
