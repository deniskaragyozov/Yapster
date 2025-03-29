import logoImg from '../../assets/logo.png'
import { Link } from 'react-router';

import styles from './welcome.module.css'
import Register from '../register/Register.jsx';
import { useState } from 'react';
import Modal from '../modal/Modal.jsx';
import Login from '../login/Login.jsx';



export default function Welcome(){
    const [isRegisterModalOpen, setRegisterModalOpen] = useState(false);
    const [isLoginModalOpen, setLoginModalOpen] = useState(false);

    const loginClickHandler = () => {
        setRegisterModalOpen(true);
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
        <>
        <img src={logoImg} alt="logo" className={styles.homeLogoImg}/>
        <h1>Welcome to Yapster</h1>
        <p className={styles.homeDescription}>Talk about anything that comes to mind, find friends, have fun!</p>
        <div className={styles.buttonContainer}>
        <button className={styles.welcomeBtn} onClick={loginClickHandler}>Log into your account</button>
        <button className={styles.welcomeBtn} onClick={signupClickHandler}>Create an account</button>
        or
        <Link to="/home"> <button className={styles.welcomeBtn}>Continue as guest</button> </Link>
        </div>
        <Modal isOpen={isRegisterModalOpen} onClose={closeRegisterModal}>
            <Login />
        </Modal>
         
         <Modal isOpen={isLoginModalOpen} onClose={closeLoginModal}>
            <Register />
        </Modal>
        </>
    )
}