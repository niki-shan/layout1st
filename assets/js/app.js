const cl=console.log

// $('.tmslider').owlCarousel({
//     nav:true,
    
// })


$('.tmslider').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})