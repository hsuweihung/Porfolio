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
        .from('.landingPage .header .menu .anination_active a', {
            opacity: 0, x: "70%", duration: 0.5, stagger: 0.2, ease: "sine.inOut",
        }, 0.2)
        .from('.wrap .banner_txt .mb_top h1 span', {
            opacity: 0, x: "-22%", duration: 1.0, ease: "sine.inOut",
        }, 0.4)
        .from('.wrap .banner_txt .mb_hidden_txt span', {
            opacity: 0, x: "-22%", duration: 0.5, stagger: 0.4, ease: "sine.inOut",
        }, 0.8)
        .from('.wrap .banner_txt .pc_hidden_txt .mb-text mb_sub_text span', {
            opacity: 0, x: "-22%", duration: 2.0, stagger: 0.4, ease: "sine.inOut",
        }, 0.8)
}


window.onload = () => {
    LandingPageScrollTrigger()
    SliderScrollTrigger()
    if (window.matchMedia("(max-width: 400px)").matches) {
        Navbar()
    } else {
    }
}