import {
  authChangedListener,
  createUserDocumentFromAuth,
} from "../../../utils/firebase/firebase.js";

export const authListener = new Promise((success, error) => {
  authChangedListener((userState) => {
    if (userState) {
      createUserDocumentFromAuth(userState, userState.displayName);
      success(userState);
    } else {
      error(null);
    }
  });
});
