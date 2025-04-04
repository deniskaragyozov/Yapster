import logoImage from '../../assets/logo.png';
import homeImage from '../../assets/home.png';
import pfpImage from '../../assets/profile.png';
import registerImage from '../../assets/register.png';
import loginImage from '../../assets/login.png';
import logoutImage from '../../assets/logout.png';
import searchImage from '../../assets/search.png';

import { Link } from 'react-router';
import styles from './sidebar.module.css';
import { useContext, useState } from 'react';
import Modal from '../modal/Modal.jsx';
import Login from '../login/Login.jsx';
import Register from '../register/Register.jsx';
import { UserContext } from '../../contexts/UserContext.js';

export default function Sidebar(){
        const user = useContext(UserContext);    

        const [isRegisterModalOpen, setRegisterModalOpen] = useState(false);
        const [isLoginModalOpen, setLoginModalOpen] = useState(false);
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

    return(  
    <>      
    <nav className={styles.sidebar}>
        <ul>
            <li><Link to='/'><img src={logoImage} alt="logo" className={styles.sidebarLogoImg}/></Link></li>
            <li><img src={homeImage} alt="Home Icon" className={styles.navIcons} /><Link to="/home">Home</Link></li>
            <li><img src={searchImage} alt="Search Icon" className={styles.navIcons} /><Link to="/search">Search</Link></li>
            {!!email 
            ?<>
            <li><img src={!!user.profilePicUrl ? user.profilePicUrl : pfpImage} alt="Profile Icon"  className={styles.profilePicNav}/><Link to={`/${_id}/profile`}>Profile</Link></li>
            <li><img src={logoutImage} alt="Logout Icon"  className={styles.navIcons}/><Link to="/logout">Logout</Link></li>
            <li><Link to="/post"><button className={styles.postBtn}>Post</button></Link></li>
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
