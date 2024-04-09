import { useCallback, useEffect, useState } from "react";
import CSS1 from "../assets/css/sample01.css";
import CSS3 from "../assets/css/sample03.css";
import Button from 'react-bootstrap/Button';
import Header from './Layout/Header';
import Modal01 from "./Component/Sample01_Modal01";
import Modal02 from "./Component/Sample01_Modal02";
import { useLocation } from "react-router-dom";

function Transfer() {
    const [isOpenModal01, setOpenModal01] = useState<boolean>(false);
    const [isOpenModal02, setOpenModal02] = useState<boolean>(false);
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
    const onClickToggleModal01 = useCallback(() => {
        setOpenModal01(!isOpenModal01);
    }, [isOpenModal01]);
    const onClickToggleModal02 = useCallback(() => {
        setOpenModal02(!isOpenModal02);
    }, [isOpenModal02]);
    
    return (
        
        <div className={CSS1.mainBody}>
            
            <div>
                <Header />
                <p>계좌 정보</p>
                <div className={CSS3.account_box}>
                    <div onClick={onClickToggleModal01}>
                        <p className={CSS3.inner_title}>{state.info.accountType}</p>
                        <p className={CSS3.inner_sub_title}>
                            <span>{state.info.accountType}_{state.info.accountNum}</span>
                            <span className={CSS3.float_right}>▼</span>
                        </p>
                        <p className={CSS3.txt_price1}>
                            {state.info.amt}원
                        </p>
                    </div>
                    {/* {drawAccountList} */}
                </div>
                {isOpenModal01 && (
                <Modal01 onClickToggleModal={onClickToggleModal01}/>
                )}
                <br/>
                <p>이체</p>
                {isOpenModal02 && (
                    <Modal02 modalVisible={isOpenModal02} handleClose={onClickToggleModal02}/>
                )}
                <div className={CSS3.transfer_box}>
                    <Button className={CSS3.dialogButton} onClick={onClickToggleModal02}>은행/계좌번호 입력</Button>
                </div>
            </div>
        </div>
    )
}

export default Transfer;