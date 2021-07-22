gsap.registerPlugin(ScrollTrigger);

//---------------------Landing Page ScrollTrigger---------------------
function LandingPageScrollTrigger() {

    gsap.to('body', { // LoadingAnimation---------------------
        opacity: 1, duration: 0,
    }) // /LoadingAnimation---------------------

    let LandingPageScrollTrigger = gsap.timeline({
        scrollTrigger: {
            trigger: ".landingPage",
            start: "0% 100%",
            end: "50% 0%",
            // markers: "true",
        }
    })
    LandingPageScrollTrigger
        /*.from('.landingPage #logo', {
            opacity: 0, x: "-31%", duration: 2.2, ease: "sine.in",
        }, 0)*/

        .from('.header .logo a', {
            opacity: 0, x: "-31%", duration: 1.5, ease: "sine.in",
        }, 0)
        .from('.landingPage .header ul a', {
            opacity: 0, x: "70%", duration: 1.5, stagger: 0.2, ease: "sine.inOut",
        }, 0.2)
        .from('.landingPage .header ul .ham-icon ', {
            opacity: 0, x: "70%", duration: 0.3, stagger: 0.2, ease: "sine.inOut",
        }, 0.2)
        .from('.wrap .banner_txt .mb_top h1 span', {
            opacity: 0, x: "-22%", duration: 2.0, ease: "sine.inOut",
        }, 0.4)
        .from('.wrap .banner_txt .mb_hidden_txt span', {
            opacity: 0, x: "-22%", duration: 2.0, stagger: 0.4, ease: "sine.inOut",
        }, 0.8)
        .from('.wrap .banner_txt .pc_hidden_txt .mb-text mb_sub_text span', {
            opacity: 0, x: "-22%", duration: 2.0, stagger: 0.4, ease: "sine.inOut",
        }, 0.8)
}
//---------------------/Landing Page ScrollTrigger---------------------

/*//---------------------Slider ScrollTrigger---------------------
function SliderScrollTrigger() {

    let Slide1 = gsap.timeline({ // Slide1---------------------
        scrollTrigger: {
            trigger: ".slide1",
            start: "100% 100%",
            end: "300% 0%",
            // markers: "true",
            scrub: 2.2,
            pin: ".slide1",
        }
    })
    Slide1
        .from('.slide1 #slide h1', {
            opacity: 0, x: "-22%",
        })
        .from('.slide1 #slide p', {
            opacity: 0, y: "22%",
        })
        .from('.slide1 #ImageContainer', {
            opacity: 0, y: "22%",
        }) // Slide1---------------------

    
    let Slide2 = gsap.timeline({ // Slide2---------------------
        scrollTrigger: {
            trigger: ".slide2",
            start: "100% 100%",
            end: "300% 0%",
            // markers: "true",
            scrub: 2.2,
            pin: ".slide2",
        }
    })
    Slide2
        .from('.slide2 #slide h1', {
            opacity: 0, x: "-22%",
        })
        .from('.slide2 #slide p', {
            opacity: 0, y: "22%",
        })
        .from('.slide2 #ImageContainer', {
            opacity: 0, y: "22%",
        }) // Slide2---------------------

    let Slide3 = gsap.timeline({ // Slide3---------------------
        scrollTrigger: {
            trigger: ".slide3",
            start: "100% 100%",
            end: "300% 0%",
            // markers: "true",
            scrub: 2.2,
            pin: ".slide3",
        }
    })
    Slide3
        .from('.slide3 #slide h1', {
            opacity: 0, x: "-22%",
        })
        .from('.slide3 #slide p', {
            opacity: 0, y: "22%",
        })
        .from('.slide3 #ImageContainer', {
            opacity: 0, y: "22%",
        }) // Slide3---------------------

    let iCodeAyush = gsap.timeline({
        scrollTrigger: {
            trigger: "#codeby",
            toggleActions: "restart restart restart restart",
            start: "48.618% 100%",
            end: "100% 0%",
            // markers: "true",
        }
    })
    iCodeAyush
        .from('#codeby a', {
            opacity: 0, y: "130%", duration: 2.2, ease: "sine",
        }) // iCodeAyush---------------------
}
//---------------------/Slider ScrollTrigger---------------------*/

/*-------------Navbar (max-width: 400px)------------- */
function Navbar() {
    gsap.from('#wrapper #Navbar', {
        opacity: 0, x: "40%", duration: 2.2, ease: "sine.in",
    })
    var NavAni = gsap.timeline();
    NavAni.from('#wrapper nav', {
        opacity: 0, y: "13%", duration: 0.5, ease: "sine",
    })
        .reverse();
    $("#wrapper #Navbar").click(function () {
        $("#wrapper nav").toggleClass("DisplayNone");
        NavAni.reversed(!NavAni.reversed());
    });
}
/*-------------/Navbar (max-width: 400px)------------- */

window.onload = () => {
    LandingPageScrollTrigger()
    SliderScrollTrigger()
    if (window.matchMedia("(max-width: 400px)").matches) {
        Navbar()
    } else {
    }
}