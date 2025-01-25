import styles from "./topbar.module.css"
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';

export default function Topbar(){
    return(
        <div className={styles.topbarcont}>
            <div className={styles.topbarleft}>
                <span className={styles.logo}>IsakSocial</span>
            </div>
            <div className={styles.topbarcenter}>
                <div className={styles.searchbar}>
                    <SearchIcon className={styles.searchicon}/>
                    <input className={styles.searchinput} placeholder="Search for friends, posts or video" />
                </div>
            </div>
            <div className={styles.topbarright}>
                <div className={styles.topbarlinks}>
                    <span className={styles.topbarlink}>Homepage</span>
                    <span className={styles.topbarlink}>Timeline</span>
                </div>
                <div className={styles.topbaricons}>
                    <div className={styles.topbariconitem}>
                        <PersonIcon/>
                        <span className={styles.topbariconbadge}>1</span>
                    </div>
                    <div className={styles.topbariconitem}>
                        <ChatIcon/>
                        <span className={styles.topbariconbadge}>2</span>
                    </div>
                    <div className={styles.topbariconitem}>
                        <NotificationsIcon/>
                        <span className={styles.topbariconbadge}>1</span>
                    </div>
                </div>
                <img src="src\components\assets\persons\1.jpg" alt="" className={styles.profileimage}/>
            </div>

        </div>
    )
}