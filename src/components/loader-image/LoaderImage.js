import { useLayoutEffect } from 'react';
import gsap from 'gsap';

import styles from './loaderImage.module.scss';

const LoaderImage = ({imagesReady, left, top, url}) => {


    const tlOpen = gsap.timeline({paused: true})
    tlOpen.to(`.${styles.layer}`, {
        yPercent: -100, 
        ease: 'power2.inOut',
        duration: 1.2,
        stagger: 0.2
    })
    .to(`.${styles.figure}`, {
        top: -10,
        duration: 30,
    }, 0)
    .to('img', {
        transform: 'scale(1.05)',
        ease: 'power2.inOut',
        duration: 1,
        stagger: 0.2
    }, '<0.3')

    const tlClose = gsap.timeline({paused: true})
    tlClose.to(`.${styles.layer}`, {
        yPercent: 0, 
        ease: 'power2.inOut',
        duration: .6,
        stagger: 0.1,
    })
    .to('img', {
        transform: 'scale(1.05)',
        ease: 'power2.inOut',
        duration: 1
    }, '<')
    .to(`.${styles.figure}`, {display: 'none', duration: 0})

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            if (imagesReady === 'open') {
                tlOpen.play();
            }
            if (imagesReady === 'close') {
                tlClose.play();
            }
        });
        return () => ctx.revert();
    },[imagesReady]);

    return (
        <figure style={{top: top, left: left}} className={styles.figure}>
            <div className={styles.layer}></div>
            <img src={url} alt="img" />
        </figure>
    )
};

export default LoaderImage;