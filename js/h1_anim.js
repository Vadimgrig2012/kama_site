import { gsap } from "gsap";

const tl = gsap.timeline({ repeat: -1, repeatDelay: 3.5 });
const tl2 = gsap.timeline({ repeat: -1, repeatDelay: 2.7 });

tl.to('.h1_anim_c', {
    rotateZ: 1080,
    duration: 3,
    ease: 'elastic.inOut',
})


tl2.to('.h1_anim_l', {
    y: "-6rem",
    ease: "elastic.out(1,0.3)",
    duration: 0.4,
    stagger: 0.3
})
.to('.cat-svg', {
    scale: 1,
    opacity: 1,
    duration: 0.5,
    ease: 'power4.out',
})
.to('.h1_anim_l', {
    rotateZ: 1080,
    duration: 4,
    // ease: 'sine.inOut',
    ease: 'elastic.inOut',
})
.to('.cat-svg', {
    scale: 0,
    opacity: 0,
    duration: 0.5,
    ease: 'power4.out',
})
.to('.h1_anim_l', {
    y: "0rem",
    ease: "elastic.out(1,0.3)",
    duration: 0.4,
    stagger: 0.3
})