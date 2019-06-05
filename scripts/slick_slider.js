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
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
});