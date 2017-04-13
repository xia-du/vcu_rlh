'use strict';

// Import services
import Services from '../../_scripts/_services.js';

export default class Masonry {
  constructor() {
    this.name = 'masonry';

    var services = new Services();

    var xsScreen = 480,
      smScreen = 768,
      mdScreen = 992,
      lgScreen = 1200;

    var gridItems = $('.isotope-grid-item');

    function getWindowSize() {
      return $(window).width() + services.getScrollBarWidth();
    }

    function setHeight() {

      var screenSize = getWindowSize();

      function setHeightForEachItem(row, innerRows, innerRowsNum, height) {
        $(row).css('height', height);
      }

      gridItems
        .each(function(index, row) {

          var xsHeight = $(row).attr('data-xs-height'),
            smHeight = $(row).attr('data-sm-height'),
            mdHeight = $(row).attr('data-md-height'),
            lgHeight = $(row).attr('data-lg-height');

          var gridInnerRows = $(row).find('.isotope-grid-inner-row'),
            gridInnerRowsNum = gridInnerRows.length;

          if (screenSize < xsScreen) {
            setHeightForEachItem(row, gridInnerRows, 1, xsHeight);
          } else if (screenSize >= xsScreen && screenSize < smScreen) {
            setHeightForEachItem(row, gridInnerRows, 1, xsHeight);
          } else if (screenSize >= smScreen && screenSize < mdScreen) {
            setHeightForEachItem(row, gridInnerRows, gridInnerRowsNum, smHeight);
          } else if (screenSize >= mdScreen && screenSize < lgScreen) {
            setHeightForEachItem(row, gridInnerRows, gridInnerRowsNum, mdHeight);
          } else if (screenSize >= lgScreen) {
            setHeightForEachItem(row, gridInnerRows, gridInnerRowsNum, lgHeight);
          }
        });

    }

    setHeight();

    $('.isotope-grid').isotope({
      // options
      itemSelector: '.isotope-grid-item',
      percentPosition: true,
      layoutMode: 'fitRows'
    });

    $(window).resize(setHeight);

  }
}
