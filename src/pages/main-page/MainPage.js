import styles from './mainpage.module.scss';

import Container from '../../components/container/Container';
import BigText from '../../components/ui/big-text/BigText';
import ArrowLink from '../../components/ui/arrow-link/ArrowLink';
import Cards from '../../components/cards/Cards';
import Card from '../../components/card/Card';

import IconCode from '../../components/ui/icons/Code';
import IconDiscord from '../../components/ui/icons/Discord';
import IconAnimation from '../../components/ui/icons/Animation';


function MainPage() {
    return ( 
        <main className={styles.main}>
            <Container>
                <h1>Parisien builds fast and usability web-apps...</h1>
                <h2>I'm a front-end developer based in Saint-P., Russia.</h2>
                <Cards p="What I do:" url="/">
                    <Card title='Frontend Development' paragraph='JS, TS, React, Redux, MobX'>
                        <IconCode/>
                    </Card>
                    <Card title='Animations' paragraph='Adding animation to the application via GSAP'>
                        <IconAnimation/>
                    </Card>
                    <Card title='Discord development' paragraph='Development of simple discord bots by discord.js'>
                        <IconDiscord/>
                    </Card>
                </Cards>
                <section>
                    <p>About Danya</p>
                    <BigText>Danya is a front-end developer based in Saint-P., Russia. </BigText>
                    <ArrowLink url='/'>More about Danya</ArrowLink>
                </section>
            </Container>
        </main>
    );
}

export default MainPage;