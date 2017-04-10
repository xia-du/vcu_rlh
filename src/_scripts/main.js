// Main javascript entry point
// Should handle bootstrapping/starting application

'use strict';

// Libs
import $ from 'jquery';
import jQueryBridget from 'jquery-bridget';
import 'bootstrap';
import 'slick-carousel';
import Isotope from 'isotope-layout';

// make Isotope a jQuery plugin
jQueryBridget('isotope', Isotope, $);
// now you can use $().isotope()
$('.grid').isotope({
  // options...
});

// Modules
import Link from '../_modules/link/link';
import Image from '../_modules/image/image';
import Accordion from '../_modules/accordion/accordion';
import Carousel from '../_modules/carousel/carousel';
import Navigation from '../_modules/navigation/navigation';
import Help from '../_modules/help/help';
import Masonry from '../_modules/masonry/masonry';

$(() => {

  console.log('Welcome to VCU Residentail Life and Housing!');

  // Activate modules
  new Link();
  new Image();
  new Carousel();
  new Navigation();
  new Help();
  new Masonry();
  new Accordion();

});
