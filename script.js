// import LocomotiveScroll from 'locomotive-scroll';

const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});


function mouseFollowCircle(){
    window.addEventListener("mousemove",(dets)=>{
        document.querySelector('#circle').style.transform = `translate(${dets.clientX-7}px,${dets.clientY-7}px)`
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