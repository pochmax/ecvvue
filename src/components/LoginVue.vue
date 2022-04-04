<template>
  <section id="firebaseui-auth-container"></section>
</template>

<script>
import firebase from "firebase/compat/app";
import * as firebaseui from "firebaseui";
import "firebase/compat/auth";
import "firebaseui/dist/firebaseui.css";
export default {
  mounted() {
    let ui = firebaseui.auth.AuthUI.getInstance();
    if (!ui) {
      ui = new firebaseui.auth.AuthUI(firebase.auth());
    }
    var uiConfig = {
      // signInFlow: "login",
      signInSuccessUrl: "/",
      signInOptions: [
        firebase.auth.GithubAuthProvider.PROVIDER_ID,
        firebase.auth.EmailAuthProvider.PROVIDER_ID,
        firebase.auth.PhoneAuthProvider.PROVIDER_ID,
      ],
    };
    ui.start("#firebaseui-auth-container", uiConfig);
  },
};
</script>
