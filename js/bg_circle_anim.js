import { gsap } from "gsap";

// Получаем все элементы с классом "background__circle"
const circles = document.querySelectorAll('.background__circle');
const transp_circle = document.querySelector('.header__bg-circle-transparent')

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


const tl = gsap.timeline({ repeat: -1, yoyo: true });

tl.to(transp_circle, {
    y: "5rem",
    duration: 6,
    ease: 'sine.inOut',
})