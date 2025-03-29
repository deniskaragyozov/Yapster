import logoImage from '../../assets/logo.png'
import pfpImage from '../../assets/profile.png'
import notisImage from '../../assets/notifications.png'
import logoutImage from '../../assets/logout.png'

import { Link } from 'react-router'
import styles from './home.module.css'

export default function Home(){
    return (
        <div className={styles.container}>
        <nav className={styles.sidebar}>
            <ul>
                <li><Link to='/'><img src={logoImage} alt="logo" className={styles.sidebarLogoImg}/></Link></li>
                <li><img src={notisImage} alt="Notifications Icon" className={styles.navIcons}/><Link to="#">Notifications</Link></li>
                <li><img src={pfpImage} alt="Profile Icon"  className={styles.navIcons}/><Link to="#">Profile</Link></li>
                <li><img src={logoutImage} alt="Logout Icon" className={styles.navIcons} /><Link to="#">Logout</Link></li>
                <li><Link to="#"><button className={styles.postBtn}>Post</button></Link></li>
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
                <Link to="#">
                <button className={styles.readMore}>read more...</button>
                </Link>
                {/* Add on the details page 
                <button className="like-btn">
                    <img src="assets/like.png" alt="Like">
                </button> */}
            </div>
        </main>
    </div>
    )
}