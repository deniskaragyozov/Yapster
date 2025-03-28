import logoImage from '../../assets/logo.png'

import styles from './welcome.module.css'

export default function Welcome(){
    return (
        <>
        <img src={logoImage} alt="logo" className={styles.homeLogoImg}/>
        <h1>Welcome to Yapster</h1>
        <p className={styles.homeDescription}>Talk about anything that comes to mind, find friends, have fun!</p>
        <div className={styles.buttonContainer}>
        <button className={styles.welcomeBtn}>Get Started</button>
        <button className={styles.welcomeBtn}>Continue as guest</button>
        </div>
        <a href="#" className={styles.alreadyRegistered}>Already registered?</a>
        </>
    )
}