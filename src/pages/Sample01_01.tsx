import { useNavigate } from "react-router-dom";
import { useState } from "react";
import CSS1 from "../assets/css/sample01.css";
import Header from "./Layout/Header";

function ListPage() {
    const navigate = useNavigate();
    const [isAccount, setAccount] = useState<boolean>(false);
    const onCllckBankDivision = () => {
        setAccount(false);
    }
    const onCllckFundDivision = () => {
        setAccount(true);
    }
    return (
        <div className={CSS1.mainBody}>
            <Header/>
            <div className={CSS1.divgubun}>
                <button className={CSS1.accountgubun} onClick={onCllckBankDivision}>입출금</button>
                <button className={CSS1.accountgubun} onClick={onCllckFundDivision}>펀드</button>
            </div>
            {
                isAccount === false ?
                    <div>
                        <p>입출금 계좌 구성입니다.</p>
                    </div>
                    :
                    <div>
                        <p>펀드 계좌 구성입니다.</p>
                    </div>
            }
            <div>
                <div> 
                    <button onClick={() => { navigate('/AccountDetail', { state: "거래내역 조회" });}} >
                        거래내역 조회
                    </button>
                    <button onClick={() => { navigate('/Transfer', { state: "이체" }); }} >
                        이체
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ListPage;