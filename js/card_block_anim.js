// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// // Регистрируем плагины
// gsap.registerPlugin(ScrollTrigger);

// const tl = gsap.timeline({
//     scrollTrigger: {
//       trigger: '.block', // Триггер для анимации - контейнер с блоками
//       start: 'top 50%', // Начало анимации, когда верх контейнера достигает середины viewport
//       end: 'bottom 50%', // Конец анимации, когда низ контейнера достигает середины viewport
//       scrub: true, // Анимация будет "подвешена" на скролле
//       pin: true, // Контейнер будет "прикреплен" к viewport, пока идет анимация
//       markers: true,
//     //   onUpdate: self => { // Колбэк, вызываемый при обновлении анимации
//     //     if (self.progress >= 0.5) { // Если анимация прошла больше половины
//     //       document.body.style.overflow = 'hidden'; // Запрещаем скролл страницы
//     //     } else {
//     //       document.body.style.overflow = 'auto'; // Разрешаем скролл страницы
//     //     }
//     //   }
//     }
//   });
  
//   // Добавляем анимацию в таймлайн
//   tl.from('.card1', { // Анимация карточки 1
//     duration: 1,
//     // x: '-100%',
//     scaleX: 0,
//     ease: 'power2.inOut'
//   })
//   .to('.card1', { // Анимация карточки 1
//     duration: 1,
//     // x: '100%',
//     scaleX: 1,
//     ease: 'power2.inOut'
//   }, '<')
  
//   .from('.card2', { // Анимация карточки 2
//     duration: 1,
//     // x: '100%',
//     scaleX: 1,
//     ease: 'power2.inOut'
//   })
//   .to('.card2', { // Анимация карточки 2
//     duration: 1,
//     // x: '-100%',
//     scaleX: 0,
//     ease: 'power2.inOut'
//   }, '<');