import logoImg from '../../assets/logo.png'

import {Link} from 'react-router'
import styles from './register.module.css'

export default function Register(){
    // TODO: Make the form pop up on the welcome page instead of being in a different page
    return (
        <>
            <Link to="/">
                <img src={logoImg} alt="logo" className={styles.registerLogoImg}/>
            </Link>
            <div className={styles.registerContainer}>
                <form className={styles.registerForm} method="POST">
            <input type="text" name="profilePicture" placeholder="Profile picture (link)" />
            <input type="text" name="username" placeholder="Username" />
            <input type="email" name="email" placeholder="Email" />
            <input type="password" name="password" placeholder="Password" />
            <button type="submit" className={styles.signupBtn}>Sign Up</button>
                </form>
            <Link to="#" className={styles.loginLink}>Already have an account? Log in</Link>
            </div>
        </>
    )
}