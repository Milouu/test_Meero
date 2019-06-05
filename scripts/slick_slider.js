$(document).ready(function(){
  $('#first_section_slider').slick({
    infinite: true,
    autoplay:true,
    autoplaySpeed:2000,
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    lazyLoad: 'ondemand',
    cssEase:'linear',
  });
});