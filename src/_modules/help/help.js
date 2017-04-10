'use strict';

import Services from '../../_scripts/_services.js';

export default class Help {
  constructor() {
    this.name = 'help';

    var services = new Services();

    var mask = $('.help-center-wrap').find('.help-center-mask');

    // Replace all SVG images with inline SVG
    $('img.svg').each(function() {
      var $img = $(this);
      var imgID = $img.attr('id');
      var imgClass = $img.attr('class');
      var imgURL = $img.attr('src');

      $.get(imgURL, function(data) {
        // Get the SVG tag, ignore the rest
        var $svg = $(data).find('svg');

        // Add replaced image's ID to the new SVG
        if (typeof imgID !== 'undefined') {
          $svg = $svg.attr('id', imgID);
        }
        // Add replaced image's classes to the new SVG
        if (typeof imgClass !== 'undefined') {
          $svg = $svg.attr('class', imgClass + ' replaced-svg');
        }

        // Remove any invalid XML tags as per http://validator.w3.org
        $svg = $svg.removeAttr('xmlns:a');

        // Replace image with new SVG
        $img.replaceWith($svg);

      }, 'xml');

    });

    // Show modal when click on an icon
    $('.help-center-wrap')
      .find('.icon-group')
      .each(function(index, el) {
        var targetId = $(el).attr('data-target'),
          target = $('#' + targetId);

        $(el).click(function() {
          if ($(window).width() < 768 - services.getScrollBarWidth()) {
            $('body').addClass('no-scroll modal-open');
          }
          mask.fadeIn('fast');

          target
            .css('overflow', 'visible')
            .slideDown('fast', function() {
              target.addClass('active');
            })
            .css('overflow', '');
        });

      });

    function closeModal() {
      $('body').removeClass('no-scroll modal-open');

      $('.help-center-modal.active')
        .removeClass('active')
        .css('overflow', 'visible')
        .slideUp('fast')
        .css('overflow', '');

      mask.fadeOut('fast');
    }

    // Hide modal when click on close button
    $('.help-center-wrap')
      .find('.close-btn')
      .each(function(index, el) {
        $(el)
          .click(function() {
            closeModal();
          });

      });

    // Click mask to hide modal
    mask.click(function() {
      closeModal();
    });
  }
}
