import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin)

const open = document.querySelector('.menu__button');
const nav = document.querySelector('.nav');
const links = gsap.utils.toArray('.nav__list li');
const footerLinks = gsap.utils.toArray('.footer_nav li').slice(0, 2);
const close = document.querySelector('.nav__close');
const mobile = window.matchMedia("(max-width: 1024px)");
const mm = gsap.matchMedia();
const tl = gsap.timeline({ paused: true });


tl.to(nav, {
    transformOrigin: 'top',
    display: 'flex',
    scaleY: 0,
    duration: 0
}, 0)
.to(nav, {
    scaleY: 1,
    duration: 0.3,
    ease: "sine.inOut",
}, 0.2)
.to(nav, {
    borderRadius: '0 0 0 0'
}, 0.3)
.from(close, {
    x: '-5rem',
    opacity: 0,
    rotate: 360,
    duration: 0.4
}, 0.6)
.from(links, {
    y: '10rem',
    scale: 0,
    opacity: 0,
    stagger: 0.2,
    ease: "back.inOut(4)",
    duration: 0.5
}, 0.5)


function openModal() {
    tl.play();
};
function closedModal() {
    tl.reverse();
};


open.addEventListener('click', () => {
    document.body.style.overflow = 'hidden';
    if(!mobile.matches) {
        document.body.style.paddingRight = '15px';
    };
    openModal();
});


close.addEventListener('click', () => {
    closedModal();
    setTimeout(() => {
        document.body.style.removeProperty('overflow');
        if(!mobile.matches) {
            document.body.style.removeProperty('padding-right');
        }
    }, 1200)
});



mm.add("(min-width: 1025px)", () => {
    close.addEventListener('mouseenter', () => {
        gsap.to(close, {
            rotate: 180,
            duration: 0.2,
        })
    });

    close.addEventListener('mouseleave', () => {
        gsap.to(close, {
            rotate: 0,
            duration: 0.2,
        })
    });
});

close.addEventListener('click', () => {
    gsap.to(close, {
        y: '1rem',
        duration: 0.05,
        repeat: 1,
        yoyo: true
    })
});



links.forEach(link => {
    mm.add("(min-width: 1025px)", () => {
        link.addEventListener('mouseenter', () => {
            gsap.to(link, {
                '--translateX': 0,
                '--opacity': 1,
                '--scale': 1,
                x: '3rem',
                duration: 0.2,
            })
        });
        link.addEventListener('mouseleave', () => {
            gsap.to(link, {
                '--translateX': '-10rem',
                '--opacity': 0,
                '--scale': 0,
                x: 0,
                duration: 0.2,
            })
        });
    });
    link.addEventListener('click', () => {
        const linkDataAttr = link.getAttribute('data-link');
        closedModal();
        setTimeout(() => {
            document.body.style.removeProperty('overflow');
            if(!mobile.matches) {
                document.body.style.removeProperty('padding-right');
            }
        }, 1200);

        gsap.to(link, {
            y: '1rem',
            duration: 0.05,
            repeat: 1,
            yoyo: true
        });
        
        gsap.to(window, {
            duration: 1,
            delay: 1,
            scrollTo: {
                y: '.' + linkDataAttr,
            }
        });
    });
});



footerLinks.forEach(link => {
    link.addEventListener('click', () => {
        const linkDataAttr = link.getAttribute('data-link');
        gsap.to(window, {
            delay: 0.2,
            duration: 1.5,
            scrollTo: {
                y: '.' + linkDataAttr,
            }
        });
    });    
});