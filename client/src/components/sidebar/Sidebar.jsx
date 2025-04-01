import logoImage from '../../assets/logo.png'
import homeImage from '../../assets/home.png'
import pfpImage from '../../assets/profile.png'
import registerImage from '../../assets/register.png'
import loginImage from '../../assets/login.png'
import logoutImage from '../../assets/logout.png'

import { Link } from 'react-router'
import styles from './sidebar.module.css'
import { useContext, useState } from 'react'
import Modal from '../modal/Modal.jsx'
import Login from '../login/Login.jsx'
import Register from '../register/Register.jsx'
import Post from '../post/Post.jsx'
import { UserContext } from '../../contexts/UserContext.js'

export default function Sidebar(){
         const [isRegisterModalOpen, setRegisterModalOpen] = useState(false);
         const [isLoginModalOpen, setLoginModalOpen] = useState(false);
         const [isPostModalOpen, setPostModalOpen] = useState(false);
         const {email, _id} = useContext(UserContext);
        
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

    return(  
    <>      
    <nav className={styles.sidebar}>
        <ul>
            <li><Link to='/'><img src={logoImage} alt="logo" className={styles.sidebarLogoImg}/></Link></li>
            <li><img src={homeImage} alt="Home Icon" className={styles.navIcons} /><Link to="/home">Home</Link></li>
            {!!email 
            ?<>
            <li><img src={pfpImage} alt="Profile Icon"  className={styles.profilePicNav}/><Link to={`/${_id}/profile`}>Profile</Link></li>
            <li><img src={logoutImage} alt="Profile Icon"  className={styles.navIcons}/><Link to="/logout">Logout</Link></li>
            <li><Link to="/post"><button onClick={postClickHandler} className={styles.postBtn}>Post</button></Link></li>
            </>
            :<>
            <li><img src={registerImage} alt="Register Icon" className={styles.navIcons}/><Link to="#" onClick={signupClickHandler}>Register</Link></li>
            <li><img src={loginImage} alt="Login Icon" className={styles.navIcons}/><Link to="#" onClick={loginClickHandler}>Login</Link></li>
            </>
        }
            

        </ul>
    </nav>
                <Modal isOpen={isLoginModalOpen} onClose={closeLoginModal}>
                <Login closeModal={closeLoginModal}/>
            </Modal>
                 
            <Modal isOpen={isRegisterModalOpen} onClose={closeRegisterModal}>
                <Register closeModal={closeRegisterModal}/>
            </Modal>
    </>
    );
}
