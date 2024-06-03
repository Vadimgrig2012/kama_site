import { gsap } from "gsap/gsap-core";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const tl_right_card = gsap.timeline({
    scrollTrigger: {
        trigger: '.about__card-right',
        start: 'top 50% ',
        end: 'bottom 50%',
        toggleActions: "play reverse reverse reverse",
        markers: true,
        onEnterBack: () => {
            tl_right_card.restart();
        }
    }
});

const triangelTop = gsap.utils.toArray(['#Tr1', '#Tr3', '#Tr5', '#Tr7'])
const triangelBpttom = gsap.utils.toArray(['#Tr2', '#Tr4', '#Tr6'])


tl_right_card.from('.about__card-right', {
    transformOrigin: 'right',
    scaleX: 0,
    duration: 0.5,
    ease: 'power4.inOut'
})
.from('.about__bubl-bg', {
    opacity: 0,
    x: "5rem",
    y: "5rem",
    stagger: 0.1,
    ease: "elastic.out(1,0.3)",
    duration: 1
}, 0.6)
.from('.about__subtitle', {
    opacity: 0,
    y: '3rem',
    ease: "elastic.out(1,0.3)",
    duration: 1
}, 0.6)
.from('.about__text', {
    opacity: 0,
    y: '3rem',
    ease: "elastic.out(1,0.3)",
    duration: 1
}, 0.7)
.from('#about__btn-1', {
    opacity: 0,
    y: '3rem',
    ease: "elastic.out(1,0.3)",
    duration: 1
}, 0.8)
.from(triangelTop, {
    opacity: 0,
    y: '-10rem',
    ease: "elastic.out(1,0.3)",
    stagger: 0.1,
    duration: 1
}, 0.5)
.from(triangelBpttom, {
    opacity: 0,
    y: '10rem',
    ease: "elastic.out(1,0.3)",
    stagger: 0.1,
    duration: 1
}, 0.5)