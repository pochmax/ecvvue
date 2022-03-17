<template>
    <section id="firebaseui-auth-container"></section>
</template>

<script>
    import firebase from "firebase/compat/app"
    // import firebaseui from "firebaseui";
    import * as firebaseui from "firebaseui"
    import "firebase/compat/auth"
    import "firebaseui/dist/firebaseui.css";
    export default {
        mounted() {
            let ui = firebaseui.auth.AuthUI.getInstance();
            if (!ui) {
                ui = new firebaseui.auth.AuthUI(firebase.auth());
            }
            var uiConfig = {
                signInSuccessUrl: "/home",
                signInOptions: [firebase.auth.FacebookAuthProvider.PROVIDER_ID,
                firebase.auth.GoogleAuthProvider.PROVIDER_ID,
                firebase.auth.EmailAuthProvider.PROVIDER_ID,]
            };
            ui.start("#firebaseui-auth-container", uiConfig);
        }
        
    }
</script>
