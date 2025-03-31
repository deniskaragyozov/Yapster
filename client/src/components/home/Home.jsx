import pfpImage from '../../assets/profile.png'

import { Link } from 'react-router'
import styles from './home.module.css'
import Sidebar from '../sidebar/Sidebar.jsx'

export default function Home(){

    return (
        <div className={styles.container}>
            <Sidebar/>
        <main className={styles.feed}>
  <h1>Latest</h1>
            <div className={styles.post}>
                <div className={styles.postHeader}>
                    <img src={pfpImage} alt="Profile Picture" className={styles.profilePicPost}/>
                    <span className={styles.username}>Username</span>
                </div>
                <p className={styles.postText}>This is a sample post with some text content.</p>
                <Link to="#">
                <button className={styles.readMore}>read more...</button>
                </Link>
            </div>
        </main>
    </div>
    )
}