import React from 'react'
//css
import styles from "./Navbar.module.css"
const Navbar = () => {
  return (
    <div className={styles.container}>
        <div className={styles.name}>Amingram</div>
        <div className={styles.logout}>Logout</div>
    </div>
  )
}

export default Navbar