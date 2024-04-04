import { useCallback, useEffect, useState } from "react";
import CSS1 from "../assets/css/sample01.css";
import CSS3 from "../assets/css/sample03.css";
import Button from 'react-bootstrap/Button';
import Header from './Layout/Header';
import Modal01 from "./Component/Sample01_Modal01";
import Modal02 from "./Component/Sample01_Modal02";

function Transfer() {
    const [isOpenModal01, setOpenModal01] = useState<boolean>(false);
    const [isOpenModal02, setOpenModal02] = useState<boolean>(false);
    const [selectedAccount, setSelectedAccount] = useState({
		label: '',
		account: '',
        addCommaAmount: '',
        acnoDisplay: '',
    }); 
    
    const onClickToggleModal01 = useCallback(() => {
        setOpenModal01(!isOpenModal01);
    }, [isOpenModal01]);
    const onClickToggleModal02 = useCallback(() => {
        setOpenModal02(!isOpenModal02);
    }, [isOpenModal02]);
    
    useEffect(() => {
         setSelectedAccount({
            label: '개인형 IRP',
            account: '개인형 IRP'+ '_' + '123-456-123456',
            addCommaAmount :'1,000,000',
            acnoDisplay: ''
        });
    },[setSelectedAccount])
       
    return (
        
        <div className={CSS1.mainBody}>
            
            <div>
                <Header />
                <p>계좌 정보</p>
                <div className={CSS3.account_box}>
                    <div onClick={onClickToggleModal01}>
                        <p className={CSS3.inner_title}>{selectedAccount.label}</p>
                        <p className={CSS3.inner_sub_title}>
                            <span>{selectedAccount.account}</span>
                            <span className={CSS3.float_right}>▼</span>
                        </p>
                        <p className={CSS3.txt_price1}>
                            {selectedAccount.addCommaAmount && (<><span>{selectedAccount.addCommaAmount}</span>원</>)}
                        </p>
                    </div>
                    {/* {drawAccountList} */}
                </div>
                {isOpenModal01 && (
                <Modal01 onClickToggleModal={onClickToggleModal01}/>
                )}
                {/* <button className={CSS3.dialogButton} onClick={onClickToggleModal01}>내 계좌정보</button> */}
                <br/>
                <p>이체</p>
                {isOpenModal02 && (
                <Modal02 onClickToggleModal={onClickToggleModal02}/>
                )}
                <div className={CSS3.transfer_box}>
                    <Button className={CSS3.dialogButton} onClick={onClickToggleModal02}>은행/계좌번호 입력</Button>
                </div>
            </div>
        </div>
    )
}

export default Transfer;