import { useState, useRef, useEffect } from "react";

import styled from "styled-components";
import xButton from "../../assets/icon/X_Button.png";

const SideBarWrap = styled.div`
    z-index: 5;
    padding: 12px;
    border-radius: 15px 0 0 15px;
    background-color: #e7e4e1;
    height: 100%;
    width: 30%;
    right: -30%;
    top: 0;
    position: fixed;
    transition: 0.5s ease;
    &.open {
        right: 0;
        transition: 0.5s ease;
    }
`;

const Menu = styled.li`
    margin: 30px 8px;
`;

const ExitMenu = styled.span`
    position: absolute;
    bottom: 26px;
    font-size: 0.8rem;
`;

function SideBar({isOpen, setIsOpen}: {isOpen: boolean; setIsOpen: any}){
    const outside = useRef<any>();

    useEffect(()=>{
        document.addEventListener("mousedown", handlerOutsie);
        return () => {
            document.removeEventListener("mousedown", handlerOutsie);
        };
    });

    const handlerOutsie = (e:any) => {
        if (!outside.current.contains(e.target)) {
            toggleSide();
        }
    };

    const toggleSide = () => {
        setIsOpen(false);
    }

    return (
        <SideBarWrap id="sidebar" ref={outside} className={isOpen ? "open" : ""}>
            <img 
                src={xButton}
                alt="close"
                width="15x"
                height="15px"
                onClick={toggleSide}
                onKeyDown={toggleSide}
            />
            <ul>
                <Menu onClick={()=>window.open("https://thecheat.co.kr/rb/?mod=_search")}>금융사기 조회</Menu>
                <Menu>다크모드</Menu>
                <Menu>메뉴3</Menu>
            </ul>
        </SideBarWrap>
    );
}

export default SideBar;