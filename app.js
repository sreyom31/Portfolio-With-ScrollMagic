//home page animation
const home = document.querySelector('#home');
const slider = document.querySelector('.slider');

const tl = new TimelineMax();
tl.fromTo(home,1,{height:"0%"},{height:"85%",ease:Power2.easeInOut})
.fromTo(home,1.2,{width:"70%"},{width:"100%",ease:Power2.easeInOut})
.fromTo(slider,1.2,{x:"-100%"},{x:"0%",ease:Power2.easeInOut});


// wow.js
var wow = new WOW(
    {
      boxClass:     'wow',      // animated element css class (default is wow)
      animateClass: 'animated', // animation css class (default is animated)
      offset:       0,          // distance to the element when triggering the animation (default is 0)
      mobile:       true,       // trigger animations on mobile devices (default is true)
      live:         true,       // act on asynchronously loaded content (default is true)
      callback:     function(box) {
        // the callback is fired every time an animation is started
        // the argument that is passed in is the DOM node being animated
      },
      scrollContainer: null,    // optional scroll container selector, otherwise use window,
      resetAnimation: true,     // reset animation on end (default is true)
    }
  );
  wow.init();


  //scroll animation
  const flightPath={
    curviness:1.25,
    autoRotate:true,
    values:[
        {x:100,y:-20},
        {x:300,y:10},
        {x:500,y:50},
        {x:850,y:-60},
        {x:450,y:-60},
        {x:600,y:60},
        {x:800,y:0},
        {x:window.innerWidth,y:-250}
    ]
};

const tween = new TimelineLite();

tween.add(
    TweenLite.to(".paper-plane",1,{
        bezier:flightPath,
        ease:Power1.easeInOut
    })
);

const controller=new ScrollMagic.Controller();

const scene=new ScrollMagic.Scene({
    triggerElement:".animation",
    duration:3000,
    triggerHook:0
})

.setTween(tween)
// .addIndicators()
.setPin(".animation")
.addTo(controller);