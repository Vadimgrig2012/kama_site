





// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { ScrollToPlugin } from "gsap/ScrollToPlugin";

// // Регистрируем плагины
// gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

// const blocks = document.querySelectorAll(".about__block");


// const scrolling = {
//   enabled: true,
//   events: "scroll,wheel,touchmove,pointermove".split(","),
//   prevent: e => e.preventDefault(),
//   disable() {
//     if (scrolling.enabled) {
//       scrolling.enabled = false;
//       window.addEventListener("scroll", gsap.ticker.tick, {passive: true});
//       scrolling.events.forEach((e, i) => (i ? document : window).addEventListener(e, scrolling.prevent, {passive: false}));
//     }
//   },
//   enable() {
//     if (!scrolling.enabled) {
//       scrolling.enabled = true;
//       window.removeEventListener("scroll", gsap.ticker.tick);
//       scrolling.events.forEach((e, i) => (i ? document : window).removeEventListener(e, scrolling.prevent));
//     }
//   }
// };



// let isAnimationInProgress = false;


// function goToBlock(block, i) {
//   if (scrolling.enabled) { // сбросс, если скролл в процессе
//     isAnimationInProgress = true;
//     scrolling.disable();
//     gsap.to(window, {
//       scrollTo: {y: block ,autoKill: false},
//       duration: 1,
//     });

//     gsap.from(block.querySelector('.about__card '),{
//       scaleX: 0,
//       duration: 1,
//       delay: 1,
//       transformOrigin: i === 0 ? 'right': 'left',
//       // onComplete: scrolling.enable,
//       onComplete: () => {
//         isAnimationInProgress = false;
//         scrolling.enable();
//       }
//     })
//     // На случай, если будем передавать анимацию из blocks.forEach
//     // anim && anim.restart();
//   }
// }





// blocks.forEach((block, i) => {

//   ScrollTrigger.create({
//     trigger: block,
//     start: "top bottom-=1",
//     end: "bottom top+=1",
//     markers: true,
//     onEnter: () => goToBlock(block, i),
//     onEnterBack: () => goToBlock(block, i),
//   });

// });





// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// // Регистрируем плагины
// gsap.registerPlugin(ScrollTrigger);

// ScrollTrigger.create({
//     trigger: ".background__vector-svg",
//     animation: drawLine(ScrollTrigger),
//     start: "top top",
//     end: "100% 100%",
//     scrub: 4,
//     markers: true
// });


// function drawLine (self) {
//     window.addEventListener('scroll', function() {
//         let l = Path_440.getTotalLength();
//         let dasharray = l;
//         let dashoffset = l;
//         let e = document.documentElement;
//         theFill.setAttributeNS(null, "stroke-dasharray", l);
//         theFill.setAttributeNS(null, "stroke-dashoffset", l);
//         dashoffset = l - window.scrollY * l / (e.scrollHeight - e.clientHeight);
//       //   console.log('window.scrollY', window.scrollY, 'scrollTop', e.scrollTop, 'scrollHeight', e.scrollHeight, 'clientHeight', e.clientHeight, 'dash-offset', dashoffset);
//         theFill.setAttributeNS(null, "stroke-dashoffset", dashoffset);
//     })
// }




import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Регистрируем плагины
gsap.registerPlugin(ScrollTrigger);

function drawLine() {
    const path = document.querySelector("#Path_440");
    const theFill = document.querySelector("#theFill");
    const pathLength = path.getTotalLength();

    gsap.set(theFill, {
        strokeDasharray: pathLength,
        strokeDashoffset: pathLength
    });

    ScrollTrigger.create({
        trigger: ".background__vector-svg",
        animation: gsap.to(theFill, {
            strokeDashoffset: 0,
            ease: 'none'
        }),
        start: "top 50%",
        end: "100% 50%",
        scrub: 1,
        markers: true
    });
}

drawLine();