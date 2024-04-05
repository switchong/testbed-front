import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Button, Accordion } from 'react-bootstrap';
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
    let accInfo = [
    {
      alias: "급여통장",
      accountType: "입출금",
      accountNum: "123-123456-1234",
      ownerName: "테스트",
      amt: "1,000,000",
      bankCode: "010",
      bankName: "하나",
    },
    {
      alias: "입출금통장",
      accountType: "입출금",
      accountNum: "234-123456-1235",
      ownerName: "테스트",
      amt: "50,000",
      bankCode: "020",
      bankName: "우리",
    },
  ];
    return (
        <div className={CSS1.mainBody}>
            <Header />
            <div className={CSS1.divgubun}>
                <Button variant="light" onClick={onCllckBankDivision}>입출금</Button> 
                <Button variant="light" onClick={onCllckFundDivision}>펀드</Button>
            </div>
                {
                    isAccount === false ?
                    <Accordion defaultActiveKey="0">
                        <Accordion.Item eventKey="0"> 
                            <Accordion.Header>입출금 (계좌갯수) (총 금액)</Accordion.Header>
                            <Accordion.Body className={CSS1.padding}>
                                <div>
                                    <div className={CSS1.account_box}>
                                        {accInfo.map((info, index) => {
                                        return (
                                            <div className={CSS1.border} key={`${info.accountNum}`}>
                                                <p className={CSS1.inner_title}>{info.alias}</p>
                                                <p className={CSS1.inner_sub_title}>
                                                    {info.accountType} {info.accountNum}
                                                </p>
                                                <p className={CSS1.txt_price}>
                                                    <span>{info.amt}</span>원
                                                    <Button className={CSS1.account_hide_btn}>숨김</Button>
                                                </p>
                                                <div className={CSS1.btn_wrap}>
                                                    <span>
                                                        <Button style={{
                                                            color:"black",
                                                            backgroundColor: "#f5f9f7",
                                                            borderColor:"#f5f9f7"
                                                        }} onClick={() => { navigate('/Transfer', { state: { header: "이체" } }); }} active>이체</Button>
                                                    </span>
                                                    <span>
                                                        <Button style={{
                                                            color: "black",
                                                            backgroundColor: "#f5f9f7",
                                                            borderColor:"#f5f9f7"
                                                        }} onClick={() => { navigate('/AccountDetail', { state: { header: "거래내역 조회", info: info } }); }} active>거래내역</Button>
                                                    </span>
                                                </div>
                                            </div>
                                        );
                                        })}
                                    </div>
                                </div>
                                </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                    :
                    <div>
                        <p>펀드 계좌 구성입니다.</p>
                    </div>
                }        
        </div>
    )
}

export default ListPage;