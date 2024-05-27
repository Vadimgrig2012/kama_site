import { gsap } from "gsap";

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
    })
});




//     gsap.registerPlugin(ScrollTrigger)
    
//     gsap.from('.background__circle', {
//         scrollTrigger: {
//             trigger: '.background__img-wrapper img',
//             markers: true,
//             start: 'top bottom',
//             scrub: true
//         },
//         duration: 2,
//         stagger: 0.1,
//         y: "20rem"
//     })

