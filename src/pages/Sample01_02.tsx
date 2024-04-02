import CSS1 from "../assets/css/sample01.css";
import Header from "./Layout/Header";

function AccountInfo() {
    
    return (
        <div className={CSS1.mainBody}>
             <Header/>
            <div>
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