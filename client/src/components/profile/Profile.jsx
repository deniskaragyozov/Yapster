import pfpImage from '../../assets/profile.png'

import { Link, useParams } from 'react-router'
import styles from './profile.module.css'
import Sidebar from '../sidebar/Sidebar.jsx'
import { useUser } from '../../api/usersApi.js'

export default function Profile() {
    const params = useParams();

    const userId = params.userId;

    const user = useUser(userId);

    return (
        <>
            <div className={styles.container}>
              <Sidebar/>
                <main className={styles.feed}>
                    <div className={styles.profileContainer}>

                        <div className={styles.profileHeader}>
                            <img src={!!user.profilePicUrl ? user.profilePicUrl : pfpImage} alt="Profile Picture" className={styles.profilePic} />
                            <h1 className={styles.usernameProfile}>{user.username}</h1>
                            <h3>Bio:</h3>
                            <p className={styles.bio}>
                            {!!user.bio ? user.bio : "No bio yet"}
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
