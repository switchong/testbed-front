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

    const sessionCheck = () => {
        console.log("session check ==>",window.sessionStorage.getItem("search"));
    }

    return (
        <>
            YS페이지
            <Link to="/ysPage1">ys로 이동하기</Link>
            <p>--------------------------------------</p>
            <button onClick={sessionCheck}>Session Check</button>
        </>
    );
}

export default YSPage1;