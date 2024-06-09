import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Регистрируем плагины
gsap.registerPlugin(ScrollTrigger);

const gallery = document.querySelector('.galery__photos');
let galleryWidth = gallery.offsetWidth;
let ammountToScroll = galleryWidth - window.innerWidth;

console.log(ammountToScroll)

const tween = gsap.to(gallery, {
    x: -ammountToScroll,
    duration: 3,
    ease: 'none',
})

ScrollTrigger.create({
    trigger: '.galery__container',
    start: 'top 20%',
    end: "+=" + ammountToScroll,
    pin: true,
    animation: tween,
    scrub: 1,
    markers: true,
})