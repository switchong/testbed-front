import { useLocation, useNavigate } from "react-router-dom";
import headerCSS from "../../assets/css/header.css"
import backImg from "../../assets/icon/icons8-5.png";
import menuImg from "../../assets/icon/icons8-2.png";
import homeImg from "../../assets/icon/icons8-3.png";
function Header() {
    const navigate = useNavigate();
    const location = useLocation();
    const a = location.state;

    return (
            <div className={headerCSS.firstHeader}>
                <div className={headerCSS.sideButton}>
                    <button className={`${headerCSS.iconButton} ${headerCSS.rightOver}`} onClick={()=> navigate(-1)}><img src={backImg} width="20px" height="20px" /></button>
                </div>
                <div className={headerCSS.middleButton}>
                    {
                        a === null ?
                        <>  <button className={`${headerCSS.accountheader} ${headerCSS.text}`}>전체 계좌</button>
                            <button className={`${headerCSS.accountheader} ${headerCSS.rightOver} ${headerCSS.text}`}>다른 금융</button>
                        </> :
                        <button className={`${headerCSS.accountheader} ${headerCSS.rightOver} ${headerCSS.text}`}>{a as any}</button>
                            
                    }
                </div>
                <div className={headerCSS.sideButton}>
                    <button className={`${headerCSS.iconButton} ${headerCSS.rightButton}`} onClick={()=> navigate("/")}><img src={homeImg} width="27px" height="27px"/></button>
                    <button className={`${headerCSS.iconButton} ${headerCSS.rightButton}`}><img src={menuImg} width="25px" height="25px" /></button>
                </div>
            </div>
    );
}

export default Header;