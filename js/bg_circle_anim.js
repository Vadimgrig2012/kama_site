import { gsap } from "gsap";

// Получаем все элементы с классом "background__circle"
const circles = document.querySelectorAll('.background__circle');
const transp_circle = document.querySelector('.header__bg-circle-transparent')
const mm = gsap.matchMedia();

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





mm.add("(min-width: 1025px)", () => {
  circles.forEach(circle => {
    circle.addEventListener('mousemove', () => {
      gsap.to(circle, {
        scale: 0.8,
        duration: 0.2,
        ease: 'sine.Out',
      });
    });

    circle.addEventListener('mouseleave', () => {
      gsap.to(circle, {
        scale: 1,
        duration: 0.2,
        ease: 'sine.Out',
      });
    });
  });
})


const tl = gsap.timeline({ repeat: -1, yoyo: true });

tl.to(transp_circle, {
    y: "5rem",
    duration: 6,
    ease: 'sine.inOut',
})