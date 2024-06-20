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

const h1Arr = gsap.utils.toArray('#h1Anim')
const tl = gsap.timeline({
    onComplete: () => {
        gsap.delayedCall(1, () => {
            shapesAnimation();
            mainBtnAnimation();
            bgCircleAnimation();
            h1Animation();
            ballCompositionAnimation();
        })
    }
});



tl.from('.header__background-img', {
    transformOrigin: 'left',
    scaleX:0,
})
.from('.menu', {
    y: '-50rem',
    opacity: 0
})
.from(h1Arr, {
    scale: 0,
    opacity: 0,
    stagger: 0.2,
})
.from('.interactive-block__btn', {
    y: '20rem',
    scale: 0,
    opacity: 0,
    duration: 0.5,
    ease: 'back.inOut(1.7)'
})
