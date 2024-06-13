import { gsap } from "gsap";
let mm = gsap.matchMedia();

let cursor = document.querySelector('.cursor');
let cursorScale = document.querySelectorAll('.cursor-scale');
let mouseX = 0;
let mouseY = 0;

mm.add("(min-width: 1025px)", () => {
    
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

        if (!isCursorWithinViewport()) {
            cursor.style.opacity= 0;
        } else {
            cursor.style.opacity = 0.7;
        }
    });

    cursorScale.forEach(link => {
        link.addEventListener('mouseleave', () => {
            cursor.classList.remove('grow-h1');
            cursor.classList.remove('grow-link');
            cursor.classList.remove('grow-h2');
        });
        link.addEventListener('mousemove', () => {
            if(link.classList.contains('cur-h1')){
                cursor.classList.remove('grow-h2');
                cursor.classList.remove('grow-link');
                cursor.classList.add('grow-h1');
            }else if(link.classList.contains('cur-link')){
                cursor.classList.remove('grow-h1');
                cursor.classList.remove('grow-h2');
                cursor.classList.add('grow-link');
            }else if(link.classList.contains('cur-h2')){
                cursor.classList.remove('grow-link');
                cursor.classList.remove('grow-h1');
                cursor.classList.add('grow-h2');
            };
        });
    });


    function isCursorWithinViewport() {
        const viewportWidth = document.body.offsetWidth;
        const viewportHeight = document.body.offsetHeight;
        const cursorLeft = mouseX;
        const cursorTop = mouseY;
    
        return cursorLeft >= 10 && cursorLeft <= viewportWidth && cursorTop >= 10 && cursorTop <= viewportHeight;
    }
});


