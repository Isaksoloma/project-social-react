import styles from "./feed.module.css"
import Share from "../share/share";
import Post from "../posts/post";

function Feed(){
    return ( 
        <div className={styles.feed}>
            <div className={styles.feedwraper}>
                <Share/>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
            </div>
        </div>
     );
}

export default Feed;