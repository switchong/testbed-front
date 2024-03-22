import { useDispatch, useSelector } from "react-redux";
import "./reset.css";
import "./setRem.css";
import styled from "styled-components";
import { RootReducerType } from "reduxes";
import { useEffect, useRef } from "react";
import RootRoute from "./routes";
import { useMediaQuery } from "react-responsive";
import { NowMediaQueryAction } from "./reduxes/nowMediaQueryRedux";
import "./config";

//test
function App() {
    const { Metaaddress, Metaname } = useSelector(
        (state: RootReducerType) => state.UserWalletMetaReducer
    );
    const { Kaiaddress, Kainame } = useSelector(
        (state: RootReducerType) => state.UserWalletKaiReducer
    );
    const dispatch = useDispatch();
    const ethereum = useRef(window.ethereum);
    const klaytn = useRef(window.klaytn);

    //react-responsive
    const isPc = useMediaQuery({
        query: `(min-width: 768px)`,
    });

    const handleEtherium = () => {
        if (ethereum && ethereum.current.isMetaMask) {
            console.log("Metamask is alreay installed");
        } else {
            console.log("Please install MetaMask");
        }

        if (klaytn && klaytn.current.isKaikas) {
            console.log("Kaikas is already installed");
        } else {
            console.log("Please install Kaikas");
        }
    };

    useEffect(() => {
        dispatch(
            NowMediaQueryAction({
                isPc,
            })
        );
    }, [isPc, dispatch]);


    return (
        <AppStyle color="green">
            <RootRoute />
        </AppStyle>
    );
}

const AppStyle = styled.div`
    color: ${(props) => props.color};
`;

export default App;
