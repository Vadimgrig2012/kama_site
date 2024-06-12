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









// Анимация отрисовки линии


// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// // Регистрируем плагины
// gsap.registerPlugin(ScrollTrigger);


// const path = document.querySelector("#vector-svg-path");
// const theFill = document.querySelector("#theFill");
// const pathLength = path.getTotalLength();

// let mm = gsap.matchMedia();
// mm.add("(min-width: 1025px)", () => {
//     gsap.set(theFill, {
//         strokeDasharray: pathLength,
//         strokeDashoffset: pathLength
//     });

//     ScrollTrigger.create({
//         trigger: ".background__vector-svg",
//         animation: gsap.to(theFill, {
//             strokeDashoffset: 0,
//             ease: 'none',
//             delay: 0
//         }),
//         start: "top 50%",
//         end: "100% 50%",
//         scrub: 1,
//         // markers: true
//     });
// })