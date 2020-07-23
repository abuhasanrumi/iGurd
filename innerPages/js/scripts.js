

function openNav() {
  document.getElementById("mySidenav").style.width = "235px";
  document.getElementById("mySidenav").style.paddingRight = "1.5rem";
  document.getElementById("mySidenav").style.paddingLeft = "1.5rem";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("mySidenav").style.paddingRight = "0rem";
  document.getElementById("mySidenav").style.paddingLeft = "0rem";
}



$(document).ready(function(){
  $('.portfolio-wrap').owlCarousel({
    items:3,
    loop:true,
    margin:50,
    autoplay:true,
    autoplayTimeout:5000,
    autoplayHoverPause:true,
    responsive:{
      0:{
          items:1,
      },
      600:{
          items:1,
      },
      1000:{
          items:3,
      }
      }
  });

  $('.partnerCarousel').owlCarousel({
    items:5,
    loop:true,
    center:true,
    margin:20,
    dots: false,
    nav: 2,
    autoplay:false,
    navText : ['<i class="fas fa-arrow-alt-circle-left"></i>','<i class="fas fa-arrow-alt-circle-right"></i>'],
    responsive:{
      0:{
          items:1,
      },
      600:{
          items:2,
      },
      1000:{
          items:5,
      }
      }
  });

});


const signupButton = document.getElementById('signup-next')
signupButton.addEventListener('click', function(){
  const signupArea = document.getElementById('signup-area');
  signupArea.style.display = 'none'

  const verifyArea = document.getElementById('phone-verification-area')
  verifyArea.style.display = 'block'
})