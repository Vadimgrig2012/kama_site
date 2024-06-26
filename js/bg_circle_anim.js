import { gsap } from "gsap";

export function bgCircleAnimation() {
	// Получаем все элементы с классом "background__circle"
	const circles = document.querySelectorAll('.background__circle');
	const circlesAdaptive = document.querySelectorAll('.background__circle-orange, .background__circle-blue, .background__circle-cyan-light-small, .background__circle-purple-transparent, .background__circle-red');
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
			delay: Math.random() * 1,
			rotateZ: "random(-45, 45, 5)"
		});
	}

	// Применяем анимацию к каждому шару
	mm.add("(min-width: 1025px)", () => {
		circles.forEach(circle => {
			animateCircle(circle);
		});
	});


	mm.add("(max-width: 1024px)", () => {
		circlesAdaptive.forEach(circle => {
			animateCircle(circle);
		});
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



	gsap.to(transp_circle, {
		y: "5rem",
		duration: 6,
		ease: 'sine.inOut',
		repeat: -1,
		yoyo: true
	})


	mm.add("(max-width: 1024px)", () => {
		gsap.to(transp_circle, {
		y: "3rem",
		duration: 6,
		ease: 'sine.inOut',
		repeat: -1,
		yoyo: true
		});
	})
};

