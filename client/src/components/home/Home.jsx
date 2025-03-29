import logoImage from '../../assets/logo.png'
import pfpImage from '../../assets/profile.png'
import notisImage from '../../assets/notifications.png'
import registerImage from '../../assets/register.png'
import loginImage from '../../assets/login.png'
import logoutImage from '../../assets/logout.png'

import { Link } from 'react-router'
import styles from './home.module.css'
import { useState } from 'react'
import Modal from '../modal/Modal.jsx'
import Login from '../login/Login.jsx'
import Register from '../register/Register.jsx'

export default function Home(){
     const [isRegisterModalOpen, setRegisterModalOpen] = useState(false);
        const [isLoginModalOpen, setLoginModalOpen] = useState(false);
    
        const loginClickHandler = () => {
            setLoginModalOpen(true);
        };
    
        const closeLoginModal = () => {
            setLoginModalOpen(false);
        };
        
        const signupClickHandler = () => {
            setRegisterModalOpen(true);
        };
    
        const closeRegisterModal = () => {
            setRegisterModalOpen(false);
        };
    return (
        <div className={styles.container}>
        <nav className={styles.sidebar}>
            <ul>
                {/* TODO: Add dynamic navigation */}
                <li><Link to='/'><img src={logoImage} alt="logo" className={styles.sidebarLogoImg}/></Link></li>
                <li><img src={notisImage} alt="Notifications Icon" className={styles.navIcons}/><Link to="#">Notifications</Link></li>
                <li><img src={registerImage} alt="Register Icon" className={styles.navIcons}/><Link to="#" onClick={signupClickHandler}>Register</Link></li>
                <li><img src={loginImage} alt="Login Icon" className={styles.navIcons}/><Link to="#" onClick={loginClickHandler}>Login</Link></li>
                <li><img src={pfpImage} alt="Profile Icon"  className={styles.profilePicNav}/><Link to="#">Profile</Link></li>
                <li><img src={logoutImage} alt="Logout Icon" className={styles.navIcons} /><Link to="#">Logout</Link></li>
                <li><Link to="#"><button className={styles.postBtn}>Post</button></Link></li>
            </ul>
        </nav>
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
                {/* Add on the details page 
                <button className="like-btn">
                    <img src="assets/like.png" alt="Like">
                </button> */}
            </div>
        </main>
            <Modal isOpen={isLoginModalOpen} onClose={closeLoginModal}>
                <Login />
            </Modal>
                 
            <Modal isOpen={isRegisterModalOpen} onClose={closeRegisterModal}>
                <Register />
            </Modal>
    </div>
    )
}