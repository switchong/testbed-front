import { useLocation, useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import headerCSS from "../../assets/css/header.css"
import backImg from "../../assets/icon/icons8-5.png";
import menuImg from "../../assets/icon/icons8-2.png";
import homeImg from "../../assets/icon/icons8-3.png";
function Header() {
    const navigate = useNavigate();
    const location = useLocation();
    const state = location.state as { header: string };
    
    return (
            <div className={headerCSS.firstHeader}>
                <div className={headerCSS.sideButton}>
                <Button style={{ backgroundColor: "white"}} variant="light" className={`${headerCSS.iconButton} ${headerCSS.rightOver}`} onClick={() => { navigate(-1) }} active><img src={backImg} width="20px" height="20px"/></Button>
                </div>
                <div className={headerCSS.middleButton}>
                    {
                        state === null ?
                        <>  <button className={`${headerCSS.accountheader} ${headerCSS.text}`}>전체 계좌</button>
                            <button className={`${headerCSS.accountheader} ${headerCSS.rightOver} ${headerCSS.text}`}>다른 금융</button>
                        </> :
                        <button className={`${headerCSS.accountheader} ${headerCSS.rightOver} ${headerCSS.text}`}>{state.header as any}</button>
                            
                    }
                </div>
                <div className={headerCSS.sideButton}>
                    <Button style={{ backgroundColor: "white"}} variant="light" className={`${headerCSS.iconButton} ${headerCSS.rightButton}`} onClick={() => { navigate("/")}} active><img src={homeImg} width="27px" height="27px"/></Button>
                    <Button style={{ backgroundColor: "white"}} variant="light" className={`${headerCSS.iconButton} ${headerCSS.rightButton}`} active><img src={menuImg} width="25px" height="25px" /></Button>
                </div>
            </div>
    );
}

export default Header;