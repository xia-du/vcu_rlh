'use strict';

export default class Image {
  constructor() {
    this.name = 'image';
    var hoverableOverlays = $('figure').find('.img-overlay.overlay-hoverable');

    hoverableOverlays.each(function(index, el) {

      var height = 0;

      height = $(el).outerHeight();

      $(el)
        .parent('.img-wrap')
        .hover(function() {
          $(el).animate({
            height: '100%'
          }, 'fast');
          $(el)
            .find('.overlay-description')
            .fadeIn('fast', function() {});
        }, function() {
          $(el).animate({
            height: height + 'px'
          }, 'fast');
          $(el)
            .find('.overlay-description')
            .fadeOut('fast', function() {});
        });
    });
  }
}
