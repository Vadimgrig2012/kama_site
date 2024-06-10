import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const gallery = document.querySelector('.galery__photos');


function getToScrollAmount() {
    let galleryWidth = gallery.scrollWidth  + window.innerWidth;
    return -(galleryWidth - window.innerWidth)
}

const tween = gsap.to(gallery, {
    x: getToScrollAmount,
    duration: 3,
    ease: 'none',
})

ScrollTrigger.create({
    trigger: '.galery__container',
    start: 'top 10%',
    end: () => `+=${getToScrollAmount() * -1}`,
    pin: true,
    pinSpacing: true,
    animation: tween,
    scrub: 1,
    invalidateOnRefresh: true,
    markers: true,
})