'use strict';

export default class Menuigation {
  constructor() {
    this.name = 'navigation';

    // jQuery elements
    var $body = $('body');
    var $nav = $('nav');
    var $navIcon = $nav.find('#nav-icon');
    var $searchBtn = $nav.find('#search-btn-mobile');

    var $menu = $('#side-menu');
    var $mainTab = $menu.find('.main-tab');
    var $secondaryTab = $menu.find('.secondary-tab');
    var $mainMenu = $menu.find('.main-menu');
    var $secondaryMenu = $menu.find('.secondary-menu');
    var secondaryMenuItems = $secondaryMenu.find('.secondary-menu-item');

    var $searchBar = $('#search-bar-mobile');

    var $desktopSecondaryNav = $('.desktop-secondary');
    var desktopSecondaryNavItems = $desktopSecondaryNav.find('.desktop-secondary-nav-item');

    var $header = $('header');
    var $vcuBar = $('.vcu-branding-bar');

    // Params
    var threshold = $header.outerHeight() + $vcuBar.outerHeight();
    var navbarHeight = $nav.outerHeight();
    var offsetTop = $nav.outerHeight() * 2 - 1;

    // Scroll detection
    var lastId,
      // Anchors corresponding to menu items
      scrollItems = desktopSecondaryNavItems.map(function() {
        var item = $($(this).attr("href"));
        if (item.length) {
          return item;
        }
      });

    // Toggle Menu
    function toggleMenu() {
      // Animation
      $navIcon.toggleClass('open');
      // Toggle menu
      $menu.toggleClass('open');
      // Lock page scrolling
      $body.toggleClass('lock-scroll');
    }

    // Toggle search background
    function toggleSearchBar() {
      $searchBar.toggleClass('open');
      $searchBtn.toggleClass('open');
    }

    // Switch to secondary tab
    function switchToSecondTab() {
      $menu.addClass('secondary-menu');
      $secondaryTab.addClass('active');
      $mainTab.removeClass('active');
      $mainMenu.removeClass('fadeInLeft').addClass('animated fadeOutLeft');
      $secondaryMenu.removeClass('hidden fadeOutRight').addClass('animated fadeInRight');
    }
    // Switch to main tab
    function switchToMainTab() {
      $menu.removeClass('secondary-menu');
      $mainTab.addClass('active');
      $secondaryTab.removeClass('active');
      $mainMenu.removeClass('hidden').removeClass('fadeOutLeft').addClass('animated fadeInLeft');
      $secondaryMenu.removeClass('fadeInRight').addClass('animated fadeOutRight');
    }

    // Scroll to anchor
    function scrollToAnchor(anchor, offset) {
      $('html, body').stop().animate({
        scrollTop: $(anchor).offset().top - offset
      }, 300, 'swing');
    }

    // Detect if secondary navbar exist
    function hasSecondaryNav() {
      if ($desktopSecondaryNav.length) {
        return true;
      } else {
        return false;
      }
    }

    // If secondary navbar exists
    if (hasSecondaryNav()) {
      navbarHeight = $nav.outerHeight() + $desktopSecondaryNav.outerHeight();
    }

    // Events
    $navIcon.click(function() {
      toggleMenu();
    });

    $searchBtn.click(function() {
      toggleSearchBar();
    });

    // Only for the pages which have secondary navigation bar
    if (hasSecondaryNav()) {

      $mainTab.click(function(e) {
        switchToMainTab();
        e.preventDefault();
      });

      $secondaryTab.click(function(e) {
        switchToSecondTab();
        e.preventDefault();
      });

      // Click secondary page item
      secondaryMenuItems.click(function(e) {
        var offsetTop = 84;
        toggleMenu();
        scrollToAnchor($(this).attr('href'), offsetTop);

        e.preventDefault();
      });

      // Click desktop secondary nav item
      desktopSecondaryNavItems.click(function(e) {
        scrollToAnchor($(this).attr('href'), offsetTop);
        desktopSecondaryNavItems.parent().removeClass("active");
        $(this).parent().addClass('active');
        e.preventDefault();
      });

    }
    // Desktop navbar stay fixed on top when scroll over a certain distance ($header.height() + $vcuBar.height();)
    $(window).scroll(function() {

      var fromTop = $(this).scrollTop();

      // Fix navbar and/or secondary navbar
      if (fromTop >= threshold) {
        $nav.addClass('fix-top');
        $desktopSecondaryNav.addClass('fix-top');
        $header.css('margin-bottom', navbarHeight);
      } else {
        $nav.removeClass('fix-top');
        $desktopSecondaryNav.removeClass('fix-top');
        $header.css('margin-bottom', 0);
      }

      if (hasSecondaryNav()) {
        // Get id of current scroll item
        var cur = scrollItems.map(function() {
          if ($(this).offset().top < fromTop + navbarHeight + 22)
            return this;
          }
        );

        // Get the id of the current element
        cur = cur[cur.length - 1];
        var id = cur && cur.length ? cur[0].id : "";

        if (lastId !== id) {
          lastId = id;
          // Set/remove active class
          desktopSecondaryNavItems.parent().removeClass("active").end().filter("[href='#" + id + "']").parent().addClass("active");
          // Set/remove active class
          secondaryMenuItems.parent().removeClass("active").end().filter("[href='#" + id + "']").parent().addClass("active");
        }
      }
    });

  }
}
