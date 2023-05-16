$(document).ready(function () {
  
  if ($(".text-slider").length == 1) {
             
    var typed_strings =
        $(".text-slider-items").text();

    var typed = new Typed(".text-slider", {
        strings: typed_strings.split(","),
        typeSpeed: 50,
        loop: true,
        backDelay: 500,
        backSpeed: 50,
    });
}
// ===============================

$('.responsive').slick({
  dots: true,
  infinite: true,
  speed: 300,
 
  responsive: [
    
      { 
        breakpoint: 500,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: true,
       
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    }
  ]
});
// ==================================

AOS.init();
});


// ======= SCROLL BEHAVIOR NAVBAR ============================
let navBtns = $(".navbar .collapse a");

navBtns.click((e) => {
  let btnTarget = $(e.target);
  btnTarget.css({
    'border-bottom-width':'100%',
    "border-bottom-color": "#20c997"
  })
  // btnTarget.css("border-bottom-color", "#20c997");
  // btnTarget.parent().siblings().children().css("border-bottom-color", "transparent");
  btnTarget.parent().siblings().children().css({
    
    'border-bottom-width':'0%',
    "border-bottom-color": "transparent"
  });

  let secHref = btnTarget.attr('href');
  let secOffset = $(secHref).offset().top;
  console.log(secOffset);

  $('html , body').animate({scrollTop : secOffset} ,100)

});

// ======= SCROLL=====================================
let navBar = $("#navBar");
let downIcon = $("#downIcon");
let aboutOffset = $("#about").offset().top;

downIcon.css("display", "none");

window.addEventListener("scroll", () => {
  let wScroll = $(window).scrollTop();
  if (wScroll > aboutOffset - 20) {
    navBar.css("backgroundColor", "rgba(0,0,0,0.7)");
    downIcon.css({ display: "block" });
  } else {
    navBar.css("backgroundColor", "transparent");
    downIcon.css({ display: "none " });
  }

});

downIcon.click(function () {
  $("html , body").animate({ scrollTop: 0 }, 100);
});
// ======== docume=====================================