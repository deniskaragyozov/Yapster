import logoImg from '../../assets/logo.png'

import styles from './post.module.css'

export default function Post(){
    return (
        <>
        <img src={logoImg} alt="logo" className={styles.postLogoImg}/>
        <h1 className={styles.title}>What's on your mind?</h1>
            <div className={styles.postContainer}>
                <form className={styles.postForm} method="POST">
                    <span>Title</span>
                    <input type="text" name="title"/>
                    <span>Image URL (optional)</span>
                    <input type="text" name="image" placeholder="https://..." />
                    <span>Description</span>
                    <textarea name="description"></textarea>

                    <button type="submit" className={styles.postBtn}>Post</button>
                </form>
            </div>
        </>
    )
}