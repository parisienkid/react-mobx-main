

import styles from './card.module.scss';
import { cursorHoverOff, cursorHoverOn } from '../../core/helpers/cursoreHover';

function Card({url, title, paragraph, children, a}) {


    return (
        <article className={styles.card}>
            <div className={styles.icon_bg}>
                {children}
            </div>
            <div className={styles.title}>
                {title}
            </div>
            {
                a
                ?
                <a onMouseEnter={cursorHoverOn} onMouseLeave={cursorHoverOff} target='_blank' rel="noreferrer" href={paragraph}>{paragraph}</a>
                :
                <h3>
                    {paragraph}
                </h3>
            }
        </article>
    );
}

export default Card;