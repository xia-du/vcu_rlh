$(document)
  .ready(function() {
    console.log('llc');

    var $pirSlider = $('#pir-slider');
    var $pirInfoSlider = $('#pir-info-slider');

    var $tcSlider = $('#tc-slider');
    var $tcInfoSlider = $('#tc-info-slider');

    $pirInfoSlider.slick({
      asNavFor: '#pir-slider',
      arrows: false,
      infinite: false,
      fade: true,
      draggable: false
    });

    $tcInfoSlider.slick({
      asNavFor: '#tc-slider',
      arrows: false,
      infinite: false,
      fade: true,
      draggable: false
    });

    $pirSlider.slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      centerMode: true,
      focusOnSelect: true,
      mobileFirst: true,
      infinite: false,
      arrows: false,
      asNavFor: '#pir-info-slider',
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
          breakpoint: 767,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            centerMode: false,
            variableWidth: false,
            focusOnSelect: false,
            arrows: true
          }
        }, {
          breakpoint: 991,
          settings: {
            slidesToShow: 6,
            slidesToScroll: 1,
            centerMode: false,
            variableWidth: false,
            focusOnSelect: false,
            arrows: true
          }
        }
      ]
    });

    $tcSlider.slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      centerMode: true,
      focusOnSelect: true,
      mobileFirst: true,
      infinite: false,
      arrows: false,
      asNavFor: '#tc-info-slider',
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
          breakpoint: 767,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            centerMode: false,
            variableWidth: false,
            focusOnSelect: false,
            arrows: true
          }
        }, {
          breakpoint: 991,
          settings: {
            slidesToShow: 7,
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
