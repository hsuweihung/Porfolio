gsap.registerPlugin(ScrollTrigger);

//---------------------Landing Page ScrollTrigger---------------------
function LandingPageScrollTrigger() {

    gsap.to('body', { // LoadingAnimation---------------------
        opacity: 1, duration: 0,
    }) // /LoadingAnimation---------------------

    let LandingPageScrollTrigger = gsap.timeline({
        scrollTrigger: {
            trigger: ".wrap",
            start: "0% 100%",
            toggleActions: "restart restart",
            end: "50% 0%",
        }
    })
    LandingPageScrollTrigger
        .from('.wrap .banner_txt .mb_top h1 span', {
            opacity: 0, x: "-22%", duration: 0.8, ease: "sine.inOut",
        }, 0.4)
        .from('.wrap .banner_work .mb_top h1 span', {
            opacity: 0, x: "-22%", duration: 0.8, ease: "sine.inOut",
        }, 0.4)
        .from('.wrap .banner_work .work_intro span', {
            opacity: 0, x: "-22%", duration: 0.5, stagger: 0.4, ease: "sine.inOut",
        }, 0.8)
        .from('.wrap .banner_txt .mb_hidden_txt span', {
            opacity: 0, x: "-22%", duration: 0.5, stagger: 0.4, ease: "sine.inOut",
        }, 0.8)
        .from('.wrap .banner_txt .pc_hidden_txt .mb-text mb_sub_text span', {
            opacity: 0, x: "-22%", duration: 2.0, stagger: 0.4, ease: "sine.inOut",
        }, 0.8)
        .from('.about_img', {
            opacity: 0, x: "-22%", duration: 0.8, ease: "sine.inOut",
        }, 0.4)
        .from('.about_txt h2', {
            opacity: 0, x: "-22%", duration: 0.8, stagger: 0.4, ease: "sine.inOut",
        }, 0.8)
        .from('.about_txt span', {
            opacity: 0, x: "-22%", duration: 0.8, stagger: 0.4, ease: "sine.inOut",
        }, 0.8)
        .from('.intro_me', {
            opacity: 0, x: "-22%", duration: 0.8, stagger: 0.4, ease: "sine.inOut",
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