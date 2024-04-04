import { useLocation } from "react-router-dom";
import CSS1 from "../assets/css/sample01.css";
import Header from "./Layout/Header";
import { Button } from "react-bootstrap";

function AccountInfo() {
    const location = useLocation();
    const state = location.state as {
        info: {
            alias: "급여통장",
            accountType: "입출금",
            accountNum: "123-123456-1234",
            ownerName: "테스트",
            amt: "1,000,000",
            bankCode: "010",
            bankName: "하나",
        }
    };
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
                {/* 거래내역 출력 (연도 구분) */}
            </div>
        </div>
    )
}

export default AccountInfo;