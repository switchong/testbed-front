import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { ExampleAction } from "../reduxes/exampleRedux";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import React from "react";
import { Router, Route } from "react-router";
import { createBrowserHistory } from "history";

function YSPage1() {
    //action trigger hook
    const dispatch = useDispatch();
    //state manage
    const [data, setData] = useState("hihi");
    //react cookie
    const [cookie, setCookie, removeCookie] = useCookies(["test"]);

    // sessionStorage에 저장된 search 값 가져옴
    const sessionSearch = window.sessionStorage.getItem("search");
    // search input 값이 바뀔때마다 상태 관리
    const [search, setSearch ] = useState(sessionSearch || "");
    // search 값이 바뀔때마다 sessionStorage의 값도 변경
    useEffect(()=> {
        window.sessionStorage.setItem("search", search);
        console.log("session setting ==>",window.sessionStorage.getItem("search"));
    },[search])

    //react lifcycle
    useEffect(() => {
        const loadingTest = setTimeout(() => {
            setData("로딩끝");
        }, 2000);

        return () => {
            clearTimeout(loadingTest);
        };
    }, []);

    const handleExampleAction = () => {
        //redux action trigger
        dispatch(
            ExampleAction({
                name: "안뇽",
                email: "하세요",
            })
        );
    };

    const handleChangeEnv = () => {
        //환경변수 사용
        console.log(process.env.ENV_KEY);
    };

    const sessionTest1 = () => {
        setSearch("click test 111111");
    }

    const sessionTest2 = () => {
        setSearch("click test 222222");
    }

    const sample1 = () => {
        console.log("거래내역조회 이동");
    }

    const sample2 = () => {
        console.log("이체하기 이동");
    }

    const sample3 = () => {
        console.log("카드관리 이동");
    }

    return (
        <>
            A페이지
            <Link to="/">app으로 이동하기</Link>
            <p></p>
            B페이지
            <Link to="/aPage">page로 이동하기</Link>
            <p></p>
            YS페이지
            <Link to="/ysPage1">ys로 이동하기</Link>
            <p></p>
            Session페이지
            <Link to="/ysPage2">Session페이지로 이동하기</Link>
            <p></p>
            <p>{cookie.test || "no cookie"}</p>
            <p>{data}</p>
            <p>--------------------------------------</p>
            {/* <img src={busIcon} alt="example" width="200px" height="200px" /> */}
            <button onClick={() => {setCookie("test", "yongseon test page", { path: "/" });}}>쿠키 테스트1</button>
            <button onClick={() => {removeCookie("test");}}>쿠키 테스트2</button>
            <p></p>
            --------------------------------------
            <p></p>
            <button onClick={sessionTest1}>SESSION TEST 111</button>
            <p></p>
            <button onClick={sessionTest2}>SESSION TEST 222</button>
            <p></p>
            --------------------------------------
            <p></p>
            <button onClick={sample1}>거래내역조회</button>
            <p></p>
            <button onClick={sample2}>이체하기</button>
            <p></p>
            <button onClick={sample3}>카드관리</button>
            <p></p>
        </>
    );
}

export default YSPage1;