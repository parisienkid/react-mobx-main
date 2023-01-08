import logo from '../../logo.svg';
import styles from './app.module.scss';

import gsap from 'gsap';
import loaderStatus from '../../core/store/loader-status';
import { observer } from 'mobx-react-lite';


import {BrowserRouter as Router} from "react-router-dom";
import AppRoutes from '../../core/routes/Routes';
import Loader from '../loader/Loader';
import Header from '../header/Header';


gsap.config({
  nullTargetWarn: false,
})

const renderLoader = () => {
  if (loaderStatus.status === 'loading') {
    return <Loader/>
  } else {
    return null
  }
}


const App = observer(() => {
  return (
   <Router>
      <div className={styles.app}>
        <Header/>
        {/* {renderLoader()} */}
        <AppRoutes/>
      </div>
   </Router>
  );
}) 

export default App;
