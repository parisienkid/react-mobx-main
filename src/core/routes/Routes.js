import {
    Routes,
    Route,
} from "react-router-dom";

import MainPage from "../../pages/main-page/MainPage";

function AppRoutes() {
    return ( 
        <Routes>
            <Route path='/' element={<MainPage/>}></Route>
        </Routes>
    );
}

export default AppRoutes;