import "bootstrap/dist/js/bootstrap.bundle.js"


$(window).scroll( function(){

  /* Check the location of each desired element */
  $('.hideme').each( function(i){

      var bottom_of_object = $(this).position().top + $(this).outerHeight();
      var bottom_of_window = $(window).scrollTop() + $(window).height();

      /* If the object is completely visible in the window, fade it it */
      if( bottom_of_window > bottom_of_object ){


          $(this).animate({'margin-top':'0','opacity':'1'},700);

      }

  }); 

});



// Hide Header on on scroll down
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('.navbar').outerHeight();

$(window).scroll(function(event){
    didScroll = true;
    
});

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 300);

function hasScrolled() {
    var st = $(this).scrollTop();
    
    // Make sure they scroll more than delta
    if(Math.abs(lastScrollTop - st) <= delta)
        return;
    
    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight){
        // Scroll Down
        $('.navbar').addClass('hide');
        $('.navbar').addClass('color');
        
        if ($('.navbar-collapse').hasClass('show')) {
            $('.navbar-toggler').trigger('click');
            $('.menu').trigger('click');
        }
        
    } else {
        // Scroll Up
        if(st + $(window).height() < $(document).height()) {
            $('.navbar').removeClass('color');
           $('.navbar').removeClass('hide');
        }
    }
    
    var scroll = $(window).scrollTop();

    if (scroll >= 20) {
        $('.navbar').addClass('colour');
        $('.cls-1').css('fill', 'black');
        $('.cls-2').css('fill', '#009fe3');
        $('.line').css('stroke', 'black');
        $('.nav-link').css('color', 'black');
    } else {
        $('.navbar').removeClass('colour');
        $('.cls-1').css('fill', 'white');
        $('.cls-2').css('fill', 'white');
        $('.line').css('stroke', 'white');
        $('.nav-link').css('color', 'white');
    }
    
    lastScrollTop = st;
}

$('.link-text').hover(function() {
    $(this).parent().css('outline', '4px solid #212529');
  }, function() {
    // on mouseout, reset the background colour
    $(this).parent().css('outline', '2px solid #A7C7D3');
  });

// // showing and hiding navbar jQuery //
// var lastScrollTop = 0;
// $(window).scroll(function(){
//   var st = $(this).scrollTop();
//   var banner = $('#navbar');
//   setTimeout(function(){
//     if (st > lastScrollTop){
//       banner.addClass('hide');
//       banner.addClass('bg-light');
//       $('.line').css('stroke', 'black');
//     }
    
    
//     else {
//       banner.removeClass('hide');
//     //   banner.removeClass('bg-light');
//     }
//     lastScrollTop = st;
//   }, 100);
// });

// $(window).scroll(function () {
//     var banner = $('#navbar');
//     if ($(this).scrollTop()  <= 0 ){
//         banner.removeClass('bg-light');
//         $('.line').css('stroke', 'white');
//     }
// });

$('.navbar-toggler').click(function() {

//    if (!$('.navbar').hasClass('colour')) {
        $('#navbar').addClass('colour');
        $('.cls-1').css('fill', 'black');
        $('.cls-2').css('fill', '#009fe3');
        $('.line').css('stroke', 'black');
        $('.nav-link').css('color', 'black');
    // } 
    // else if ($('.navbar').hasClass('colour')) {
    //     $('.navbar').removeClass('colour');
    //     $('.cls-1').css('fill', 'white');
    //     $('.cls-2').css('fill', 'white');
    //     $('.line').css('stroke', 'white');
    //     $('.nav-link').css('color', 'white');
    // } 
    
    
    
});