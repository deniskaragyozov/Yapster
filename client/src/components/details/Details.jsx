import pfpImage from '../../assets/profile.png'

import styles from './details.module.css'
import Sidebar from '../sidebar/Sidebar.jsx'
import { useParams } from 'react-router';
import { usePost } from '../../api/postsApi.js';


export default function Details(){
    const params = useParams();

    const postId = params.postId;

    const post = usePost(postId);

    return(
        <div className={styles.container}>
            <Sidebar/>
        <main className={styles.feed}>
            <h1>Post</h1>
            {/* Post Section */}
            <div className={styles.post}>
                    <div className={styles.postHeader}>
                        <img src={!!post.owner?.profilePicUrl ? post.owner.profilePicUrl : pfpImage} alt="Profile Picture" className={styles.profilePicPost} />
                        <span className={styles.username}>{post.owner?.username}</span>
                    </div>
                    <p className={styles.postText}>{post.description}</p>
                    <div className={styles.postFooter}>
                        {/* <span className={styles.postLikes}>Likes: 123</span> */}
                        <span className={styles.postComments}>Comments: 45</span>
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