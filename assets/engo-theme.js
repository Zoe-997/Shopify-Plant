

window.jQuery = window.$ = jQuery;
var engoApps = {
  init: function() {
    this.init_MobileMenu();
  },
  init_MobileMenu: function(){
    $(document).on('click','#hamburger_icon',function(e){
      e.preventDefault();
      $(this).toggleClass('active');
      $('body').toggleClass('opened-nav-animate');
      setTimeout(function(){
        $('body').toggleClass('opened-nav');
      }, 100);
    })

    $('ul.navigation-mobile ul.sub-menu-dropdown, ul.navigation-mobile .engoj-megamenu-wrapper').each(function(){
      $(this).parent().children('a').prepend( '<span class="open-submenu"></span>' );
    });

    $(document).on('click','.open-submenu', function(e){
      e.stopPropagation();
      e.preventDefault();          
      $( this ).closest('li').toggleClass('active-menu-item');
      $( this ).closest('li').children( '.sub-menu-dropdown, .engoj-megamenu-wrapper' ).slideToggle();
    });

    $(window).resize(function(){
      var $navHeight = $(window).height() - $('.navbar-container').height();
      $('.main-nav-mobile').css({'max-height': $navHeight});
    });
  }
}
engoApps.init();


/* fillter collection tablet mobile*/   
function aweProductSidebar() {
  var $filterSidebar = $('#shop-widgets-filters');
  var $toggleButton = $('#open-filters');

  var $overlay = $('body').find('.widgets-filter-overlay');

  function _open() {
    $filterSidebar.addClass('open');
    $toggleButton.addClass('open');
    if (! $overlay.length) {
      $('body').append('<div class="widgets-filter-overlay"></div>');
    }

    $('body').addClass('open-filters-open');
  }

  function _close() {
    $filterSidebar.removeClass('open');
    $toggleButton.removeClass('open');
    $(document).find('.widgets-filter-overlay').remove();
    $('body').removeClass('open-filters-open');
  }

  $toggleButton.on('click', function() {
    if (! $filterSidebar.hasClass('open')) {
      _open();
    } else {
      _close();
    }
  });

  $('body').on('click', '.widgets-filter-overlay', function() {
    _close();
  });
}
/* Hover color change image product */
jQuery(document).ready(function($) {
  jQuery('.engoj_select_color a').each(function(){
    jQuery(this).on("mouseover",function(){
      var engoImage = jQuery(this).data('engojvariant-img');
      jQuery(this).parents('.engoj_grid_parent').find('.engoj_find_img img').attr({ src: engoImage }); 
      return false;
    });
  });
});


/* PLANT THEME */
/* Section Slideshow v1 */
// jQuery(document).ready(function($) {
//   $('.js-slideshow-v1').slick({
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     arrows: false,
//     dots: true,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           dots: false
//         }
//       }
//     ],
//     customPaging: function(slider, i) {
//       var thumb = $(slider.$slides[i]).data();
//       return '<a> 0' + (i + 1) + '</a>';
//     }
//   });
// });

$(document).ready(function() {
  $('.js-slideshow-v1').on('init', function(e, slick) {
    var $firstAnimatingElements = $('div.hero-slide:first-child').find('[data-animation]');
    doAnimations($firstAnimatingElements);    
  });
  $('.js-slideshow-v1').on('beforeChange', function(e, slick, currentSlide, nextSlide) {
    var $animatingElements = $('div.hero-slide[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
    doAnimations($animatingElements);    
  });
  $('.js-slideshow-v1').slick({
    autoplay: true,
    autoplaySpeed: 8000,
    dots: true,
    arrows: false,
    fade: true,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          dots: false
        }
      }
    ],
    customPaging: function(slider, i) {
      var thumb = $(slider.$slides[i]).data();
      return '<a> 0' + (i + 1) + '</a>';
    }
  });
  
  function doAnimations(elements) {
    var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
    elements.each(function() {
      var $this = $(this);
      var $animationDelay = $this.data('delay');
      var $animationType = 'animated ' + $this.data('animation');
      $this.css({
        'animation-delay': $animationDelay,
        '-webkit-animation-delay': $animationDelay
      });
      $this.addClass($animationType).one(animationEndEvents, function() {
        $this.removeClass($animationType);
      });
    });
  }
});

/* Section Slideshow v2 */
// jQuery(document).ready(function($) {
//   $('.js-slideshow-v2').slick({
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     arrows: false,
//     dots: true,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           dots: false
//         }
//       }
//     ]
//   });
// });

$(document).ready(function() {
  $('.js-slideshow-v2').on('init', function(e, slick) {
    var $firstAnimatingElements = $('div.hero-slide:first-child').find('[data-animation]');
    doAnimations($firstAnimatingElements);    
  });
  $('.js-slideshow-v2').on('beforeChange', function(e, slick, currentSlide, nextSlide) {
    var $animatingElements = $('div.hero-slide[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
    doAnimations($animatingElements);    
  });
  $('.js-slideshow-v2').slick({
    autoplay: true,
    autoplaySpeed: 8000,
    dots: true,
    arrows: false,
    fade: true,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          dots: false
        }
      }
    ]
  });
  
  function doAnimations(elements) {
    var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
    elements.each(function() {
      var $this = $(this);
      var $animationDelay = $this.data('delay');
      var $animationType = 'animated ' + $this.data('animation');
      $this.css({
        'animation-delay': $animationDelay,
        '-webkit-animation-delay': $animationDelay
      });
      $this.addClass($animationType).one(animationEndEvents, function() {
        $this.removeClass($animationType);
      });
    });
  }
});

/* Section Slideshow v3 */
jQuery(document).ready(function($) {
  $('.js-slideshow-v3').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: false
  });
});

/* Section Slideshow v4 */
jQuery(document).ready(function($) {
  $('.js-slideshow-v4').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: true
  });
});


/* Section Video */
jQuery(document).ready(function($) {
  $('[data-init="video"]', this.$context).each(function () {
    var el = $(this);
    var play = el.find('.js-play-video');

    el.append('<iframe />');

    el.append('<span data-video-control="close" />');

    var iframe = el.find('iframe');
    var control = el.find($('[data-video-control="close"]'));

    play.on('click', function (e) {
      e.preventDefault();

      var link = $(this).data('video-link') + '?autoplay=1';

      $('.js-video-wrapper').hide();

      $(this).parent().parent().animate({ top: -$(this).parent().parent().outerHeight() }, 800, function () {
        iframe.attr('src', link);
        iframe.show();
        control.show();
      });
    });

    control.on('click', function () {
      control.hide();

      play.parent().parent().animate({ top: 0}, 800, function () {
        $('.js-video-wrapper').show();
        iframe.hide();
        iframe.attr('src', '');
      });
    });
  });
});

/* Product v1 */
jQuery(document).ready(function($) {
  $('.js-product-v1').slick({
    arrows: true,
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });
});

// product-v4
jQuery(document).ready(function($) {
  $('.js-product-v4').slick({
    infinite: true,
    slidesToShow: 4,
    arrows: true,
    slidesToScroll: 1,
    dots: false,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  });
});

//Product v5
$(document).ready(function() {
  $('.js-product-v5').slick({
    centerMode: true,
    infinite: true,
    centerPadding: '60px',
    slidesToShow: 1,
    dots: true,
    speed: 500,
    variableWidth: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          centerMode: false,
          arrows: false,
        }

      }
    ]
  });
});

//About Us and Contact Us js
jQuery(document).ready(function($) {
  $('.js-aboutus-testimonial').slick({
    slidesToShow: 1,
    arrows: true,
    slidesToScroll: 1,
    dots: false,
    responsive: [
      {
        breakpoint: 676,
        settings: {
          dots: true,
          arrows: false
        }
      }
    ]
  });
  $('.js-aboutus-brand').slick({
    slidesToShow: 5,
    arrows: true,
    slidesToScroll: 1,
    dots: false,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          dots: true,
          arrows: false
        }
      }
    ]
  });
  
  if ($("#engoj-google-map").length) {

    function initialize() 
    {
      // Center
      var center = new google.maps.LatLng(33.3209127, -111.8005377);

      // Map Options      
      var mapOptions = {
        zoom: 15,
        center: center,
        scrollwheel: false,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        styles: [{
          "featureType": "landscape",
          "stylers": [{
            "saturation": -100
          }, {
            "lightness": 65
          }, {
            "visibility": "on"
          }]
        }, {
          "featureType": "poi",
          "stylers": [{
            "saturation": -100
          }, {
            "lightness": 51
          }, {
            "visibility": "simplified"
          }]
        }, {
          "featureType": "road.highway",
          "stylers": [{
            "saturation": -100
          }, {
            "visibility": "simplified"
          }]
        }, {
          "featureType": "road.arterial",
          "stylers": [{
            "saturation": -100
          }, {
            "lightness": 30
          }, {
            "visibility": "on"
          }]
        }, {
          "featureType": "road.local",
          "stylers": [{
            "saturation": -100
          }, {
            "lightness": 40
          }, {
            "visibility": "on"
          }]
        }, {
          "featureType": "transit",
          "stylers": [{
            "saturation": -100
          }, {
            "visibility": "simplified"
          }]
        }, {
          "featureType": "administrative.province",
          "stylers": [{
            "visibility": "off"
          }]
        }, {
          "featureType": "water",
          "elementType": "labels",
          "stylers": [{
            "visibility": "on"
          }, {
            "lightness": -25
          }, {
            "saturation": -100
          }]
        }, {
          "featureType": "water",
          "elementType": "geometry",
          "stylers": [{
            "hue": "#ffff00"
          }, {
            "lightness": -25
          }, {
            "saturation": -97
          }]
        }],
      };
      var map = new google.maps.Map(document.getElementById('engoj-google-map'),mapOptions);
      var marker = new Marker({
        map: map,
        position: new google.maps.LatLng(33.3209127, -111.8005377),
        icon: {
          path: MAP_PIN,
          fillColor: '#cb2028',
          fillOpacity: 1,
          strokeColor: '',
          strokeWeight: 0
        },
        map_icon_label: '<span class="map-icon map-icon-point-of-interest"></span>'
      });
    }

    google.maps.event.addDomListener(window, 'load', initialize);
  }
  
  /* Buger menu */
  $(".js-burger-menu").click(function(){
    $(this).toggleClass('active'); 
    $(".js-navbar-wrapper").toggleClass('active-wrapper');
    $(".engoj-slide-menu").toggleClass('active'); 
    $(".engo-logo").toggleClass('active-logo');
    $(".engo-icon-search").toggleClass('active-icon');
    $(".engo-icon-cart-text").toggleClass('active-text');
  });
});






