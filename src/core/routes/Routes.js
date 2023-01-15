import {
    Routes,
    Route,
} from "react-router-dom";

import TransitionComponent from "../../components/transition-component/TransitionComponent";

import MainPage from "../../pages/main-page/MainPage";
import WorkPage from '../../pages/work-page/WorkPage';
import ContactPage from '../../pages/contact-page/ContactPage';
import Page404 from "../../pages/404-page/404Page";


function AppRoutes() {

    return ( 
        <Routes>
            <Route 
                path='/' 
                element={
                    <TransitionComponent>
                        <MainPage/>
                    </TransitionComponent>
                }
            />
            <Route 
                path='/work' 
                element={
                    <TransitionComponent>
                        <WorkPage/>
                    </TransitionComponent>
                }
            />
            <Route 
                path='/contact' 
                element={
                    <TransitionComponent>
                        <ContactPage/>
                    </TransitionComponent>
                }
            />
            <Route
                path='*' 
                element={
                    <TransitionComponent>
                        <Page404/>
                    </TransitionComponent>
                }
            />
        </Routes>
    );
}



export default AppRoutes;