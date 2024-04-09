import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import headerCSS from "../../assets/css/header.css"
import backImg from "../../assets/icon/icons8-5.png";
import menuImg from "../../assets/icon/icons8-2.png";
import homeImg from "../../assets/icon/icons8-3.png";
import Sidebar from "./SideBar";

function Header() {
    const navigate = useNavigate();
    const location = useLocation();
    const state = location.state as { header: string };

    const [isOpen, setIsOpen] = useState<boolean>(false);
    const toggleSide = () => {
        setIsOpen(true);
    }

    return (
            <div className={headerCSS.firstHeader}>
                <div className={headerCSS.sideButton}>
                    <Button style={{ backgroundColor: "white"}} variant="light" className={`${headerCSS.iconButton} ${headerCSS.rightOver}`} onClick={() => { navigate(-1) }} active><img src={backImg} width="20px" height="20px"/></Button>
                </div>
                <div className={headerCSS.middleButton}>
                    {
                        state === null ?
                        <>  <Button style={{backgroundColor: "white"}} variant="light" className={`${headerCSS.accountheader} ${headerCSS.text}`} active onClick={() => { navigate("/")}}>전체 계좌</Button>
                            <Button style={{ backgroundColor: "white"}} variant="light" className={`${headerCSS.accountheader} ${headerCSS.rightOver} ${headerCSS.text}`} active onClick={() => { navigate("/otherFinance")}}>다른 금융</Button>
                        </> :
                        <Button style={{ backgroundColor: "white"}} variant="light" className={`${headerCSS.accountheader} ${headerCSS.rightOver} ${headerCSS.text}`} active>{state.header as any}</Button>
                            
                    }
                </div>
                <div className={headerCSS.sideButton}>
                    <Button style={{ backgroundColor: "white"}} variant="light" className={`${headerCSS.iconButton} ${headerCSS.rightButton}`} onClick={() => { navigate("/")}} active><img src={homeImg} width="27px" height="27px"/></Button>
                    <Button style={{ backgroundColor: "white"}} variant="light" className={`${headerCSS.iconButton} ${headerCSS.rightButton}`} onClick={toggleSide} active><img src={menuImg} width="25px" height="25px" /></Button>
                    <Sidebar isOpen={isOpen} setIsOpen={setIsOpen}/>
                </div>
            </div>
    );
}

export default Header;