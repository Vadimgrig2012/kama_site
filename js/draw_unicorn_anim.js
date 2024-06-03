import { gsap } from "gsap";

const svgPath = document.querySelector('.unicorn-path');
const animateBtn = document.getElementById('about__btn-1'); 

let tl = gsap.timeline({ paused: true });

tl.to(svgPath, { duration: 3, strokeDashoffset: 0, ease: 'power2.inOut' });
tl.to(svgPath, { duration: 3, strokeDashoffset: 1700, ease: 'power2.inOut' });

animateBtn.addEventListener('click', () => {
    tl.restart();
});
