import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../pages/homePage";
import YsPage1 from "../pages/ysPage1";
import YsPage2 from "../pages/ysPage2";
import Sample01 from "../pages/Sample01_01";
import Sample02 from "../pages/Sample01_02";
import Sample03 from "../pages/Sample01_03";
import APage from "pages/aPage";

function RootRoute() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/aPage" element={<APage />} />
                <Route path="/ysPage1" element={<YsPage1 />} />
                <Route path="/ysPage2" element={<YsPage2 />} />
                <Route path="/" element={<Sample01 />} />
                <Route path="/AccountDetail" element={<Sample02 />} />
                <Route path="/Transfer" element={<Sample03/>} />
            </Routes>
        </BrowserRouter>
    );
}

export default RootRoute;
