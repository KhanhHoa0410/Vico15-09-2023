// Banner
$(document).ready(function () {
    $('.banner-slick').slick({
        // dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: false,
        nextArrow: false,
    });
});


///
$('.slide-about').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slide-nav'
});
$('.slide-nav').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.slide-about',
    dots: false,
    centerMode: false,
    focusOnSelect: true
});



/////
$('.slick-slides').slick({
    centerMode: true,
    centerPadding: '0',
    slidesToShow: 3,
    arrows:true,
    prevArrow: '<button class="project-prev"><i class="far fa-chevron-left"></i></button>',
    nextArrow: '<button class="project-next"><i class="fa-sharp fa-light fa-circle-chevron-right"></i></button>',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });



  // Add active class to the current button (highlight it)
var iconprolist = document.getElementById("icon-prolist");
var iconp = iconprolist.getElementsByClassName("icon-p");
for (var i = 0; i < iconp.length; i++) {
  iconp[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
  });
}