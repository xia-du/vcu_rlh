'use strict';

export default class Carousel {
  constructor() {
    this.name = 'carousel';

    $('.carousel.default').slick({
      lazyLoad: 'ondemand',
      dots: true,
      arrows: false,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 4000,
      mobileFirst: true,
      responsive: [
        {
          breakpoint: 480,
          settings: {
            arrows: true
          }
        }
      ]
    });

    $('.carousel.thumbnails').slick({
      lazyLoad: 'ondemand',
      arrows: false,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 4000,
      mobileFirst: true,
      asNavFor: '#example-carousel-with-thumbnails-nav' // need to be change to specific slider
    });

    // Responsive thumbnail size
    $('.thumbnails-wrap').slick({
      lazyLoad: 'ondemand',
      slidesToShow: 2,
      slidesToScroll: 1,
      arrows: false,
      centerMode: true,
      focusOnSelect: true,
      mobileFirst: true,
      asNavFor: '#example-carousel-with-thumbnails', // need to be change to specific slider
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 6
          }
        }, {
          breakpoint: 768,
          settings: {
            slidesToShow: 5
          }
        }, {
          breakpoint: 480,
          settings: {
            slidesToShow: 4
          }
        }, {
          breakpoint: 320,
          settings: {
            slidesToShow: 3
          }
        }
      ]
    });
  }

}
