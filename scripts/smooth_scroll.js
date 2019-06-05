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

      /**
       * UNCOMMENT FOR SMOOTH SCROLLING
       */
      // $path = $('#homepage_first_section').offset().top;
      // $('html, body').animate({ scrollTop:$path }, 1000);

      // Displays backToTop when passing the header mid-point
      if(currentScrollTop >= $('#homepage_header').outerHeight(true)/2) {
        $('.backToTop').addClass('active');
      }
    
    // Checks if the user is scrolling up
    } else {
      
      /**
       * UNCOMMENT FOR SMOOTH SCROLLING
       */
      // $path = $('#homepage_header').offset().top;
      // $('html, body').animate({ scrollTop:$path }, 1000);

      // Hides backToTop button when sliding higher than the header mid-point
      if(currentScrollTop <= $('#homepage_header').outerHeight(true)/2) {
        $('.backToTop').removeClass('active');
      }
    }
      
      oldScrollTop = currentScrollTop;
  });

  // Scrolls back to top of the page when click backToTop button
  $('.backToTop').click(function() {
    // Stops scrolling events from interfering with backToTop animation (useful if smooth scrolling enabled)
    $('html, body').stop(true, false);
    $('html, body').animate({ scrollTop: 0 }, 1000);
  });

  // Stops mousewheel events from interfering with smoothscroll (useful if smooth scrolling enabled)
  $(window).bind('mousewheel', function() {
    $('html, body').stop(true, false);
  });
})