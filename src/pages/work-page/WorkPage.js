import styles from './workpage.module.scss';
import cardStyles from '../../components/card/card.module.scss';
import { useLayoutEffect, useRef, useEffect } from 'react';

import gsap from 'gsap';


import Container from '../../components/container/Container';
import BigText from '../../components/ui/big-text/BigText';
import Cards from '../../components/cards/Cards';
import Card from '../../components/card/Card';

import IconCode from '../../components/ui/icons/Code';
import IconDiscord from '../../components/ui/icons/Discord';
import IconAnimation from '../../components/ui/icons/Animation';
import IconLayout6Fill from '../../components/ui/icons/Layout';
import IconBuild from '../../components/ui/icons/Build';


function WorkPage() {

    const wrap = useRef();


    useLayoutEffect(() => {
        document.documentElement.scrollTo(0, 0);
        let ctx = gsap.context(() => {
            // gsap.set('h1', {opacity: 0})
            let tl = gsap.timeline();
            tl
            // .set(dsocument.querySelector('#overlay'), {top: '-100%'})
            .fromTo('h2', {y: 15, skewX: 10, opacity: 0}, {y: 0, skewX: 0, opacity: 1, duration: .5, delay: .25})
            .fromTo('h1', {y: 15, skewX: 10, opacity: 0}, {y: 0, skewX: 0, opacity: 1, duration: .5}, '<.15')
            .from(`section>div`, {y: 30, opacity: 0, stagger: 0.1, duration: .3}, '<.15')
            .from(`.${cardStyles.card}`, {y: 30, opacity: 0, stagger: 0.07}, '<.15')
            .from(document.querySelector('footer'), {opacity: 0, duration: .3}, '<.15')

            // .from(`section>div`, {y: 30, opacity: 0, stagger: 0.1, duration: .3}, '<.15')
            // .from(`.${cardStyles.card}`, {y: 30, opacity: 0, stagger: 0.07}, '<.15')
        }, wrap)
        return () => ctx.revert();
    }, [])

    return ( 
        <main ref={wrap}>
            <Container>
                <h2>Work</h2>
                <h1 className='title'>Expensive, cool, usability</h1>
                <Cards p="What I do:">
                    <Card className="cards" title='Architecture' paragraph='Engineering'>
                        <IconBuild/>
                    </Card>
                    <Card className="cards" title='Layout' paragraph='html5, css3'>
                        <IconLayout6Fill/>
                    </Card>
                    <Card className="cards" title='Frontend Development' paragraph='JS, TS, React, Redux, MobX'>
                        <IconCode/>
                    </Card>
                    <Card className="cards" title='Animations' paragraph='Adding animation to the application via GSAP'>
                        <IconAnimation/>
                    </Card>
                    <Card className="cards" title='Discord development' paragraph='Development of simple discord bots by discord.js'>
                        <IconDiscord/>
                    </Card>
                </Cards>
                <section className='wrapper'>
                    <div>
                        <h3>Experience</h3>
                        <BigText>I had experience with several languages (c, c++, python, java, pascalABC) but stopped at javascript which brought me to the frontend!</BigText>
                    </div>
                    <div className={styles.work_block}>
                        <h3>Story</h3>
                        <div className={styles.stroke_block}>
                            <span>Web-developer</span>
                            <span>Freelance.</span>
                            <span>2020 - Current</span>
                        </div>
                        <div className="line"></div>
                        <div className={styles.stroke_block}>
                            <span>Front-end developer</span>
                            <span>BreadHead studio.</span>
                            <span>2023 - Current</span>
                        </div>
                        <div className="line"></div>
                    </div>
                    <div className={styles.work_block}>
                        <h3>Stack</h3>
                        <BigText>I love experimenting with technology at work. Over the course of my career, I have gained experience with: JS, TS, React, Redux, MobX, sass/scss, css-modules, styled-components, GSAP.</BigText>
                    </div>
                </section>
            </Container>
        </main>
    );
}

export default WorkPage;