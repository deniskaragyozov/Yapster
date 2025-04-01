import logoImg from '../../assets/logo.png';

import { Link, useParams } from 'react-router';
import styles from './edit.module.css'
import { usePost } from '../../api/postsApi.js';

export default function Edit(){
    const params = useParams();
    
    const postId = params.postId;

    const post = usePost(postId);

    return(
    <>
     <div className={styles.postContainer}>
            <Link to={`/${post._id}/details`}><img src={logoImg} alt="logo" className={styles.postLogoImg}/></Link>
                <h1 className={styles.title}>Edit your post</h1>
                <form className={styles.postForm}>
                    <span>Title</span>
                    <input type="text" name="title"/>
                    <span>Image URL (optional)</span>
                    <input type="text" name="image" placeholder="https://..." />
                    <span>Description</span>
                    <textarea name="description"></textarea>
                    {/* {error && <h6 className={styles.errorText}>{error}!</h6>} */}
                    <button type="submit" className={styles.postBtn}>Edit</button>
                </form>
            </div>
    </>);
}