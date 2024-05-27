import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// gsap.registerPlugin(ScrollTrigger)

// Получаем все элементы с классом "background__circle"
const circles = document.querySelectorAll('.background__circle');

// Создаем функцию для анимации каждого шара
function animateCircle(circle) {
  // Создаем timeline для анимации
  const tl = gsap.timeline({ repeat: -1, yoyo: true });

  // Добавляем анимацию для каждого шара
  tl.to(circle, {
    duration: 3,
    y: '+=3rem',
    ease: 'sine.inOut',
    delay: Math.random() * 1
  });
}

// Применяем анимацию к каждому шару
circles.forEach(circle => {
  animateCircle(circle);
});