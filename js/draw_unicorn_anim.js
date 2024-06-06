import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);



const tlRightCard = gsap.timeline({
    scrollTrigger: {
        trigger: '.about__block-right',
        start: '30% 50%',
        end: '70% 50%',
        markers: true,
        onEnter: () => bubbleAnim.restart()
    }
});
const tlElement = gsap.timeline({ paused: true });
const svgPath = document.getElementById('unicorn-path');
const animateBtn = document.getElementById('about__btn-1');
const triangelTop = gsap.utils.toArray(['#Tr1', '#Tr3', '#Tr5', '#Tr7']);
const triangelBottom = gsap.utils.toArray(['#Tr2', '#Tr4', '#Tr6']);




let bubbleAnim = gsap.from('#about__bubl-bg--right', {
    y: "5rem",
    ease: 'sine.inOut',
    duration: 3,
    stagger: 0.5,
    repeat: -1,
    yoyo: true
})





animateBtn.addEventListener('click', () => {
    tlElement.seek(0);
    tlElement.play();
});

tlElement.to(svgPath, { 
duration: 3, 
strokeDashoffset: 0, 
ease: "power2.inOut",
repeat: 1, 
yoyo: true,
repeatDelay: 0.5,
}, 0)
.to(triangelTop, { 
    x: "20rem",
    opacity: 0,
    duration: 0.5,
    scale: 0,
    ease: 'sine.inOut',
    yoyo: true,
    repeat: 1,
    repeatDelay: 5
}, 0)
.to(triangelBottom, { 
    x: "-20rem",
    opacity: 0,
    duration: 0.5,
    scale: 0,
    ease: 'sine.inOut',
    yoyo: true,
    repeat: 1,
    repeatDelay: 5,
}, 0);




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