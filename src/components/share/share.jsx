import styles from "./share.module.css"
import PermMediaIcon from '@mui/icons-material/PermMedia';
import LabelIcon from '@mui/icons-material/Label';
import RoomIcon from '@mui/icons-material/Room';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';

function Share() {
    return (
        <div className={styles.wrap}>
            <div className={styles.share}>
                <div className={styles.sharewrapper}>
                    <div className={styles.sharetop}>
                        <img src="src\components\assets\persons\1.jpg" alt="" className={styles.shareprofpic}/>
                        <input
                            placeholder="what's are your thoughts"
                            className={styles.shareinput}
                        />
                    </div>
                    <hr className={styles.sharehr}/>
                    <div className={styles.sharebottom}>
                        <div className={styles.shareoptions}>
                            <div className={styles.shareoption}>
                                <PermMediaIcon htmlColor="tomato" className={styles.shareicon}/>
                                <span className={styles.shareoptiontext}>Photo or Video</span>
                            </div>
                            <div className={styles.shareoption}>
                                <LabelIcon htmlColor="blue" className={styles.shareicon}/>
                                <span className={styles.shareoptiontext}>Tag</span>
                            </div>
                            <div className={styles.shareoption}>
                                <RoomIcon htmlColor="green" className={styles.shareicon}/>
                                <span className={styles.shareoptiontext}>Location</span>
                            </div>
                            <div className={styles.shareoption}>
                                <EmojiEmotionsIcon htmlColor="goldenrod" className={styles.shareicon}/>
                                <span className={styles.shareoptiontext}>Feelings</span>
                            </div>
                        </div>
                        <button className={styles.sharebutton}>Share</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Share;