import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';

import styles from './header.module.scss';

import { NavLink } from 'react-router-dom';
import Container from '../container/Container';
import { cursorHoverOff, cursorHoverOn } from '../../core/helpers/cursoreHover';


function Header() {

    const wrap = useRef();

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            let tl = gsap.timeline();
            tl
            .fromTo(`.${styles.nav}`, {y: -15, skewX: 10, opacity: 0}, {y: 0, skewX: 0, opacity: 1, duration: .5})

            let logoTl = gsap.timeline({repeat: -1, delay: 1});
            logoTl
            .fromTo(`.${styles.primary}`, {scale: 0}, {scale: 1, duration: .5, delay: 0.5})
            .fromTo(`.${styles.secondary}`, {scale: 0}, {scale: 1, opacity: 1, duration: .5}, '<')
            .to(`.${styles.primary}`, {x: -10, duration: .5})
            .to(`.${styles.secondary}`, {x: 10,  duration: .5}, '<')
            .to(`.${styles.logo}`, {rotate: 360,  duration: 1})
            .to(`.${styles.secondary}`, {x: 0,  duration: .5}, '<.5')
            .to(`.${styles.primary}`, {x: 0,  duration: .5}, '<')
            .to(`.${styles.secondary}`, {rotate: 180,  duration: 1}, '<.15')
            .to(`.${styles.primary}`, {rotate: 180,  duration: 1}, '<')
            .to(`.${styles.primary}`, {borderRadius: '0%', duration: .5}, '<')
            .to(`.${styles.secondary}`, {borderRadius: '0%',  duration: .5}, '<')
            .to(`.${styles.secondary}`, {rotate: -90, borderRadius: '50%', scale: 0,  duration: 1})
            .to(`.${styles.primary}`, {rotate: -90, borderRadius: '50%', scale: 0,  duration: 1}, '<')
            

        }, wrap)
        return () => ctx.revert();
    }, [])

    return (
        <header ref={wrap} className={styles.header}>
            <Container>
                <div className={styles.content}>
                    <div className={styles.logo}>
                        <div className={styles.primary}></div>
                        <div className={styles.secondary}></div>
                    </div>
                    <nav className={styles.nav}>
                        <NavLink onMouseEnter={cursorHoverOn} onMouseLeave={cursorHoverOff} to='/'>about</NavLink>
                        <NavLink onMouseEnter={cursorHoverOn} onMouseLeave={cursorHoverOff} to='/work'>work</NavLink>
                        <NavLink onMouseEnter={cursorHoverOn} onMouseLeave={cursorHoverOff} to='/contact'>contact</NavLink>
                    </nav>
                </div>
            </Container>
        </header>
    );
}

export default Header;