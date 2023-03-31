import styles from './app.module.scss';


import gsap from 'gsap';
import loaderStatus from '../../core/store/loader-status';
import { observer } from 'mobx-react-lite';


import {BrowserRouter as Router} from "react-router-dom";
import AppRoutes from '../../core/routes/Routes';
import Loader from '../loader/Loader';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import Cursor from '../cursor/Cursor';


gsap.config({
  nullTargetWarn: false,
})

const renderLoader = () => {
  if (loaderStatus.status === 'loading') {
    return <Loader/>
  } else {
    return (
      <div className={styles.app}>
        <div id='overlay'></div>
        <Cursor/>
        <Header/>
        <AppRoutes/>
        <Footer/>
      </div>
    )
  }
}


const App = observer(() => {
  return (
   <Router>
    {renderLoader()}
   </Router>
  );
}) 

export default App;
