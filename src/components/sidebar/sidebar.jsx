import styles from "./sidebar.module.css"
import RssFeedIcon from '@mui/icons-material/RssFeed';
import ChatIcon from '@mui/icons-material/Chat';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import GroupIcon from '@mui/icons-material/Group';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import HelpIcon from '@mui/icons-material/Help';
import WorkIcon from '@mui/icons-material/Work';
import EventIcon from '@mui/icons-material/Event';
import SchoolIcon from '@mui/icons-material/School';

function Sidebar() {
    return ( 
        <div className={styles.sidebar}>
            <div className={styles.sidebarwrapper}>
                <ul className={styles.sidebarlist}>
                    <li className={styles.sidebarlistitem}>
                        <RssFeedIcon className={styles.sidebarlisticon}/>
                        <span className={styles.sidebarlistitemtext}>Feed</span>
                    </li>
                    <li className={styles.sidebarlistitem}>
                        <ChatIcon className={styles.sidebarlisticon}/>
                        <span className={styles.sidebarlistitemtext}>Chats</span>
                    </li>
                    <li className={styles.sidebarlistitem}>
                        <PlayCircleIcon className={styles.sidebarlisticon}/>
                        <span className={styles.sidebarlistitemtext}>Videos</span>
                    </li>
                    <li className={styles.sidebarlistitem}>
                        <GroupIcon className={styles.sidebarlisticon}/>
                        <span className={styles.sidebarlistitemtext}>Groups</span>
                    </li>
                    <li className={styles.sidebarlistitem}>
                        <BookmarkIcon className={styles.sidebarlisticon}/>
                        <span className={styles.sidebarlistitemtext}>Bookmarks</span>
                    </li>
                    <li className={styles.sidebarlistitem}>
                        <HelpIcon className={styles.sidebarlisticon}/>
                        <span className={styles.sidebarlistitemtext}>Questions</span>
                    </li>
                    <li className={styles.sidebarlistitem}>
                        <WorkIcon className={styles.sidebarlisticon}/>
                        <span className={styles.sidebarlistitemtext}>Jobs</span>
                    </li>
                    <li className={styles.sidebarlistitem}>
                        <EventIcon className={styles.sidebarlisticon}/>
                        <span className={styles.sidebarlistitemtext}>Events</span>
                    </li>
                    <li className={styles.sidebarlistitem}>
                        <SchoolIcon className={styles.sidebarlisticon}/>
                        <span className={styles.sidebarlistitemtext}>Courses</span>
                    </li>
                </ul>
                <button className={styles.sidebarbutton}>Show more</button>
                <hr className={styles.shr}/>
                <ul className={styles.sidebarfriendlist}>
                    <li className={styles.sidebarfriend}>
                        <img className={styles.sidebarfriendimg} src="src\components\assets\persons\2.jpg" alt="2" />
                        <span className={styles.sidebaarfriendname}>Dart Onion</span>
                    </li>
                    <li className={styles.sidebarfriend}>
                        <img className={styles.sidebarfriendimg} src="src\components\assets\persons\2.jpg" alt="2" />
                        <span className={styles.sidebaarfriendname}>Dart Onion</span>
                    </li>
                    <li className={styles.sidebarfriend}>
                        <img className={styles.sidebarfriendimg} src="src\components\assets\persons\2.jpg" alt="2" />
                        <span className={styles.sidebaarfriendname}>Dart Onion</span>
                    </li>
                    <li className={styles.sidebarfriend}>
                        <img className={styles.sidebarfriendimg} src="src\components\assets\persons\2.jpg" alt="2" />
                        <span className={styles.sidebaarfriendname}>Dart Onion</span>
                    </li>
                    <li className={styles.sidebarfriend}>
                        <img className={styles.sidebarfriendimg} src="src\components\assets\persons\2.jpg" alt="2" />
                        <span className={styles.sidebaarfriendname}>Dart Onion</span>
                    </li>
                    <li className={styles.sidebarfriend}>
                        <img className={styles.sidebarfriendimg} src="src\components\assets\persons\2.jpg" alt="2" />
                        <span className={styles.sidebaarfriendname}>Dart Onion</span>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Sidebar
