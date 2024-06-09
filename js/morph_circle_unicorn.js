import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const matchMedia = window.matchMedia("(max-width: 1024px)");

const tlRightCard = gsap.timeline({
    scrollTrigger: {
        trigger: '.about__block-left',
        start: matchMedia.matches ? 'top 50%' : '30% 50%',
        end: '70% 50%',
        // markers: true,
        onEnter: () => bubbleAnim.restart()
    }
});


const svg = document.querySelector('.about__unicorn-circle');
const tlElement = gsap.timeline({ paused: true });
const pathCircle = document.getElementById('circle');
const pathUnicorn = "M42.9853 2.50153C39.9853 1.00151 35.4853 -0.498473 34.4853 0.501527C33.4853 1.50153 35.9853 6.50153 35.9853 6.50153C35.9853 6.50153 58.4854 33.5015 60.4853 39.0015C62.4852 44.5015 60.9854 42.0015 61.9853 46.0015C62.9852 50.0016 81.4854 67.0015 81.9853 72.0015C82.4852 77.001 82.4854 77.0015 84.4846 81.5001L84.4853 81.5015C86.4852 86.0016 106.485 104.001 105.985 108.002C105.485 112.002 104.485 110.501 105.985 116.502C107.485 122.502 122.485 143.502 122.485 143.502C84.0766 144.217 65.7465 140.528 38.9853 126.002C58.6047 143.726 70.4821 152.195 93.9853 163.502C77.0215 164.525 66.6081 161.97 47.4853 155.502C70.0071 169.489 82.768 176.166 105.985 184.002C105.985 184.002 103.485 188.001 101.485 201.001C99.4854 214.001 103.985 223.501 95.4853 237.502C86.9852 251.502 74.4854 264.501 66.4853 272.502C58.4852 280.502 33.9854 298.001 25.4853 308.002C16.9852 318.002 2.48528 341.501 0.985281 352.002C-0.514719 362.502 -0.514719 371.501 2.48528 383.502C5.48528 395.502 39.9853 435.502 39.9853 435.502C42.9853 440.001 58.1121 440.618 70.4853 435.502C82.8585 430.385 123.985 413.502 137.985 408.502C151.985 403.501 169.485 405.002 193.985 397.002C218.485 389.001 227.485 378.502 227.485 378.502C227.485 378.502 228.985 392.001 227.485 411.502C225.985 431.002 214.485 470.001 209.985 487.002C205.485 504.002 190.485 570.502 190.485 570.502C185.536 591.475 185.276 603.863 186.985 626.502C190.329 653.886 195.237 664.662 212.485 671.002C212.485 671.002 241.485 680.002 271.485 677.002C301.485 674.001 308.485 671.502 336.485 661.502C364.485 651.501 394.985 638.002 418.485 616.002C441.985 594.001 447.985 584.002 457.485 569.002C466.985 554.001 470.56 542.935 474.485 523.502C474.485 523.502 482.485 517.002 492.485 504.002C502.485 491.001 505.985 481.002 509.985 465.002C513.985 449.001 511.485 442.502 510.985 429.002C510.485 415.501 507.446 410.425 500.985 398.502C500.985 398.502 505.985 388.502 507.985 377.502C509.985 366.501 509.485 358.002 508.985 343.002C508.485 328.001 501.707 314.734 489.985 298.502C489.985 298.502 491.485 281.502 489.985 269.002C488.485 256.501 483.183 246.592 472.985 232.001C461.985 217.501 456.189 210.364 436.485 202.002C435.882 181.523 432.992 168.676 425.485 144.502C417.985 121.001 396.985 98.0015 376.985 95.0015C356.985 92.0016 358.985 92.5015 348.985 93.5015C338.985 94.5016 327.985 98.5015 327.985 98.5015C327.985 98.5015 326.985 67.0015 325.985 63.5015C324.985 60.0016 322.485 56.5015 313.985 56.5015C305.485 56.5016 295.485 60.5015 288.985 63.5015C282.485 66.5016 263.485 78.5015 263.485 78.5015C256.361 73.1114 250.736 69.9778 227.485 63.5015C220.485 61.5517 199.034 62.2314 191.485 65.0015C181.809 68.5527 163.84 80.3665 157.485 91.5015C157.485 91.5015 150.485 84.5015 146.985 83.0015C143.485 81.5016 141.485 84.0015 138.485 83.0015C135.485 82.0016 117.485 62.0015 114.485 59.5015C111.485 57.0016 110.485 57.0015 104.485 55.0015C98.4853 53.0016 79.9853 33.5015 79.9853 33.5015C79.9853 33.5015 77.9853 31.5015 73.9853 31.0015C69.9853 30.5016 45.9853 4.00155 42.9853 2.50153Z";
const animateBtn = document.getElementById('about__btn-2');
const arrAllRectangle = gsap.utils.toArray(['#Rect1', '#Rect2', '#Rect3', '#Rect4', '#Rect5', '#Rect6', '#Rect7', '#Rect8', '#Rect9']);
const arrLeftRectangle = gsap.utils.toArray(['#Rect3', '#Rect5', '#Rect6', '#Rect7', '#Rect8']);
const arrRightRectangle = gsap.utils.toArray(['#Rect1', '#Rect2', '#Rect4', '#Rect9']);



let bubbleAnim = gsap.from('#about__bubl-bg--left', {
    y: "5rem",
    ease: 'sine.inOut',
    duration: 3,
    stagger: 0.5,
    repeat: -1,
    yoyo: true
})



animateBtn.addEventListener('click', () => {
    tlElement.seek(0);
    tlElement.play();
    gsap.to(animateBtn, {
        y: "1rem",
        duration: 0.05,
        repeat: 1,
        yoyo: true
    })
});


tlElement.to(arrLeftRectangle, {
    x: '-30rem',
    opacity: 0,
    scale: 0,
    rotate: 90,
    duration: 0.3,
    ease: 'sine.inOut',
    yoyo: true,
    repeat: 1,
    repeatDelay: 6.3,
    stagger: 0.05
}, 0)
.to(arrRightRectangle, {
    x: '30rem',
    opacity: 0,
    scale: 0,
    rotate: 90,
    duration: 0.3,
    ease: 'sine.inOut',
    yoyo: true,
    repeat: 1,
    repeatDelay: 6.3,
    stagger: 0.05
}, 0)
.from('.about__unicorn-circle', {
    y: '-30rem',
    // scale: 0.5,
    ease: 'sine.inOut',
    opacity: 0,
    yoyo: true,
    repeat: 1,
    repeatDelay: 5.5
}, 0.3)
.to(pathCircle, { 
    duration: 2, 
    attr: { d: pathUnicorn }, 
    ease: 'sine.inOut',
    repeat: 1, 
    yoyo: true,
    repeatDelay: 1
}, 1);





tlRightCard.from('.about__card-left', {
    transformOrigin: 'left',
    scaleX: 0,
    duration: 0.4,
    ease: 'power4.inOut'
})
.from('#about__bubl-bg--left', {
    opacity: 0,
    x: "5rem",
    y: "5rem",
    stagger: 0.1,
    ease: "elastic.out(1,0.3)",
    duration: 1
}, 0.5)
.from('#about__subtitle--left', {
    opacity: 0,
    y: '3rem',
    ease: "elastic.out(1,0.3)",
    duration: 1
}, 0.5)
.from('#about__text--left', {
    opacity: 0,
    y: '3rem',
    ease: "elastic.out(1,0.3)",
    duration: 1
}, 0.6)
.from('#about__btn-2', {
    opacity: 0,
    y: '3rem',
    ease: "elastic.out(1,0.3)",
    duration: 1
}, 0.7)
.from(arrAllRectangle, {
    opacity: 0,
    y: '-10rem',
    rotate: 45,
    ease: "elastic.out(1,0.3)",
    stagger: 0.1,
    duration: 1
}, 0.4)



function resizeUnicorn() {
	if (window.innerWidth <= 1024) {
		svg.setAttribute('viewBox', `0 0 510 677`);
	} else {
		svg.setAttribute('viewBox', `0 0 377 677`);
	}
}

window.addEventListener('load', resizeUnicorn);
window.addEventListener('resize', resizeUnicorn);