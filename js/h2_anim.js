import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Регистрируем плагины
gsap.registerPlugin(ScrollTrigger);

const titles = document.querySelectorAll('.title')

titles.forEach((title) => {

	let tl = gsap.timeline({
		scrollTrigger: {
			trigger: title,
			start: "center 80%"
		}
	});
	tl.to(title, {
	'--scaleX': '1',
		duration: 0.3,
		ease: 'power2.out',
	})
	.from(title.querySelectorAll('.title__span'), { 
	y: '-10rem',
	opacity: 0, 
	ease: 'bounce.out',
	delay: 0.1,
	stagger: 0.1,
	duration: 0.3,
	})
});
