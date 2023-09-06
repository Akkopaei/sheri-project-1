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











mouseFollowCircle();