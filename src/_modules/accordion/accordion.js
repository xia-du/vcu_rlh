'use strict';

export default class Accordion {
  constructor() {
    this.name = 'accordion';
    // console.log('%s module', this.name.toLowerCase());

    var $accordion = $('.accordion');
    var $toggleEls = $accordion.find('.accordion-item');

    $toggleEls.each(function(index, el) {
      var item = el;
      $(el)
        .on('click', '.accordion-heading', function() {
          if ($(item).find('.accordion-collapse').hasClass('collapsing') === false) {

            console.log($(item).find('.accordion-collapse').hasClass('collapsing'));
            $(item).toggleClass('in');
          }
        });
    });
  }
}
