import "./rightbar.css"

function Rightbar() {
    return ( 
        <div className="rightbar">
            <div className="rightbarwrapper">
                <div className="birthdaycontainer">
                    <img className="birthdayimg" src="src\components\assets\icons\gift.png" alt="" />
                    <span className="birthdaytext">
                        <b>Slavik Jija</b> and <b>2 other friends</b> have a birthday today.
                    </span>
                </div>
                <h4 className="rightbartitle">Online Friends</h4>
                <ul className="rightbarfriendlist">
                    <li className="rightbarfriend">
                        <div className="rightbarprofimgcontainer">
                            <img className="rightbarprofimg" src="src\components\assets\persons\3.jpg" alt="" />
                            <span className="rightbaronline"></span>
                        </div>
                        <span className="rightbarusername">Biba Ivanov</span>
                    </li>
                    <li className="rightbarfriend">
                        <div className="rightbarprofimgcontainer">
                            <img className="rightbarprofimg" src="src\components\assets\persons\3.jpg" alt="" />
                            <span className="rightbaronline"></span>
                        </div>
                        <span className="rightbarusername">Biba Ivanov</span>
                    </li>
                    <li className="rightbarfriend">
                        <div className="rightbarprofimgcontainer">
                            <img className="rightbarprofimg" src="src\components\assets\persons\3.jpg" alt="" />
                            <span className="rightbaronline"></span>
                        </div>
                        <span className="rightbarusername">Biba Ivanov</span>
                    </li>
                    <li className="rightbarfriend">
                        <div className="rightbarprofimgcontainer">
                            <img className="rightbarprofimg" src="src\components\assets\persons\3.jpg" alt="" />
                            <span className="rightbaronline"></span>
                        </div>
                        <span className="rightbarusername">Biba Ivanov</span>
                    </li>
                    <li className="rightbarfriend">
                        <div className="rightbarprofimgcontainer">
                            <img className="rightbarprofimg" src="src\components\assets\persons\3.jpg" alt="" />
                            <span className="rightbaronline"></span>
                        </div>
                        <span className="rightbarusername">Biba Ivanov</span>
                    </li>
                    <li className="rightbarfriend">
                        <div className="rightbarprofimgcontainer">
                            <img className="rightbarprofimg" src="src\components\assets\persons\3.jpg" alt="" />
                            <span className="rightbaronline"></span>
                        </div>
                        <span className="rightbarusername">Biba Ivanov</span>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Rightbar;