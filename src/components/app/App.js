import logo from '../../logo.svg';
import styles from './app.module.scss';


import gsap from 'gsap';
import loaderStatus from '../../core/store/loader-status';
import { observer } from 'mobx-react-lite';


import {BrowserRouter as Router} from "react-router-dom";
import AppRoutes from '../../core/routes/Routes';
import Loader from '../loader/Loader';
import Header from '../header/Header';
import Footer from '../footer/Footer';


gsap.config({
  nullTargetWarn: false,
})

// const renderLoader = () => {
//   if (loaderStatus.status === 'loading') {
//     return <Loader/>
//   } else {
//     return (
      
//     )
//   }
// }


const App = observer(() => {
  return (
   <Router>
      {/* {renderLoader()} */}
      <div className={styles.app}>
        <div id='overlay'></div>
        <Header/>        
        <AppRoutes/>
        <Footer/>
      </div>
   </Router>
  );
}) 

export default App;
