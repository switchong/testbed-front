import { useCallback, useState } from "react";
import CSS1 from "../assets/css/sample01.css";
import CSS3 from "../assets/css/sample03.css";
import Header from './Layout/Header';
import Modal01 from "./Component/Sample01_Modal01";
import Modal02 from "./Component/Sample01_Modal02";

function Transfer() {
    const [isOpenModal01, setOpenModal01] = useState<boolean>(false);
    const [isOpenModal02, setOpenModal02] = useState<boolean>(false);
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
                {isOpenModal01 && (
                <Modal01 onClickToggleModal={onClickToggleModal01}/>
                )}
                <button className={CSS3.dialogButton} onClick={onClickToggleModal01}>내 계좌정보</button>
                <br/>
                <p>이체</p>
                {isOpenModal02 && (
                <Modal02 onClickToggleModal={onClickToggleModal02}/>
                )}
                <button className={CSS3.dialogButton} onClick={onClickToggleModal02}>은행/계좌번호 입력</button>
            </div>
        </div>
    )
}

export default Transfer;