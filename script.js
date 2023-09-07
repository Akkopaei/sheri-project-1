// import LocomotiveScroll from 'locomotive-scroll';

const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});


function mouseFollowCircle(){
     window.addEventListener("mousemove",(dets)=>{
        document.querySelector('#circle').style.transform = `translate(${dets.clientX}px,${dets.clientY}px)`
    })
}

function animation(){
    let ani = gsap.timeline();

    ani.from('.nav',{
        y: '-10',
        opacity: 0,
        duration: 1.5,
        ease: Expo.easeInOut
    })
        .to('.boundingelem',{
            y:0,
            ease: Expo.easeInOut,
            duration: 2,
            delay: -1,
            stagger: .2
        })
        .from('.herofooter',{
            y:-10,
            opacity: 0,
            duration: 1.5,
            delay: -1,
            ease: Expo.easeInOut
        })

}

animation();
mouseFollowCircle();


document.querySelectorAll(".elem").forEach(function (elem) {
    var rotate = 0;
    var diffrot = 0;
  
    elem.addEventListener("mouseleave", function (dets) {
      gsap.to(elem.querySelector("img"), {
        opacity: 0,
        ease: Power3,
        duration: 0.5,
      });
    });
  
    elem.addEventListener("mousemove", function (dets) {
      var diff = dets.clientY - elem.getBoundingClientRect().top;
      diffrot = dets.clientX - rotate;
      rotate = dets.clientX;
      gsap.to(elem.querySelector("img"), {
        opacity: 1,
        ease: Power3,
        top: diff,
        delay: .01,
        left: dets.clientX,
        rotate: gsap.utils.clamp(-20, 20, diffrot * 0.9),
      });
    });
  });

