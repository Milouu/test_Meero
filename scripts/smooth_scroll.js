$(document).ready(function() {

  var oldScrollTop = $(window).scrollTop();

  // Checks if backToTop should be displayed when charging the page
  if(oldScrollTop >= $('#homepage_header').outerHeight(true)/2) {
    $('.backToTop').addClass('active');
  }

  $(window).scroll(function() {
    var currentScrollTop = $(this).scrollTop();
 
    // Checks if the user is scrolling down
    if(currentScrollTop > oldScrollTop) {

      // Displays backToTop when passing the header mid-point
      if(currentScrollTop >= $('#homepage_header').outerHeight(true)/2) {
        $('.backToTop').addClass('active');
      }
    
    // Checks if the user is scrolling up
    } else {

      // Hides backToTop button when sliding higher than the header mid-point
      if(currentScrollTop <= $('#homepage_header').outerHeight(true)/2) {
        $('.backToTop').removeClass('active');
      }
    }
      
      oldScrollTop = currentScrollTop;
  });

  // Scrolls back to top of the page when click backToTop button
  $('.backToTop').click(function() {
    $('html, body').animate({ scrollTop: 0 }, 1000);
  });
})