$(document)
  .ready(function() {
    console.log('halls page');

    // Goolge map
    function initMap() {
      var styledMapType = new google
        .maps
        .StyledMapType([
          {
            "featureType": "landscape",
            "elementType": "geometry.fill",
            "stylers": [
              {
                "color": "#ffdd78"
              }, {
                "lightness": 20
              }
            ]
          }, {
            "featureType": "landscape.natural.terrain",
            "elementType": "geometry.fill",
            "stylers": [
              {
                "color": "#ffbb00"
              }, {
                "lightness": -10
              }
            ]
          }, {
            "featureType": "poi.park",
            "elementType": "geometry.fill",
            "stylers": [
              {
                "color": "#57c29d"
              }
            ]
          }, {
            "featureType": "poi.park",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#000000"
              }
            ]
          }, {
            "featureType": "poi.school",
            "elementType": "geometry.fill",
            "stylers": [
              {
                "color": "#ffbb00"
              }
            ]
          }, {
            "featureType": "poi.school",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#000000"
              }
            ]
          }, {
            "featureType": "road",
            "elementType": "geometry.fill",
            "stylers": [
              {
                "color": "#ffffff"
              }
            ]
          }, {
            "featureType": "water",
            "elementType": "geometry.fill",
            "stylers": [
              {
                "color": "#66b2e9"
              }
            ]
          }
        ], {name: 'VCU Map'});
      var vcu = {
        lat: 37.5477051,
        lng: -77.4525206
      };
      var map = new google
        .maps
        .Map(document.getElementById('map'), {
          zoom: 16,
          center: vcu,
          zoomControl: false,
          mapTypeControl: false,
          scaleControl: false,
          streetViewControl: true,
          rotateControl: false,
          fullscreenControl: false,
          draggable: false,
          scrollwheel: false,
          mapTypeControlOptions: {
            mapTypeIds: ['roadmap', 'satellite', 'hybrid', 'terrain', 'styled_map']
          }
        });
      var marker = new google
        .maps
        .Marker({position: vcu, map: map});
      map
        .mapTypes
        .set('styled_map', styledMapType);
      map.setMapTypeId('styled_map');
    }
    initMap();

    // Google map responsive

    // Isotop filters for desktop
    var $grid = $('#halls-grid');

    // bind filter button click
    $('.filters-button-group').on('click', '.filter-btn', function() {
      // Active state
      $('.filter-btn')
        .removeClass('btn-primary')
        .addClass('btn-default');
      $(this)
        .removeClass('btn-default')
        .addClass('btn-primary');

      // Filter
      var filterValue = $(this).attr('data-filter');

      // Link to mobile version
      $('.filter-link')
        .parent('li')
        .removeClass('active');
      $targetFilterLink = $('.filter-link[data-filter="' + filterValue + '"]');

      $targetFilterLink
        .parent('li')
        .addClass('active');
      var selectedLinkLabel = $targetFilterLink.html();
      $('.dropdown-text').html(selectedLinkLabel);

      $grid.isotope({filter: filterValue});
    });

    // bind filter link click for mobile
    $('.filters-button-group').on('click', '.filter-link', function() {
      // Active state
      $('.filter-link')
        .parent('li')
        .removeClass('active');
      $(this)
        .parent('li')
        .addClass('active');

      // Change dropdown Text
      var selectedLinkLabel = $(this).html();
          $('.dropdown-text').html(selectedLinkLabel);

      // Filter
      var filterValue = $(this).attr('data-filter');

      // Link to desktop version
      $('.filter-btn')
        .removeClass('btn-primary')
        .addClass('btn-default');
      $targetFilterBtn = $('.filter-btn[data-filter="' + filterValue + '"]');

      $targetFilterBtn
        .removeClass('btn-default')
        .addClass('btn-primary');

      $grid.isotope({filter: filterValue});
    });

  });
