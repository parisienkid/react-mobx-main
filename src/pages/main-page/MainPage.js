import cardStyles from '../../components/card/card.module.scss';
import { useLayoutEffect, useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import gsap from 'gsap';


import Container from '../../components/container/Container';
import BigText from '../../components/ui/big-text/BigText';
import ArrowLink from '../../components/ui/arrow-link/ArrowLink';
import Cards from '../../components/cards/Cards';
import Card from '../../components/card/Card';


import IconCode from '../../components/ui/icons/Code';
import IconDiscord from '../../components/ui/icons/Discord';
import IconAnimation from '../../components/ui/icons/Animation';


function MainPage() {

    const wrap = useRef();
    const otherContent = useRef();


    useLayoutEffect(() => {
        document.documentElement.scrollTo(0, 0);
        let ctx = gsap.context(() => {
            let tl = gsap.timeline();
            tl
            // .set(document.querySelector('#overlay'), {top: '-100%'})
            .fromTo('h1', {y: 15, skewX: 10, opacity: 0}, {y: 0, skewX: 0, opacity: 1, duration: .5, delay: .25})
            .fromTo('h2', {y: 15, skewX: 10, opacity: 0}, {y: 0, skewX: 0, opacity: 1, duration: .5}, '<.15')
            .from(`section>div`, {y: 30, opacity: 0, stagger: 0.1, duration: .3}, '<.15')
            .from(`.${cardStyles.card}`, {y: 30, opacity: 0, stagger: 0.07}, '<.15')
            .from(`.wrapper`, {y: 15, opacity: 0}, '<0.21')
            .from(otherContent.current, {y: 15, opacity: 0}, '<0.21')
            .from(document.querySelector('footer'), {opacity: 0, duration: .3}, '<.15')
        }, wrap)
        return () => ctx.revert();
    }, [])

    return ( 
        <main ref={wrap}>
            <Container>
                <h1 className='title'>Hi! I'm Danya</h1>
                <h2>Web developer based in Saint-P., Russia.</h2>
                <Cards p="What I do:" url="/work">
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
                    <h3>About me</h3>
                    <BigText>I'm a front-end developer based in Saint-P., Russia. Programming is my main hobby. I had experience with several languages (c, c++, python, java, pascalABC) but stopped at javascript which brought me to the frontend!</BigText>
                    <BigText>I also like to travel, play computer games, study design and follow fashion.</BigText>
                    <BigText>Open for cooperation and new acquaintances!</BigText>
                </section>
                <Cards p="Links:" url="/contact">
                    <Card title='E-mail' paragraph='danyaboickov@icloud.com'>
                        <div>01</div>
                    </Card>
                    <Card title='Telegram' paragraph='https://t.me/parisienkid'>
                        <div>02</div>
                    </Card>
                    <Card title='Instagram' paragraph='https://instagram.com/parisienkid'>
                        <div>03</div>
                    </Card>
                </Cards>
            </Container>
        </main>
    );
}

export default MainPage;