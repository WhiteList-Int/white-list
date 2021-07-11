import firebase from "firebase/app"
import "firebase/auth"
import "firebase/analytics";

const app = firebase.initializeApp({

})

export const auth = app.auth()
export default app
