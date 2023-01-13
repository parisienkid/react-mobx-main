import cardStyles from '../../components/card/card.module.scss';
import { useLayoutEffect, useRef, useEffect } from 'react';

import gsap from 'gsap';


import Container from '../../components/container/Container';
import BigText from '../../components/ui/big-text/BigText';
import ArrowLink from '../../components/ui/arrow-link/ArrowLink';
import Cards from '../../components/cards/Cards';
import Card from '../../components/card/Card';

import IconCode from '../../components/ui/icons/Code';
import IconDiscord from '../../components/ui/icons/Discord';
import IconAnimation from '../../components/ui/icons/Animation';


function ContactPage() {

    const wrap = useRef();


    useLayoutEffect(() => {
        document.documentElement.scrollTo(0, 0);
        let ctx = gsap.context(() => {
            // gsap.set('h1', {opacity: 0})
            let tl = gsap.timeline();
            tl
            // .set(document.querySelector('#overlay'), {top: '-100%'})
            .fromTo('h2', {y: 15, skewX: 10, opacity: 0}, {y: 0, skewX: 0, opacity: 1, duration: .5, delay: .25})
            .fromTo('h1', {y: 15, skewX: 10, opacity: 0}, {y: 0, skewX: 0, opacity: 1, duration: .5}, '<.15')
            .from(`section>div`, {y: 30, opacity: 0, stagger: 0.1, duration: .3}, '<.15')
            .from(`.${cardStyles.card}`, {y: 30, opacity: 0, stagger: 0.07}, '<.15')
            .from(document.querySelector('footer'), { opacity: 0, duration: .3}, '<.15')
            // .from(`section>div`, {y: 30, opacity: 0, stagger: 0.1, duration: .3}, '<.15')
            // .from(`.${cardStyles.card}`, {y: 30, opacity: 0, stagger: 0.07}, '<.15')
        }, wrap)
        return () => ctx.revert();
    }, [])

    return ( 
        <main ref={wrap}>
            <Container>
                <h2>Contact</h2>
                <h1 className='title'>Open for new opportunities</h1>
                <Cards p="Links:">
                    <Card title='E-mail' paragraph='danyaboickov@icloud.com' a={true}>
                        <div>01</div>
                    </Card>
                    <Card title='Telegram' paragraph='https://t.me/parisienkid' a={true}>
                        <div>02</div>
                    </Card>
                    <Card title='Instagram' paragraph='https://instagram.com/parisienkid' a={true}>
                        <div>03</div>
                    </Card>
                    <Card title='Discord' paragraph='https://discordapp.com/users/508401436732817409' a={true}>
                        <div>04</div>
                    </Card>
                    <Card title='Github' paragraph='https://github.com/parisienkid' a={true}>
                        <div>05</div>
                    </Card>
                </Cards>
            </Container>
        </main>
    );
}

export default ContactPage;