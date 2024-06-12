import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger)

const tooltip = document.querySelector('.kuromi__tooltip');
const scene = document.querySelector('.kuromi__scene');
const tl = gsap.timeline({
    repeat: 1,
    yoyo: true,
    scrollTrigger: {
        trigger: scene,
        start: '30% center',
        // markers:true
    }
});

tl.to(tooltip, {
    display: 'block',
    opacity: 0.7,
},0)
.to(tooltip, {
    x: '150%',
    duration: 1.5,
},0.3)