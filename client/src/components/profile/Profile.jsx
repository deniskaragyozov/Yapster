import logoImage from '../../assets/logo.png'
import pfpImage from '../../assets/profile.png'
import homeImage from '../../assets/home.png'
import logoutImage from '../../assets/logout.png'

import { Link } from 'react-router'
import styles from './profile.module.css'
import Sidebar from '../sidebar/Sidebar.jsx'

export default function Profile() {
    return (
        <>
            <div className={styles.container}>
              <Sidebar/>
                <main className={styles.feed}>
                    <div className={styles.profileContainer}>

                        <div className={styles.profileHeader}>
                            <img src={pfpImage} alt="Profile Picture" className={styles.profilePic} />
                            <h1 className={styles.usernameProfile}>Username</h1>
                            <p className={styles.followers}>Followers: 123</p>
                            <p className={styles.bio}>
                                This is a sample bio. Write something about yourself here. It can be a short description or anything you'd like to share.
                            </p>
                        </div>

                        <div className={styles.postsContainer}>
                            <div className={styles.post}>
                                <div className={styles.postHeader}>
                                    <img src={pfpImage} alt="Profile Picture" className={styles.profilePicPost} />
                                    <span className={styles.usernamePost}>Username</span>
                                </div>
                                <p className={styles.postText}>This is a sample post with some text content.</p>
                                <Link to="#">
                                    <button className={styles.readMore}>read more...</button>
                                </Link>
                            </div>

                            <div className={styles.post}>
                                <div className={styles.postHeader}>
                                    <img src={pfpImage} alt="Profile Picture" className={styles.profilePicPost} />
                                    <span className={styles.usernamePost}>Username</span>
                                </div>
                                <p className={styles.postText}>This is another sample post with some text content.</p>
                                <Link to="#">
                                    <button className={styles.readMore}>read more...</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </>
    )
}
