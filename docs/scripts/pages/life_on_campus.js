$(document)
  .ready(function() {
    console.log('life on campus page');

    var $eventsSlider = $('#events-slider');
    var $eventsInfoSlider = $('#events-info-slider');

    $eventsInfoSlider.slick({asNavFor: '#events-slider', arrows: false, infinite: false, fade: true, draggable: false});

    $eventsSlider.slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      centerMode: true,
      focusOnSelect: true,
      mobileFirst: true,
      infinite: false,
      arrows: false,
      asNavFor: '#events-info-slider',
      responsive: [
        {
          breakpoint: 0,
          settings: {
            variableWidth: true
          }
        }, {
          breakpoint: 480,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            centerMode: false,
            variableWidth: false,
            focusOnSelect: false,
            arrows: true
          }
        }, {
          breakpoint: 768,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            centerMode: false,
            variableWidth: false,
            focusOnSelect: false,
            arrows: true
          }
        }, {
          breakpoint: 992,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 1,
            centerMode: false,
            variableWidth: false,
            focusOnSelect: false,
            arrows: true
          }
        }, {
          breakpoint: 1200,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 1,
            centerMode: false,
            variableWidth: false,
            focusOnSelect: false,
            arrows: true
          }
        }
      ]
    });
  });
