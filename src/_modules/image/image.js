'use strict';

export default class Image {
  constructor() {
    this.name = 'image';
    var hoverableOverlays = $('figure').find('.img-overlay.overlay-hoverable');

    function resetHeight() {
      $('.img-overlay').css('height', '');
    }

    hoverableOverlays
      .each(function(index, el) {

        var height = 0;

        $(el)
          .parent('.img-wrap')
          .hover(function() {
            height = $(el).outerHeight();
            $(el).animate({
              height: '100%'
            }, 'fast');
            $(el)
              .find('.overlay-description')
              .fadeIn('fast', function() {});
          }, function() {
            $(el).animate({
              height: height + 'px'
            }, 'fast', resetHeight);
            $(el)
              .find('.overlay-description')
              .fadeOut('fast', function() {
                $(this).css('display', 'none');
              });
          });
      });
  }
}
