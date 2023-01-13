import styles from './footer.module.scss';

import Container from "../container/Container";

function Footer() {
    return (
        <footer className={styles.footer}>
            <div className='line'></div>
            <Container>
                <h1>Expensive and high-quality code for developers and users.</h1>
                <h3>2023 - <span>∞</span></h3>
            </Container>
        </footer>
    );
}

export default Footer;