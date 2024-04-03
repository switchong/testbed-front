import APage from "../pages/aPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../pages/homePage";
import YsPage1 from "../pages/ysPage1";
import YsPage2 from "../pages/ysPage2";

function RootRoute() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/aPage" element={<APage />} />
                <Route path="/ysPage1" element={<YsPage1 />} />
                <Route path="/ysPage2" element={<YsPage2 />} />
            </Routes>
        </BrowserRouter>
    );
}

export default RootRoute;
