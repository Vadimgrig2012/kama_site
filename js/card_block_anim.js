// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// // Регистрируем плагины
// gsap.registerPlugin(ScrollTrigger);


// // let lastIndex = 
// let currentIndex = -1;
// let animating;
// let cards = gsap.utils.toArray(".card");

// let intentObserver = ScrollTrigger.observe({
//     target: '.block-main',
//     type: "wheel,touch",
//     onUp: () => !animating && gotoCard(currentIndex + 1, true),
//     onDown: () => !animating && gotoCard(currentIndex - 1, false),
//     wheelSpeed: -1,
//     tolerance: 10,
//     preventDefault: true,
//     onPress: self => {
//       // on touch devices like iOS, if we want to prevent scrolling, we must call preventDefault() on the touchstart (Observer doesn't do that because that would also prevent side-scrolling which is undesirable in most cases)
//       ScrollTrigger.isTouch && self.event.preventDefault()
//     }
// })

// intentObserver.disable();


// function gotoCard(index, isScrollingDown) {
//     animating = true;
//     // return to normal scroll if we're at the end or back up to the start
//     if ((index === cards.length && isScrollingDown) || (index === -1 && !isScrollingDown)) {
  
//           let target = index;
//           gsap.to(target, {
//           scaleX: isScrollingDown ? 0 : 1,
//           duration: 0.00,
//           onComplete: () => {
//             animating = false;
//             isScrollingDown && intentObserver.disable();
//           }
//       });
//       return
//     }
  
//   //   target the second panel, last panel?
//     let target = isScrollingDown ? cards[index]: cards[currentIndex];
  
//     gsap.to(target, {
//       scaleX: isScrollingDown ? 1 : 0,
//       duration: 0.75,
//       onComplete: () => {
//         animating = false;
//       }
//     });
//     currentIndex = index;
//     console.log(index);
  
//   }
  
//   // pin swipe section and initiate observer
//   ScrollTrigger.create({
//     trigger: ".card",
//     pin: true,
//     start: "top top",
//     end: "+=1",
//     onEnter: (self) => {
//       intentObserver.enable();
//       gotoCard(currentIndex + 1, true);    
//     },
//     onEnterBack: (self) => {
//       intentObserver.enable();
//       gotoCard(currentIndex - 1, false);
//     }
//   })







// Перемещение к блоку по скроллу


// gsap.to(window, {
//   duration: 1,
//   scrollTo: {
//     y: "#block2",
//     offsetY: "50%" // Перемещение в центр блока
//   }
// });
// }







import { gsap } from 'gsap';
import {ScrollToPlugin} from 'gsap/ScrollToPlugin'

gsap.registerPlugin(ScrollToPlugin)

// Определение первого блока
const cardLeftBlock = document.querySelector('.card-left');
// Определение второго блока
const cardRightBlock = document.querySelector('.card-right');

// Определение позиции первого блока
const cardLeftBlockPosition = cardLeftBlock.getBoundingClientRect().top + window.scrollY;
// Определение позиции второго блока
const cardRightBlockPosition = cardRightBlock.getBoundingClientRect().top + window.scrollY;

// Определение начальной позиции пользователя
let userPosition = 0;

// Обработчик события прокрутки страницы
window.addEventListener('scroll', function() {
  // Определение текущей позиции пользователя
  userPosition = window.scrollY;

  // Проверка, достигнут ли пользователь блоком 1
  if (userPosition >= cardLeftBlockPosition) {
    // Анимация перемещения пользователя в центр блока 1
    gsap.to(this.window, {
      duration: 1,
      scrollTo: {
        y: ".card-left",
        offsetY: "50%" // Перемещение в центр блока
      }
    });
  }

  // Проверка, достигнут ли пользователь блоком 2
  if (userPosition >= cardRightBlockPosition) {
    // Анимация перемещения пользователя в центр блока 2
    gsap.to(window, {
      duration: 1,
      scrollTo: {
        y: ".card-right",
        offsetY: "50%" // Перемещение в центр блока
      }
    });
  }
});

// Обработчик события прокрутки вверх
window.addEventListener('wheel', function(event) {
  // Определение направления прокрутки
  const direction = event.deltaY > 0 ? 'down' : 'up';

  // Проверка, находится ли пользователь в блоке 1
  if (userPosition >= cardLeftBlockPosition && userPosition < cardRightBlockPosition) {
    // Проверка, прокручивается ли пользователь вниз
    if (direction === 'down') {
      // Анимация перемещения пользователя в центр блока 2
      gsap.to(window, {
        duration: 1,
        scrollTo: {
          y: ".card-right",
          offsetY: "50%" // Перемещение в центр блока
        }
      });
    } else {
      // Анимация перемещения пользователя к заголовку перед блоком 1
      gsap.to(window, {
        duration: 1,
        scrollTo: {
          y: ".kuromi",
          offsetY: "50%" // Перемещение к заголовку
        }
      });
    }
  }

  // Проверка, находится ли пользователь в блоке 2
  if (userPosition >= cardRightBlockPosition) {
    // Проверка, прокручивается ли пользователь вниз
    if (direction === 'down') {
      // Анимация перемещения пользователя в центр блока 3
      gsap.to(window, {
        duration: 1,
        scrollTo: {
          y: ".block2",
          offsetY: "50%" // Перемещение в центр блока
        }
      });
    } else {
      // Анимация перемещения пользователя к заголовку перед блоком 3
      gsap.to(window, {
        duration: 1,
        scrollTo: {
          y: ".card-left",
          offsetY: "50%" // Перемещение к заголовку
        }
      });
    }
  }
});