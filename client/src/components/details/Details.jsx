import pfpImage from '../../assets/profile.png'

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
            {/* Back Button */}
            <Link to="/"><button className={styles.backButton}>← Back</button></Link>
        <main className={styles.feed}>
            <h1>Post</h1>
            {/* Post Section */}
            <div className={styles.post}>
                    <div className={styles.postHeader}>
                        <img src={!!post.owner?.profilePicUrl ? post.owner.profilePicUrl : pfpImage} alt="Profile Picture" className={styles.profilePicPost} />
                        <span className={styles.username}>{post.owner?.username}</span>
                    </div>
                    <p className={styles.postText}>{post.description}</p>
                    {!!post.image 
                    ? <img src={post.image} alt="Post Picture" className={styles.postImage} />
                    : null
                    }
                    <div className={styles.postFooter}>
                        <span className={styles.postComments}>Comments: 45</span>
                        {isOwner ? (
                            <>
                                <div className={styles.postActions}>
                                    <button className={styles.editButton}>Edit</button>
                                    <button className={styles.deleteButton}>Delete</button>
                                </div>
                             </>
                        ) : <></>}

                        {isLoggedin && !isOwner
                        ? (
                            <button className={styles.commentButton}>Comment</button>
                        )
                        :<></>}
                    </div>
                </div>
                {/* Comments Section */}
                <div className={styles.commentsSection}>
                    <h2>Comments</h2>
                    <div className={styles.comment}>
                        <div className={styles.commentHeader}>
                            <img src={pfpImage} alt="Commenter Profile" className={styles.commentProfilePic} />
                            <span className={styles.commentUsername}>Commenter1</span>
                        </div>
                        <p className={styles.commentText}>This is a comment on the post. Great content!</p>
                    </div>

                    <div className={styles.comment}>
                        <div className={styles.commentHeader}>
                            <img src={pfpImage} alt="Commenter Profile" className={styles.commentProfilePic} />
                            <span className={styles.commentUsername}>Commenter2</span>
                        </div>
                        <p className={styles.commentText}>I completely agree with this post!</p>
                    </div>
            </div>
        </main>
    </div>
    );
}