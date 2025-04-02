import pfpImage from '../../assets/profile.png'
import editImage from '../../assets/edit.png'
import deleteImage from '../../assets/delete.png'

import styles from './details.module.css'
import { Link, useParams } from 'react-router';
import { usePost } from '../../api/postsApi.js';
import { useContext } from 'react';
import { UserContext } from '../../contexts/UserContext.js';


export default function Details(){
    const params = useParams();

    const postId = params.postId;

    const post = usePost(postId);

    const user = useContext(UserContext);

    const isLoggedin = !!user.email;

    const isOwner = user._id === post._ownerId;

    return(
        <div className={styles.container}>
            <Link to="/"><button className={styles.backButton}>← Back</button></Link>
        <main className={styles.feed}>
            <h1>Post</h1>
            <div className={styles.post}>
                    <div className={styles.postHeader}>
                        <img src={!!post.owner?.profilePicUrl ? post.owner.profilePicUrl : pfpImage} alt="Profile Picture" className={styles.profilePicPost} />
                        <Link to={`/${post._ownerId}/profile`}><span className={styles.username}>{post.owner?.username}</span></Link>
                    </div>
                    <h3 className={styles.postTitle}>{post.title}</h3>
                    <p className={styles.postText}>{post.description}</p>
                    {!!post.image 
                    ? <img src={post.image} alt="Post Picture" className={styles.postImage} />
                    : null
                    }
                    <div className={styles.postFooter}>
                        <span className={styles.postComments}>Likes: 45</span>
                        {isOwner ? (
                            <>
                                <div className={styles.postActions}>
                                    <Link to={`/${post._id}/edit`}><img src={editImage} alt="Edit Icon" className={styles.editImage} /></Link>
                                    <Link to={`/${post._id}/delete`}><img src={deleteImage} alt="Delete Icon" className={styles.deleteImage} /></Link>
                                </div>
                             </>
                        ) : <></>}

                        {isLoggedin && !isOwner
                        ? (
                            <button className={styles.commentButton}>Like</button>
                        )
                        :<></>}
                    </div>
                </div>
        </main>
    </div>
    );
}