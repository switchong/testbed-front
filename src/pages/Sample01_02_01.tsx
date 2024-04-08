import { useLocation, useNavigate } from "react-router-dom";
import CSS1 from "../assets/css/sample01.css";
import Header from "./Layout/Header";
import { Button } from "react-bootstrap";

function AccountInfo() {
    const navigate = useNavigate();
    const location = useLocation();
    const state = location.state as {
        info: {
            alias: "",
            accountType: "",
            accountNum: "",
            ownerName: "",
            amt: "",
            bankCode: "",
            bankName: "",
        }
    };
    const CardHandler = () => {
        navigate("/mycard");
    }
    return (
            <div className={CSS1.mainBody}>
                <Header/>
                <div>
                    <div className={CSS1.border}>
                        <p className={CSS1.inner_title}>{state.info.alias}</p>
                        <p className={CSS1.inner_sub_title}>
                            {state.info.accountType} {state.info.accountNum}
                        </p>
                        <p className={CSS1.txt_price}>
                            <span>{state.info.amt}</span>원
                            <Button className={CSS1.account_hide_btn}>숨김</Button>
                        </p>
                    </div>
                    {/* 계좌 정보 */}
                </div>
                <div>
                    {/* 거래일수 조정, 톱니바퀴 설정 */}
                </div>
                <div>
                    <Button className={CSS1.account_hide_btn} onClick={CardHandler}>카드 관리</Button>
                </div>
            </div>
        
    )
}

export default AccountInfo;