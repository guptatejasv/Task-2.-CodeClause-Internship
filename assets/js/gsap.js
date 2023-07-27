var tl = gsap.timeline();

gsap.from(".sidebar",{
    x:-40,
    opacity:0
})
tl
    .from(".home",{
        delay:.5,
        opacity:0
    })
    .from(".home__social",{
        opacity:0,
        y:-20,  
    })
   .from(".home__title",{
    opacity:0,
    y:20,
   })
   .from([".home__subtitle",".home__description"],{
    opacity:0,
    x:20,
   })
   .from(".button",{
    opacity:0,
    scale:0.3,
   

    })
    .from(".my__info",{
        opacity:0,
        y:20,    
       })
    

