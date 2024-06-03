import { gsap } from "gsap";

const svgPath = document.getElementById('unicorn-path');
const animateBtn = document.getElementById('about__btn-1'); 

let animation = null;

animateBtn.addEventListener('click', () => {
    if (animation) {
        animation.restart();
    } else {
        animation = gsap.to(svgPath, { 
            duration: 3, 
            strokeDashoffset: 0, 
            ease: "power2.inOut",
            repeat: 1, 
            yoyo: true,
            delay: 0.2,
            repeatDelay: 0.5
        });
    }
});