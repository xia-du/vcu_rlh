'use strict';

export default class Scrolldownicon {
  constructor() {
    this.name = 'scrollDownIcon';

    console.log('down');

    var pxScrolled = 100;

    $(window).scroll(function() {
      if ($(this).scrollTop() > pxScrolled) {
        $('.scroll-down-icon').fadeOut('fast');
      } else {
        $('.scroll-down-icon').fadeIn('fast');
      }
    });
  }

}
