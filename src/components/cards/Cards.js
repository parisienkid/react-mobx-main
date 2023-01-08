import styles from './cards.module.scss';

import ArrowLink from '../ui/arrow-link/ArrowLink';

function Cards({url, p, children}) {
    return (
        <section className={styles.wrapper}>
            <div className={styles.header}>
                <p>{p}</p>
                {
                    url 
                    ?
                    <ArrowLink url={url}>All</ArrowLink>
                    :
                    null
                }
            </div>
            <div className={styles.content}>
                {children}
            </div>
        </section>
    );
}

export default Cards;