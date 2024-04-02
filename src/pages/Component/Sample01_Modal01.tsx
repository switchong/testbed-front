import React, { PropsWithChildren, useState } from "react";
import CSS1 from "../../assets/css/sample01.css";
import ModalCSS from "../../assets/css/sampleModal01.css";
interface ModalDefaultType {
  onClickToggleModal: () => void;
}

function AccountModal({
  onClickToggleModal,
}: PropsWithChildren<ModalDefaultType>) {
    const [isHanaBank, setHanaBank] = useState<boolean>(true);

    const onClickHanaBankDivision = (() => {
        setHanaBank(true);
    })
    const onClickOtherBankDivision = (() => {
        setHanaBank(false);
    })

    return (
        <>
            <div className={ModalCSS.modalContainer}>
                <dialog className={ModalCSS.dialogBox}>
                    <div className={CSS1.mainBody}>
                            <div>
                                <div>
                                    <h3>출금계좌</h3>
                                </div>
                                <div>
                                    <button className={ModalCSS.bankDivision} onClick={onClickHanaBankDivision}>하나은행</button>
                                    <button className={ModalCSS.bankDivision} onClick={onClickOtherBankDivision}>다른은행</button>
                                </div>    
                            </div>
                            {
                                isHanaBank === true ?
                                    <div>{/**계좌구성 반복*/}
                                        <div>
                                            <b>하나은행 버튼 활성화</b>
                                        </div>
                                        <div>
                                            {/**하나은행 로고 이미지*/}
                                        </div>
                                        <div>
                                            {/**계좌 종류 */}
                                            {/**계좌 번호 */}
                                            {/**잔액 */}
                                        </div>
                                    </div>
                                    :
                                    <div>{/**계좌구성 반복*/}
                                        <div>
                                            <b>다른은행 버튼 활성화</b>
                                        </div>
                                        <div>
                                            {/**타행은행 로고 이미지*/}
                                        </div>
                                        <div>
                                            {/**계좌 종류 */}
                                            {/**계좌 번호 */}
                                            {/**잔액 */}
                                        </div>
                                    </div>
                            }
                        </div>
                </dialog>
            <div className={ModalCSS.backDrop} onClick={(e: React.MouseEvent) => { e.preventDefault();
                                                        if (onClickToggleModal) {
                                                            onClickToggleModal();
                                                        }
            }}/>
            </div>
        </>
    );

}

export default AccountModal;