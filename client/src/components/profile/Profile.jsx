import pfpImage from '../../assets/profile.png'

import { Link, useParams } from 'react-router'
import styles from './profile.module.css'
import Sidebar from '../sidebar/Sidebar.jsx'
import { useUser } from '../../api/usersApi.js'
import { useUserPosts } from '../../api/postsApi.js'

export default function Profile() {
    const params = useParams();

    const userId = params.userId;

    const user = useUser(userId);

    const { posts } = useUserPosts(userId);

    return (
        <>
            <div className={styles.container}>
              <Sidebar/>
                <main className={styles.feed}>
                    <div className={styles.profileContainer}>

                        <div className={styles.profileHeader}>
                            <img src={!!user.profilePicUrl ? user.profilePicUrl : pfpImage} alt="Profile Picture" className={styles.profilePic} />
                            <h1 className={styles.usernameProfile}>{user.username}</h1>
                            <h3>Bio:</h3>
                            <p className={styles.bio}>
                            {!!user.bio ? user.bio : "No bio yet"}
                            </p>
                            <h2 className={styles.postsTitle}>Posts</h2>
                        </div>
                        
                        <div className={styles.postsContainer}>
                            {posts.length === 0
                            ? <h1 className={styles.noPosts}>No posts yet</h1>
                            : posts.map(post => 
                                <div className={styles.post}>
                                <div className={styles.postHeader}>
                                    <img src={!!post.owner.profilePicUrl ? post.owner.profilePicUrl : pfpImage} alt="Profile Picture" className={styles.profilePicPost} />
                                    <span className={styles.usernamePost}>{post.owner.username}</span>
                                </div>
                                <p className={styles.postText}>{post.title}</p>
                                <Link to={`/${post._id}/details`}>
                                    <button className={styles.readMore}>read more...</button>
                                </Link>
                            </div>
                                )
                            }
                            
                        </div>
                    </div>
                </main>
            </div>
        </>
    )
}
