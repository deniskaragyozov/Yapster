import logoImage from '../../assets/logo_text.png'
import pfpImage from '../../assets/profile.png'
import notisImage from '../../assets/notifications.png'
import logoutImage from '../../assets/logout.png'

import styles from './home.module.css'

export default function Home(){
    return (
        // TODO: CHANGE ALL ANCHORS TO LINKS
        <div className={styles.container}>
        <nav className={styles.sidebar}>
            <ul>
                <li><img src={logoImage} alt="logo" className={styles.sidebarLogoImg}/></li>
                <li><img src={notisImage} alt="Notifications Icon" className={styles.navIcons}/><a href="#">Notifications</a></li>
                <li><img src={pfpImage} alt="Profile Icon"  className={styles.navIcons}/><a href="#">Profile</a></li>
                <li><img src={logoutImage} alt="Logout Icon" className={styles.navIcons} /><a href="#">Logout</a></li>
                <li><a href="#"><button className={styles.postBtn}>Post</button></a></li>
            </ul>
        </nav>
        <main className={styles.feed}>
  <h1>Latest</h1>
            <div className={styles.post}>
                <div className={styles.postHeader}>
                    <img src={pfpImage} alt="Profile Picture" className={styles.profilePic}/>
                    <span className={styles.username}>Username</span>
                </div>
                <p className={styles.postText}>This is a sample post with some text content.</p>
                <button className={styles.readMore}>read more...</button>
                {/* Add on the details page 
                <button className="like-btn">
                    <img src="assets/like.png" alt="Like">
                </button> */}
            </div>
        </main>
    </div>
    )
}