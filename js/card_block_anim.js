import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Регистрируем плагины
gsap.registerPlugin(ScrollTrigger);



let currentIndex = -1;
let animating;
let cards = gsap.utils.toArray(".card");

let intentObserver = ScrollTrigger.observe({
    // target: '.block-main',
    type: "wheel,touch",
    onUp: () => !animating && gotoCard(currentIndex + 1, true),
    onDown: () => !animating && gotoCard(currentIndex - 1, false),
    wheelSpeed: -1,
    tolerance: 10,
    preventDefault: true,
    onPress: self => {
      // on touch devices like iOS, if we want to prevent scrolling, we must call preventDefault() on the touchstart (Observer doesn't do that because that would also prevent side-scrolling which is undesirable in most cases)
      ScrollTrigger.isTouch && self.event.preventDefault()
    }
})

intentObserver.disable();


function gotoCard(index, isScrollingDown) {
    animating = true;
    // return to normal scroll if we're at the end or back up to the start
    if ((index === cards.length && isScrollingDown) || (index === -1 && !isScrollingDown)) {
  
          let target = index;
          gsap.to(target, {
          scaleX: isScrollingDown ? 0 : 1,
          duration: 0.00,
          onComplete: () => {
            animating = false;
            isScrollingDown && intentObserver.disable();
          }
      });
      return
    }
  
  //   target the second panel, last panel?
    let target = isScrollingDown ? cards[index]: cards[currentIndex];
  
    gsap.to(target, {
      scaleX: isScrollingDown ? 1 : 0,
      duration: 0.75,
      onComplete: () => {
        animating = false;
      }
    });
    currentIndex = index;
    console.log(index);
  
  }
  
  // pin swipe section and initiate observer
  ScrollTrigger.create({
    trigger: ".card",
    pin: true,
    start: "top top",
    end: "+=1",
    onEnter: (self) => {
      intentObserver.enable();
      gotoCard(currentIndex + 1, true);    
    },
    onEnterBack: () => {
      intentObserver.enable();
      gotoCard(currentIndex - 1, false);
    }
  })







// gsap.to(".card-left", {
//     scaleX: 1,
//     scrollTrigger: {
//       trigger: ".block1",
//       start: "top center",
//       end: "bottom center",
//       toggleActions: "play none none none",
//       onEnter: () => {
//         document.body.style.overflow = "hidden";
//       },
//       onLeave: () => {
//         document.body.style.overflow = "auto";
//       }
//     }
//   });
  
//   // Анимация для третьего блока
//   gsap.to(".card-right", {
//     scaleX: 1,
//     scrollTrigger: {
//       trigger: ".block2",
//       start: "top center",
//       end: "bottom center",
//       toggleActions: "play none none none",
//       onEnter: () => {
//         document.body.style.overflow = "hidden";
//       },
//       onLeave: () => {
//         document.body.style.overflow = "auto";
//       }
//     }
//   });




