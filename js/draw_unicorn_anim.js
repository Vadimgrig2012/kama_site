// import { gsap } from "gsap";

// const svgPath = document.getElementById('Unicorn');
// const animateBtn = document.getElementById('animate-btn'); 

// let tl = gsap.timeline({ paused: true });

// tl.to(svgPath, { duration: 2, strokeDashoffset: 0, ease: 'power2.inOut' });

// animateBtn.addEventListener('click', () => {
//     tl.restart();
// });

// Нужно добавить в конце path свойства stroke-dasharray="1000" stroke-dashoffset="1000"






import { gsap } from "gsap";

const svg = document.querySelector('.header__bg-heart');
const path = svg.querySelector('.heart-path');
const animation = gsap.timeline({repeat: -1, yoyo: true});

animation.to(path, {
    strokeDashoffset: 0,
    duration: 3,
});

animation.to(path, {
    strokeDashoffset: -1600,
    duration: 3,
});