import React from 'react'
import firebase from "firebase/app"
import { auth } from "../firebase"

//svg
import google from "../assets/google.svg"

//css
import styles from "./Login.module.css"

const Login = () => {
  return (
    <div className={styles.loginPage}>
        <div className={styles.loginCard}>
            <h2> Wellcome to Amingram</h2>
            <div
            onClick={() =>auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())}
            className={styles.button}>
                <img src={google} alt="google" /> Sign in With Google
            </div>
        </div>
    </div>
  )
}

export default Login