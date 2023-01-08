import styles from './card.module.scss';


function Card({url, title, paragraph, children}) {
    return (
        <article className={styles.card}>
            <div className={styles.icon_bg}>
                {/* <img src={url} alt="Icon" className={styles.icon} /> */}
                {children}
            </div>
            <div className={styles.title}>
                {title}
            </div>
            <p>
                {paragraph}
            </p>
        </article>
    );
}

export default Card;