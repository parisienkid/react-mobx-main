import styles from './header.module.scss';
import { Link } from 'react-router-dom';

import Container from '../container/Container';

// import B from '../../assets/B.svg';

function Header() {
    return (
        <header className={styles.header}>
            <Container>
                <div className={styles.content}>
                    {/* <span className={styles.logo}>parisien</span> */}
                    <nav className={styles.nav}>
                        <Link>home</Link>
                        <Link>about</Link>
                        <Link>contact</Link>
                    </nav>
                </div>
            </Container>
        </header>
    );
}

export default Header;