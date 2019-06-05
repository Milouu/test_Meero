$(document).ready(function() {
  $(window).focus(function() {
    document.title = 'Meero X Milan Roustan';
  });
  
  $(window).blur(function() {
    document.title = 'Hope to see you soon ;)';
  });
})