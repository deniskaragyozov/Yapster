import logoImg from '../../assets/logo.png'

import {Link} from 'react-router'
import styles from './login.module.css'

export default function Login(){
    // TODO: Make the form pop up on the welcome page instead of being in a different page
    return (
        <>
            <Link to="/">
                <img src={logoImg} alt="logo" className={styles.loginLogoImg}/>
            </Link>
            <div className={styles.loginContainer}>
                <form className={styles.loginForm} method="POST">
                    <input type="email" name="email" placeholder="Email" />
                    <input type="password" name="password" placeholder="Password" />
                    <input type="password" name="rePassword" placeholder="Confirm password" />
                    <button type="submit" className={styles.loginBtn}>Log in</button>
                </form>
            <Link to="/register" className={styles.loginLink}>Don't have an account? Sign up</Link>
            </div>
        </>
    )
}