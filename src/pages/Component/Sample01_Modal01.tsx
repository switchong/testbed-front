import React, { PropsWithChildren, useState } from "react";
import CSS1 from "../../assets/css/sample01.css";
import ModalCSS from "../../assets/css/sampleModal01.css";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Modal from 'react-bootstrap/Modal';
interface ModalDefaultType {
  onClickToggleModal: () => void;
}

function AccountModal({
  onClickToggleModal,
}: PropsWithChildren<ModalDefaultType>) {
    return (
        <>
            <div className={ModalCSS.modalContainer}>
                <Modal.Dialog className={ModalCSS.modalDialogBox}>
                    <Modal.Header className={ModalCSS.modalHeader}>
                        <div>
                            <h4>출금계좌</h4>
                        </div>
                    </Modal.Header>
                    <Modal.Body className={CSS1.mainBody}>
                            <Tabs defaultActiveKey="hana"
                            id="uncontrolled-tab-example"
                            className="mb-3" justify>
                            <Tab eventKey="hana" title="하나은행" >
                                <b>하나은행 버튼 활성화</b>
                            </Tab>
                            <Tab eventKey="other" title="다른은행" >
                                <b>다른은행 버튼 활성화</b>
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

export default AccountModal;