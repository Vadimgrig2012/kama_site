import { gsap } from "gsap";

let cursor = document.querySelector('.cursor');
let cursorScale = document.querySelectorAll('.cursor-scale');
let mouseX = 0;
let mouseY = 0;


gsap.to({}, {
    duration: 0.010,
    repeat: -1, 

    onRepeat: function() {
        gsap.set(cursor, {
            css: {
                left: mouseX,
                top: mouseY
            }
        })
    }
});

window.addEventListener("mousemove", function (e){
    mouseX = e.clientX;
    mouseY = e.clientY;
})

cursorScale.forEach(link => {
    link.addEventListener('mouseleave', () => {
        cursor.classList.remove('grow-h1');
        cursor.classList.remove('grow-link');
    });
    link.addEventListener('mousemove', () => {
        if(link.classList.contains('cur-h1')){
            cursor.classList.add('grow-h1');
        }else if(link.classList.contains('cur-link')){
            cursor.classList.add('grow-link');
        };
    });
});