import styles from './arrowlink.module.scss';
import { Link } from 'react-router-dom';
import { cursorHoverOn, cursorHoverOff } from '../../../core/helpers/cursoreHover';

function ArrowLink({url, children}) {
    return (
        <Link onMouseEnter={cursorHoverOn} onMouseLeave={cursorHoverOff} className={styles.a} to={url}>{children} <svg fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" viewBox="0 0 24 24" stroke="currentColor"><path d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg></Link>
    );
}


export default ArrowLink;