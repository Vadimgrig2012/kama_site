import { gsap } from "gsap/gsap-core";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);


// Анимация about__block-right

const tlAnimBgElRight = gsap.timeline({
    repeat: -1,
    yoyo: true,
})

const tlRightCard = gsap.timeline({
    scrollTrigger: {
        trigger: '.about__block-right',
        start: '30% 50%',
        end: '70% 50%',
        toggleActions: "play reverse reverse reverse",
        markers: true,
        onEnter: () => {
            tlAnimBgElRight.restart(true, false);
        },
        onEnterBack: () => {
            tlRightCard.restart();
            tlAnimBgElRight.restart(true, false);
        }
    }
});



const triangelTop = gsap.utils.toArray(['#Tr1', '#Tr3', '#Tr5', '#Tr7'])
const triangelBottom = gsap.utils.toArray(['#Tr2', '#Tr4', '#Tr6'])


tlAnimBgElRight.delay(1).from('#about__bubl-bg--right', {
    y: "-3rem",
    ease: 'sine.inOut',
    duration: 3,
    stagger: 0.5,
})



tlRightCard.from('.about__card-right', {
    transformOrigin: 'right',
    scaleX: 0,
    duration: 0.4,
    ease: 'power4.inOut'
})
.from('#about__bubl-bg--right', {
    opacity: 0,
    x: "5rem",
    y: "5rem",
    stagger: 0.1,
    ease: "elastic.out(1,0.3)",
    duration: 1
}, 0.5)
.from('#about__subtitle--right', {
    opacity: 0,
    y: '3rem',
    ease: "elastic.out(1,0.3)",
    duration: 1
}, 0.5)
.from('#about__text--right', {
    opacity: 0,
    y: '3rem',
    ease: "elastic.out(1,0.3)",
    duration: 1
}, 0.6)
.from('#about__btn-1', {
    opacity: 0,
    y: '3rem',
    ease: "elastic.out(1,0.3)",
    duration: 1
}, 0.7)
.from(triangelTop, {
    opacity: 0,
    y: '-10rem',
    ease: "elastic.out(1,0.3)",
    stagger: 0.1,
    duration: 1
}, 0.4)
.from(triangelBottom, {
    opacity: 0,
    y: '10rem',
    ease: "elastic.out(1,0.3)",
    stagger: 0.1,
    duration: 1
}, 0.4)
.from('.about__unicorn', {
    opacity: 0,
    scale: 0,
    ease: 'power4.inOut',
    duration: 0.5
}, 0.4)