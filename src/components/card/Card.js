import { useLayoutEffect, useRef } from 'react';

import gsap from 'gsap';

import styles from './card.module.scss';


function Card({url, title, paragraph, children, a}) {


    return (
        <article className={styles.card}>
            <div className={styles.icon_bg}>
                {/* <img src={url} alt="Icon" className={styles.icon} /> */}
                {children}
            </div>
            <div className={styles.title}>
                {title}
            </div>
            {
                a
                ?
                <a target='_blank' href={paragraph}>{paragraph}</a>
                :
                <h3>
                    {paragraph}
                </h3>
            }
        </article>
    );
}

export default Card;