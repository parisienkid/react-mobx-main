import { SwitchTransition, Transition } from 'react-transition-group';
import { useLocation } from 'react-router-dom';

import gsap from 'gsap';

function TransitionComponent({children}) {
    const location = useLocation();


    return (
        <SwitchTransition>
            <Transition
                key={location.pathname}
                timeout={800}
                onExit={(node) => {
                    gsap
                    .timeline({paused: true})
                    .to(document.querySelector('#overlay'), {top: 0, duration: .8})
                    .set(document.querySelector('#overlay'), {top: '-100%', delay: 0.25})
                    .play()
                }}
            >
                {children}
            </Transition>
        </SwitchTransition>
    );
}

export default TransitionComponent;