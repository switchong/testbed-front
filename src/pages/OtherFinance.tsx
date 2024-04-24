import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Accordion, Button } from 'react-bootstrap';
import CSS1 from "../assets/css/sample01.css";
import Header from "./Layout/Header";


function ListPage() {
    const navigate = useNavigate();

    const [isAccount, setAccount] = useState<boolean>(false);

    const [otherAcctInfo, setOtherAcctInfo] = useState([
        {
            alias: "카카오뱅크",
            accountType: "입출금",
            accountNum: "3333-01-7777777",
            ownerName: "카카오테스트",
            amt: 700000000,
            bankCode: "777",
            bankName: "카카오뱅크",
            isShowHide: true
        }, 
        {
            alias: "토스뱅크",
            accountType: "입출금",
            accountNum: "1000-8888-8888",
            ownerName: "토스테스트",
            amt: 800000000,
            bankCode: "888",
            bankName: "토스뱅크",
            isShowHide: false
        },
        {
            alias: "나무증권",
            accountType: "증권계좌",
            accountNum: "202-01-999999",
            ownerName: "나무증권종합매매",
            amt: 900000000,
            bankCode: "999",
            bankName: "나무증권",
            isShowHide: true
        },
        {
            alias: "자유적금",
            accountType: "입출금계좌",
            accountNum: "127-777777-77-777",
            ownerName: "기업은행자유적금",
            amt: 500000000,
            bankCode: "127",
            bankName: "기업은행",
            isShowHide: true
        },
        {
            alias: "TEST",
            accountType: "TEST",
            accountNum: "123-456-789-000",
            ownerName: "TEST",
            amt: 100000000,
            bankCode: "TEST",
            bankName: "TEST",
            isShowHide: true
        },
    ]);
    let total = 0;
    for( let i=0; i<otherAcctInfo.length; i++ ){
        if(otherAcctInfo[i].isShowHide === true){
            total = total + otherAcctInfo[i].amt;
        }
    }

    const toggleShowhide = (index: number) => {
        console.log("index =>", index);
        const newOtherAcctInfo = [...otherAcctInfo];
        newOtherAcctInfo[index].isShowHide = !newOtherAcctInfo[index].isShowHide;
        setOtherAcctInfo(newOtherAcctInfo);
    }

    const handelCopyClipBoard = async (text:string) => {
        try {
            await navigator.clipboard.writeText(text);
            alert("클립보드에 계좌번호가 복사되었습니다.");
        } catch (e) {
            alert("복사에 실패하였습니다.");
        }
    }

    return (
        <div className={CSS1.mainBody}>
            <Header />
            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>다른금융 모아보기 - {otherAcctInfo.length}개&nbsp;
                        <div>
                            {total.toLocaleString()}원
                        </div>
                    </Accordion.Header>
                    <Accordion.Body className={CSS1.padding}>
                        <div className={CSS1.account_box}>
                            {otherAcctInfo.map((info, index) => {
                                return (
                                    <div className={CSS1.border} key={`${info.accountNum}`}>
                                        <p className={CSS1.inner_title}>{info.alias}</p>
                                        <p className={CSS1.inner_sub_title}>{info.accountType} {info.accountNum}<Button onClick={()=>handelCopyClipBoard(info.accountNum)}></Button></p>
                                        <p className={CSS1.txt_price}>
                                            {
                                                info.isShowHide === true ?
                                                <><span>{info.amt.toLocaleString()}</span>원</>:<>- 원</> 
                                            }
                                            <Button className={CSS1.account_hide_btn} onClick={()=>toggleShowhide(index)}>{info.isShowHide ? "숨김" : "보이기"}</Button>
                                        </p>
                                    </div>
                                );
                            })}
                        </div> 
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
               
        </div>
    )
}

export default ListPage;