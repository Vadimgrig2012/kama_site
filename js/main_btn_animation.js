document.addEventListener("DOMContentLoaded", (event) => {

    let mm = gsap.matchMedia();
    mm.add("(min-width: 1025px)", () => {

        // Select the button element from the document
        const button = document.querySelector('.interactive-block__btn');
        const txtBtn = document.querySelector('.interactive-block__btn-text')
        const iconBtn = document.querySelector('.interactive-block__btn-icon')

        // Add an event listener for mouse movement over the button
        button.addEventListener('mousemove', (e) => {
            // Get the current bounding rectangle dimensions and position
            let boundingRect = button.getBoundingClientRect();
            let boundingRectTxt = txtBtn.getBoundingClientRect();

            // Calculate mouse position relative to the button
            const mousePosX = e.clientX - boundingRect.left - boundingRect.width / 2; // X position relative to the center of the button
            const mousePosY = e.clientY - boundingRect.top - boundingRect.height / 2; // Y position relative to the center of the button

            const yDisplacement = Math.max(-90, Math.min(90, (mousePosX / boundingRect.width) * 90));
            const zDisplacement = Math.max(-20, Math.min(20, (mousePosX / boundingRect.width) * 20));

            // Use GSAP (GreenSock Animation Platform) to animate the button
            gsap.to(button, {
                onStart: () => {
                    gsap.to(iconBtn, {
                        opacity: 0,
                        width: 0,
                        display: 'none',
                        duration: 0.1,
                    });
                    gsap.to(txtBtn, {
                        width: 'auto',
                        display: 'block',
                        opacity: 1,
                        duration: 0.3,
                    });
                },
                scale: 1.5,
                x: mousePosX * 2, // Move horizontally towards mouse
                y: mousePosY * 2, // Move vertically towards mouse
                duration: 0.5, // Duration of the animation
                ease: 'power3.out', // Easing function for smooth animation
            });
            gsap.to(txtBtn,{
                x: mousePosX * 0.5, // Move horizontally towards mouse
                y: mousePosY * 0.35, // Move vertically towards mouse
                rotationY: yDisplacement,
                rotationZ: zDisplacement,
                duration: 0.5, // Duration of the animation
                ease: 'power3.out', // Easing function for smooth animation
            });
        });

        // Add an event listener for when the mouse leaves the button area
        button.addEventListener('mouseleave', () => {
            gsap.to(button, {
                onStart: () => {
                    gsap.to(iconBtn, {
                        opacity: 1,
                        width: 'auto',
                        display: 'block',
                        duration: 0.3,
                        delay: 0.3,
                    });
                    gsap.to(txtBtn, {
                        width: 0,
                        display: 'none',
                        opacity: 0,
                        x: 0, // Reset horizontal position
                        y: 0, // Reset vertical position
                        rotationY: 0,
                        rotationZ: 0,
                        duration: 0.3,
                    });
                },
                x: 0, // Reset horizontal position
                y: 0, // Reset vertical position
                scale: 1, // Reset scale
                duration: 1, // Duration of the animation
                ease: 'elastic.out(1,0.3)' // Easing function for a 'springy' return
            });
        });
    });
})
