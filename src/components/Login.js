import React from 'react'

//svg
import google from "../assets/google.svg"

//css
import styles from "./Login.module.css"

const Login = () => {
  return (
    <div className={styles.loginPage}>
        <div className={styles.loginCard}>
            <h2> Wellcome to Amingram</h2>
            <div className={styles.button}>
                <img src={google} alt="google" /> Sign in With Google
            </div>
        </div>
    </div>
  )
}

export default Login