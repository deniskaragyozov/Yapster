import logoImg from '../../assets/logo.png'

import styles from './register.module.css'

export default function Register(){
    return (
        <>   
                <img src={logoImg} alt="logo" className={styles.registerLogoImg}/>
            <div className={styles.registerContainer}>
                <form className={styles.registerForm} method="POST">
            <input type="text" name="profilePicture" placeholder="Profile picture (link)" />
            <input type="text" name="username" placeholder="Username" />
            <input type="email" name="email" placeholder="Email" />
            <input type="password" name="password" placeholder="Password" />
            <button type="submit" className={styles.signupBtn}>Sign Up</button>
                </form>
            </div>
        </>
    )
}