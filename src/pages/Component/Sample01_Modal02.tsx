import React, { PropsWithChildren } from "react";
import ModalCSS from "../../assets/css/sampleModal01.css";
import CSS1 from "../../assets/css/sample01.css";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Modal from 'react-bootstrap/Modal';
interface ModalDefaultType {
  onClickToggleModal: () => void;
}

function TransferModal({
  onClickToggleModal,
}: PropsWithChildren<ModalDefaultType>) {

    return (
        <>
            <div className={ModalCSS.modalContainer}>
                <Modal.Dialog className={ModalCSS.modalDialogBox}>
                    <Modal.Header className={ModalCSS.modalHeader}>   
                        <div>
                            <h4>누구에게 보낼까요?</h4>
                        </div>
                    </Modal.Header>
                    <Modal.Body className={CSS1.mainBody}>
                        <Tabs defaultActiveKey="recent"
                        id="uncontrolled-tab-example"
                        className="mb-3" justify>
                            <Tab eventKey="recent" title="최근" >
                                <b>최근 계좌 탭 활성화</b>
                            </Tab>
                            <Tab eventKey="often" title="자주" >
                                <b>자주 사용한 계좌 탭 활성화</b>
                            </Tab>
                            <Tab eventKey="myaccount" title="내계좌" >
                                <b>내 계좌 탭 활성화</b>
                            </Tab>
                            <Tab eventKey="simple" title="심플" >
                                <b>심플 탭 활성화</b>
                            </Tab>
                        </Tabs>
                    </Modal.Body>
                </Modal.Dialog>
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