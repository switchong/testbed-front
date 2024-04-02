import React, { PropsWithChildren, useState } from "react";
import CSS1 from "../../assets/css/sample01.css";
import ModalCSS from "../../assets/css/sampleModal02.css";
interface ModalDefaultType {
  onClickToggleModal: () => void;
}

function TransferModal({
  onClickToggleModal,
}: PropsWithChildren<ModalDefaultType>) {
    const [isAccount, setAccount] = useState<string>("");

    const onClickRecentDivision = (() => {
        setAccount("");
    })
    const onClickOftenDivision = (() => {
        setAccount("자주");
    })
    const onClickMyAccountDivision = (() => {
        setAccount("내계좌");
    })
    const onClickSimpleDivision = (() => {
        setAccount("심플");
    })

    return (
        <>
            <div className={ModalCSS.modalContainer}>
                <dialog className={ModalCSS.dialogBox}>
                    <div className={CSS1.mainBody}>
                            <div>
                                <div>
                                    <h3>누구에게 보낼까요?</h3>
                                </div>
                                <div>
                                    <button className={ModalCSS.bankDivision} onClick={onClickRecentDivision}>최근</button>
                                    <button className={ModalCSS.bankDivision} onClick={onClickOftenDivision}>자주</button>
                                    <button className={ModalCSS.bankDivision} onClick={onClickMyAccountDivision}>내계좌</button>
                                    <button className={ModalCSS.bankDivision} onClick={onClickSimpleDivision}>심플</button>
                                </div>    
                            </div>
                        {
                            isAccount === "" ?
                                <div>{/**계좌구성 반복*/}
                                    <div>
                                        <b>최근 계좌 탭 활성화</b>
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
                                : null
                        }
                        {   isAccount === "자주" ?
                                <div>{/**계좌구성 반복*/}
                                    <div>
                                        <b>자주 사용한 계좌 탭 활성화</b>
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
                                : null
                        }
                        {   isAccount === "내계좌" ?
                                <div>{/**계좌구성 반복*/}
                                    <div>
                                        <b>내 계좌 탭 활성화</b>
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
                                : null
                        }
                        {   isAccount === "심플" ?
                                <div>{/**계좌구성 반복*/}
                                    <div>
                                        <b>심플 탭 활성화</b>
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
                                : null
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

export default TransferModal;