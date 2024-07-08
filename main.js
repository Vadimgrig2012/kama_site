import { shapesAnimation } from './js/main_shapes_anim'
import * as svgLogoResize from './js/svg_logo_resize'
import { mainBtnAnimation } from './js/main_btn_anim'
import { bgCircleAnimation } from './js/bg_circle_anim'
import { h1Animation } from './js/h1_anim'
import { ballCompositionAnimation } from './js/ball_composition_anim'
import * as rightCardAnim from './js/right_card_anim'
import * as h2Anim from './js/h2_anim'
import * as leftCardAnim from './js/left_card_anim'
import * as galeryAnim from './js/galery_anim'
import * as tooltip3dAnim from './js/tooltip_3d_anim'
import * as cursorAnim from './js/cursor_anim'
import * as modalAnim from './js/modal_anim'
import * as navAnim from './js/nav_anim'



import { gsap } from "gsap";

const matchMedia = window.matchMedia("(max-width: 1024px)");
const matchMediaPhone = window.matchMedia("(max-width: 767px)");
const shapesArr = gsap.utils.toArray('.interactive-block__shapes svg');
const headerCircleArr = gsap.utils.toArray('.header__bg-circle');
const bgCircleArr = gsap.utils.toArray('.background__circle');
const tl = gsap.timeline({
    delay: 4.2,
    onComplete: () => {
        gsap.delayedCall(0.1, shapesAnimation);
        gsap.delayedCall(0.2, mainBtnAnimation);
        gsap.delayedCall(0.3, bgCircleAnimation);
        gsap.delayedCall(0.4, h1Animation);
        gsap.delayedCall(0.5, ballCompositionAnimation);
        document.body.style.removeProperty('overflow');
        if (!matchMedia.matches) {
            document.body.style.removeProperty('padding-right');
        }
    }
});



document.body.style.overflow = 'hidden';
if(!matchMedia.matches) {
    document.body.style.paddingRight = '15px';
};

function refreshPage() {
    window.scrollTo(0, 0);
};
window.addEventListener("beforeunload", refreshPage);



tl.from('.header__background-img', {
    transformOrigin: !matchMedia.matches ? 'left' : 'top',
    scaleY: matchMedia.matches ? 0 : 1,
    scaleX: !matchMedia.matches ? 0 : 1,
    ease: "back.out(2)",
    duration: 0.4
}, 0)
.from(!matchMedia.matches ? '.background__img-wrapper' : '.background__img-wrapper-adaptive', {
    ease: "power1.out",
    duration: 0.4,
    opacity: 0
}, 0)
.from(!matchMedia.matches ? '.menu' : '.logo', {
    y: !matchMediaPhone.matches ? '-50rem' : '-10rem',
    opacity: 0,
    ease: "back.out(2)",
    duration: 0.4
}, 0.6)
.from('.header__title', {
    scale: 0,
    ease: "back.out(2)",
    duration: 0.4
}, 0.6)
.from(shapesArr, {
    y: '20rem',
    scale: 0,
    opacity: 0,
    ease: "back.out(2)",
    duration: 0.4,
    stagger: 0.2
}, 0.6)
.from('.interactive-block__btn', {
    y: !matchMediaPhone ? '20rem' : '10rem',
    scale: 0,
    opacity: 0,
    ease: "back.out(2)",
    duration: 0.4
}, 0.6)
.from(headerCircleArr, {
    y: '20rem',
    scale: 0,
    opacity: 0,
    ease: "back.out(2)",
    duration: 0.4,
    stagger: 0.2
}, 0.6)
.from(bgCircleArr, {
    y: '10rem',
    scale: 0,
    opacity: 0,
    ease: "back.out(2)",
    duration: 0.1,
    stagger: 0.05
}, 0.6)
.from('.background__ball-composition', {
    scale: 0,
    opacity: 0,
    ease: "back.out(2)",
    duration: 0.2,
}, 0.8)



function animationPreloader() {
    document.querySelector('.main-wrapper__start-bg').style.display = 'none';
    const tl = gsap.timeline();
    const dots = gsap.utils.toArray('.preloader__title span');
    const leftCircle = document.querySelector('.preloader__anim-oval-l');
    const rightCircle = document.querySelector('.preloader__anim-oval-r');


    tl.to('.preloader', {
        display: 'block'
    }, 0)
    tl.from('.preloader__title', {
        y: '-20rem',
        opacity: 0,
        ease: "back.out(2)",
        duration: 0.2,
    }, .5)
    .from('.preloader__anim', {
        y: '20rem',
        opacity: 0,
        ease: "back.out(2)",
        duration: 0.2,
    }, .5)
    .to(dots, {
        opacity: 1,
        stagger: 0.2,
        repeat: 3
    }, .6)
    .to(leftCircle, {
        y: '-50%',
        duration: 0.4
    }, 1)
    .to(rightCircle, {
        y: '50%',
        duration: 0.4
    }, 1)
    .to(leftCircle, {
        x: '100%',
        duration: 0.4,
        rotateZ: 180,
        transformOrigin: "50% 50%",
    }, 1.5)
    .to(rightCircle, {
        x: '-100%',
        duration: 0.4,
        rotateZ: 180,
        transformOrigin: "50% 50%",
    }, 1.5)
    .to(leftCircle, {
        y: 0,
        duration: 0.4
    }, 2)
    .to(rightCircle, {
        y: 0,
        duration: 0.4
    }, 2)
    .to(leftCircle, {
        x: '150%',
        duration: 0.4,
    }, 2.5)
    .to(rightCircle, {
        x: '-150%',
        duration: 0.4,
    }, 2.5)
    .to(leftCircle, {
        x: '250%',
        duration: 0.4,
        opacity: 0
    }, 3)
    .to(rightCircle, {
        x: '-250%',
        duration: 0.4,
        opacity: 0
    }, 3)
    tl.to('.preloader__title', {
        y: '-20rem',
        opacity: 0,
        ease: "back.out(2)",
        duration: 0.4,
    }, 3)
    tl.to('.preloader__bg', {
        scale: 0,
        duration: 0.4,
    }, 3.5)
    .to('.preloader', {
        display: 'none'
    }, 4.1)
}
animationPreloader();
// Тест