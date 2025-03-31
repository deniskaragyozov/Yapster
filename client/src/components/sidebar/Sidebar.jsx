import logoImage from '../../assets/logo.png'
import homeImage from '../../assets/home.png'
import pfpImage from '../../assets/profile.png'
import notisImage from '../../assets/notifications.png'
import registerImage from '../../assets/register.png'
import loginImage from '../../assets/login.png'
import logoutImage from '../../assets/logout.png'

import { Link } from 'react-router'
import styles from './sidebar.module.css'
import { useState } from 'react'
import Modal from '../modal/Modal.jsx'
import Login from '../login/Login.jsx'
import Register from '../register/Register.jsx'
import Post from '../post/Post.jsx'

export default function Sidebar(){
         const [isRegisterModalOpen, setRegisterModalOpen] = useState(false);
         const [isLoginModalOpen, setLoginModalOpen] = useState(false);
         const [isPostModalOpen, setPostModalOpen] = useState(false);
        
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
    
            const postClickHandler = () => {
                setPostModalOpen(true);
            };
        
            const closePostModal = () => {
                setPostModalOpen(false);
            };
    return(  
    <>      
    <nav className={styles.sidebar}>
        <ul>
            {/* TODO: Add dynamic navigation */}
            <li><Link to='/'><img src={logoImage} alt="logo" className={styles.sidebarLogoImg}/></Link></li>
            <li><img src={homeImage} alt="Home Icon" className={styles.navIcons} /><Link to="/home">Home</Link></li>
            <li><img src={notisImage} alt="Notifications Icon" className={styles.navIcons}/><Link to="#">Notifications</Link></li>
            <li><img src={registerImage} alt="Register Icon" className={styles.navIcons}/><Link to="#" onClick={signupClickHandler}>Register</Link></li>
            <li><img src={loginImage} alt="Login Icon" className={styles.navIcons}/><Link to="#" onClick={loginClickHandler}>Login</Link></li>
            <li><img src={pfpImage} alt="Profile Icon"  className={styles.profilePicNav}/><Link to="/profile">Profile</Link></li>
            <li><img src={logoutImage} alt="Profile Icon"  className={styles.navIcons}/><Link to="#">Logout</Link></li>
            <li><Link to="#"><button onClick={postClickHandler} className={styles.postBtn}>Post</button></Link></li>
        </ul>
    </nav>
                <Modal isOpen={isLoginModalOpen} onClose={closeLoginModal}>
                <Login />
            </Modal>
                 
            <Modal isOpen={isRegisterModalOpen} onClose={closeRegisterModal}>
                <Register />
            </Modal>

            <Modal isOpen={isPostModalOpen} onClose={closePostModal}>
                <Post />
            </Modal>
    </>
    );
}
