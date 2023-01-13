import { useLayoutEffect } from 'react';
import { ScrollRestoration } from "react-router-dom";

import {
    Routes,
    Route,
    useLocation
} from "react-router-dom";


import TransitionComponent from "../../components/transition-component/TransitionComponent";

import MainPage from "../../pages/main-page/MainPage";
import WorkPage from '../../pages/work-page/WorkPage';
import ContactPage from '../../pages/contact-page/ContactPage';


function AppRoutes() {

    return ( 
        <Routes>
            <Route 
                path='/' 
                element={
                    // <ScrollWrapper>
                        <TransitionComponent>
                            <MainPage/>
                        </TransitionComponent>
                    // </ScrollWrapper>
                }
            />
            <Route path='/work' 
                element={
                    // <ScrollWrapper>
                        <TransitionComponent>
                            <WorkPage/>
                        </TransitionComponent>
                    // </ScrollWrapper>
                }></Route>
            <Route path='/contact' 
                element={
                    // <ScrollWrapper>
                        <TransitionComponent>
                            <ContactPage/>
                        </TransitionComponent>
                    // </ScrollWrapper>
                }></Route>
        </Routes>
    );
}



export default AppRoutes;