var swiper = new Swiper(".swiper-container", {
    direction: "horizontal",
    slidesPerView: "auto",
    spaceBetween: 300,
    centeredSlides: true,
    mouseWheel: true,
});


let tl = new gsap.timeline();

tl.from(".logo", { duration: ".4",y: -1000 ,ease: Power4.easein  } )
tl.from(".menu ,.media", { duration: ".2",y: -1000 ,ease: Power4.easein  }, "+=.2" )
tl.from(".footer", { duration: ".2",y: 1000 ,ease: Power4.easein  }, "+=.2" )
tl.from(".swiper-slide", { duration: ".3",x: 1000,ease: Power4.easein  }, "+=.2");
tl.to(".swiper-front", { duration: ".3",opacity:1, scale: "1",ease: Power4.easein  }, "<");

swiper.on("slideChange", () => {
    gsap.to(".swiper-slide-active", { duration: ".2", scale: ".85",ease: Power4.easein  });
});
swiper.on("slideChangeTransitionEnd", () => {
    gsap.to(".swiper-slide-active", { duration: .2, scale: "1", ease: Power4.easeout });
});
