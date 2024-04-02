import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sample01 from "../pages/Sample01_01";
import Sample02 from "../pages/Sample01_02";
import Sample03 from "../pages/Sample01_03";

function RootRoute() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Sample01 />} />
                <Route path="/AccountDetail" element={<Sample02 />} />
                <Route path="/Transfer" element={<Sample03/>} />
            </Routes>
        </BrowserRouter>
    );
}

export default RootRoute;
