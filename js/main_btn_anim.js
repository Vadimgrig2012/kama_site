import { gsap } from "gsap";



let mm = gsap.matchMedia();
mm.add("(min-width: 1025px)", () => {

    const button = document.querySelector('.interactive-block__btn');
    const txtBtn = document.querySelector('.interactive-block__btn-text')
    const iconBtn = document.querySelector('.interactive-block__btn-icon')

    const tl = gsap.timeline({ repeat: -1, yoyo: true });

	tl.to(button, {
		duration: 2,
		y: '1.5rem',
		ease: 'sine.inOut',
	});

    button.addEventListener('mouseenter', () => {
        tl.pause();
    });
      
    button.addEventListener('mouseleave', () => {
        setTimeout(() =>{
            tl.restart(true, false);
        }, 1500)
        
    });



    button.addEventListener('mousemove', (e) => {

        let boundingRect = button.getBoundingClientRect();
        let boundingRectTxt = txtBtn.getBoundingClientRect();

        const mousePosX = e.clientX - boundingRect.left - boundingRect.width / 2;
        const mousePosY = e.clientY - boundingRect.top - boundingRect.height / 2;

        const yDisplacement = Math.max(-90, Math.min(90, (mousePosX / boundingRect.width) * 90));
        const zDisplacement = Math.max(-20, Math.min(20, (mousePosX / boundingRect.width) * 20));

        gsap.to(button, {
            onStart: () => {
                gsap.to(iconBtn, {
                    opacity: 0,
                    scale: 0,
                    width: 0,
                    display: 'none',
                    duration: 0.1,
                });
                gsap.to(txtBtn, {
                    width: 'auto',
                    scale: 1,
                    display: 'block',
                    opacity: 1,
                    duration: 0.3,
                });
            },
            scale: 1.5,
            x: mousePosX * 2,
            y: mousePosY * 2,
            duration: 0.5,
            ease: 'power3.out',
        });
        gsap.to(txtBtn,{
            x: mousePosX * 0.5,
            y: mousePosY * 0.35,
            rotationY: yDisplacement,
            rotationZ: zDisplacement,
            duration: 0.5,
            ease: 'power3.out',
        });
    });

    button.addEventListener('mouseleave', () => {
        gsap.to(button, {
            onStart: () => {
                gsap.to(iconBtn, {
                    scale: 1,
                    opacity: 1,
                    width: 'auto',
                    display: 'block',
                    duration: 0.3,
                    delay: 0.3,
                    ease: 'elastic.out(1,0.3)'
                });
                gsap.to(txtBtn, {
                    width: 0,
                    scale: 0,
                    display: 'none',
                    opacity: 0,
                    x: 0, 
                    y: 0,
                    rotationY: 0,
                    rotationZ: 0,
                    duration: 0.3,
                });
            },
            x: 0,
            y: 0,
            scale: 1,
            duration: 0.7,
            ease: 'elastic.out(1,0.3)'
        });
    });
});

