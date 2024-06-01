import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Регистрируем плагины
gsap.registerPlugin(ScrollTrigger);

// Находим элемент заголовка
// const title = document.querySelector('.kuromi__title');

let tl = gsap.timeline({
  scrollTrigger: {
    trigger: '.title',
    start: "center 80%",
    // markers: true
  }
});

tl.to('.title', {
    '--scaleX': '1',
     duration: 0.5,
     ease: 'power2.out',
})
.from('.title__span', { 
    y: '-10rem',
    opacity: 0, 
    ease: 'bounce.out',
    delay: 0.1,
    stagger: 0.2
})