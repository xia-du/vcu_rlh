'use strict';

import Services from '../../_scripts/_services.js';

export default class Carousel {
  constructor() {
    this.name = 'carousel';

    var services = new Services();

    // Events
    // Hide dots for slides with overlayed captions
    function hideDotsForCaption(slick, index, hide) {
      var el = slick.$slides[index];
      var hasOverlayCaption = $(el)
        .find('.overlay-caption')
        .length;

      var $dots = slick.$dots;
      var $nextArrow = slick.$nextArrow;
      var $prevArrow = slick.$prevArrow;

      if (hasOverlayCaption) {
        if (hide || hide === true) {
          $dots.hide();
        } else {
          $dots.fadeOut('fast');
        }
        if ($(window).width() < 768 - services.getScrollBarWidth()) {
          $nextArrow.fadeIn('fast');
          $prevArrow.fadeIn('fast');
        }
      } else {
        $dots.fadeIn('fast');
        if ($(window).width() < 768 - services.getScrollBarWidth()) {
          $nextArrow.fadeOut('fast');
          $prevArrow.fadeOut('fast');
        }
      }
    }
    $('.carousel.default')
      .on('init', function(e, slick) {
        hideDotsForCaption(slick, 0, 'hide');
      })
      .on('beforeChange', function(e, slick, currentSlide, nextSlide) {
        hideDotsForCaption(slick, nextSlide);
      });

    // Binding
    $('.carousel.default').slick({
      lazyLoad: 'ondemand',
      dots: true,
      arrows: true,
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
