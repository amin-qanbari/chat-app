import React from 'react'
//css
import styles from "./Chats.module.css"

//components
import Navbar from './Navbar'


const Chats = () => {
  return (
    <div className={styles.container}>
        <Navbar/>
    </div>
  )
}

export default Chats