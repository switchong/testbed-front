import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sample01 from "../pages/Sample01_01";
import Sample02 from "../pages/Sample01_02_01";
import Sample03 from "../pages/Sample01_02_02";
import Sample04 from "../pages/Sample02_01";
import OtherFinance from "../pages/OtherFinance";
import MyData from "../pages/MyData";

function RootRoute() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Sample01 />} />
                <Route path="/AccountDetail" element={<Sample02 />} />
                <Route path="/Transfer" element={<Sample03 />} />
                <Route path="/MyCard" element={<Sample04 />} />
                <Route path="/otherFinance" element={<OtherFinance/>} />
                <Route path="/myData" element={<MyData/>} />
            </Routes>
        </BrowserRouter>
    );
}

export default RootRoute;
