import styles from './bigtext.module.scss';

function BigText({children}) {
    return (
        <p className={styles.big_text}>{children}</p>
    );
}

export default BigText;