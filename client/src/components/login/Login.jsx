import logoImg from '../../assets/logo.png'

import styles from './login.module.css'

export default function Login(){
    return (
        <>
                <img src={logoImg} alt="logo" className={styles.loginLogoImg}/>
            <div className={styles.loginContainer}>
                <form className={styles.loginForm} method="POST">
                    <input type="email" name="email" placeholder="Email" />
                    <input type="password" name="password" placeholder="Password" />
                    <input type="password" name="rePassword" placeholder="Confirm password" />
                    <button type="submit" className={styles.loginBtn}>Log in</button>
                </form>
            </div>
        </>
    )
}