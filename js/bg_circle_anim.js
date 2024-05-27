document.addEventListener("DOMContentLoaded", (event) => {
    const circles = gsap.utils.toArray('.background__circle');

    circles.forEach(circle => {
        const tl = gsap.timeline({
            repeat: -1,
            yoyo: true,
            ease: 'power4.inOut',
            delay: Math.random() * 4
        });

        tl.to(circle, {
            duration: 2.5,
            y: "1rem",
            delay: 0.3,
            onComplete: () => {
            circle.style.willChange = 'transform';
            },
            onReverseComplete: () => {
                gsap.to(circle, {
                    duration: 0.1,
                    y: 0, // Возвращаем элемент в исходное положение
                    ease: 'power2.inOut' // Используем другую функцию плавности
                });
            },
        });

        tl.to('.background__img-wrapper-adaptive', {
            y: "1rem",
        });
    });


})
