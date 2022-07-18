$(document).ready(function(){
    $(".vi").fadeOut(8000 , function(){
        
    }),
    $(".owl-carousel").owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        responsive: {
          0:{
            items:1,
            nav: false
          },
          600:{
            items:2,
            nav: false
          },
          1000:{
            items:3,
            nav: false
          }

        }
       
    });

  });
  let aboutsection = $(".about").offset().top
  $(window).scroll(function(){
      let scrollNw = $(window).scrollTop()
      if(scrollNw > aboutsection - 20 ){
          $("#mynav").css("backgroundColor" , "rgb(29, 27, 27)")
          $("#mynav").css("padding" , "3px")
      }
      else{
        $("#mynav").css("backgroundColor" , "transparent")
        $("#mynav").css("padding" , "0px")
      }
  })

  