import "./post.css"
import MoreVertIcon from '@mui/icons-material/MoreVert';

function Post() {
    return (
        <div className="wrap">
            <div className="post">
                <div className="postwrapper">
                    <div className="posttop">
                        <div className="posttopleft">
                            <img className="postprofimg" src="src\components\assets\persons\1.jpg" alt="" />
                            <span className="postusername">Soloma Ivanova</span>
                            <span className="postdate">5 mins ago</span>
                        </div>
                        <div className="posttopright">
                            <MoreVertIcon/>
                        </div>
                    </div>
                    <div className="postcenter">
                        <span className="posttext">Hey! It is me</span>
                        <img className="postimg" src="src\components\assets\post\1.jpg" alt=""/>
                    </div>
                    <div className="postbottom">
                        <div className="postbottomleft">
                            <img className="likeicon" src="src\components\assets\icons\heart.png" alt="" />
                            <img className="likeicon" src="src\components\assets\icons\Like.png" alt="" />
                            <span className="postlikecounter">16 people like it</span>
                        </div>
                        <div className="postbottomright">
                            <span className="postcommenttext">9 comments</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Post;