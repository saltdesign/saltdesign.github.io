$('.menu-toggle').click(function() {
  
  $('.site-nav').toggleClass('site-nav--open', 500);
  $(this).toggleClass('open');
  
})

 function to_position(divid){
     $('html, body').animate({scrollTop:$(divid).position().top - 50 }, 'slow');
 }