(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

module.exports = (function (window, document, undefined) {
  "use strict";

  function setCookie(name, value, expires) {
    if (typeof expires === 'number') {
      var d = new Date();
      d.setTime(d.getTime() + expires * 24 * 60 * 60 * 1000);
      var expires = "expires=" + d.toUTCString();
      document.cookie = name + "=" + value + "; " + expires + "; path=/";
    } else {
      document.cookie = name + "=" + value + "; path=/";
    }
  }

  function getCookie(name) {
    var value = "; " + document.cookie;
    var parts = value.split("; " + name + "=");
    if (parts.length == 2) return parts.pop().split(";").shift();
  }

  return {
    setCookie: setCookie,
    getCookie: getCookie
  };
})(window, document);

},{}],2:[function(require,module,exports){
"use strict";

var externalUrlCheck = (function () {
        var domainRe = /https?:\/\/((?:[\w\d-]+\.)+[\w\d]{2,})/i;
        return function (url) {

                if (!url.length || url[0] === "#") {
                        return false;
                }

                function domain(url) {
                        return domainRe.exec(url)[1];
                }

                return domain(location.href) !== domain(url);
        };
})();

module.exports = externalUrlCheck;

},{}],3:[function(require,module,exports){
'use strict';

module.exports = function (name) {
    if (Handlebars.templates === undefined || Handlebars.templates[name] === undefined) {
        $.ajax({
            url: themePath + '/js/templates/' + name + '.html',
            success: function success(data) {
                if (Handlebars.templates === undefined) {
                    Handlebars.templates = {};
                }
                Handlebars.templates[name] = Handlebars.compile(data);
            },
            async: false
        });
    }
    return Handlebars.templates[name];
};

},{}],4:[function(require,module,exports){
"use strict";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _modulesAccordionsJs = require("./modules/accordions.js");

var _modulesAccordionsJs2 = _interopRequireDefault(_modulesAccordionsJs);

var _modulesActionMapJs = require("./modules/actionMap.js");

var _modulesActionMapJs2 = _interopRequireDefault(_modulesActionMapJs);

var _modulesBack2topJs = require("./modules/back2top.js");

var _modulesBack2topJs2 = _interopRequireDefault(_modulesBack2topJs);

var _modulesBannerCarouselJs = require("./modules/bannerCarousel.js");

var _modulesBannerCarouselJs2 = _interopRequireDefault(_modulesBannerCarouselJs);

var _modulesClickableJs = require("./modules/clickable.js");

var _modulesClickableJs2 = _interopRequireDefault(_modulesClickableJs);

var _modulesDropdownJs = require("./modules/dropdown.js");

var _modulesDropdownJs2 = _interopRequireDefault(_modulesDropdownJs);

var _modulesEmergencyAlertsJs = require("./modules/emergencyAlerts.js");

var _modulesEmergencyAlertsJs2 = _interopRequireDefault(_modulesEmergencyAlertsJs);

var _modulesFormValidationJs = require("./modules/formValidation.js");

var _modulesFormValidationJs2 = _interopRequireDefault(_modulesFormValidationJs);

var _modulesHideAlertJs = require("./modules/hideAlert.js");

var _modulesHideAlertJs2 = _interopRequireDefault(_modulesHideAlertJs);

var _modulesKeywordSearchJs = require("./modules/keywordSearch.js");

var _modulesKeywordSearchJs2 = _interopRequireDefault(_modulesKeywordSearchJs);

var _modulesMainNavJs = require("./modules/mainNav.js");

var _modulesMainNavJs2 = _interopRequireDefault(_modulesMainNavJs);

var _modulesMainNavPilotJs = require("./modules/mainNavPilot.js");

var _modulesMainNavPilotJs2 = _interopRequireDefault(_modulesMainNavPilotJs);

var _modulesMobileNavJs = require("./modules/mobileNav.js");

var _modulesMobileNavJs2 = _interopRequireDefault(_modulesMobileNavJs);

var _modulesResponsiveVideoJs = require("./modules/responsiveVideo.js");

var _modulesResponsiveVideoJs2 = _interopRequireDefault(_modulesResponsiveVideoJs);

var _modulesRichTextJs = require("./modules/richText.js");

var _modulesRichTextJs2 = _interopRequireDefault(_modulesRichTextJs);

var _modulesScrollAnchorsJs = require("./modules/scrollAnchors.js");

var _modulesScrollAnchorsJs2 = _interopRequireDefault(_modulesScrollAnchorsJs);

var _modulesSiteSettingsJs = require("./modules/siteSettings.js");

var _modulesSiteSettingsJs2 = _interopRequireDefault(_modulesSiteSettingsJs);

var _modulesUtilNavJs = require("./modules/utilNav.js");

var _modulesUtilNavJs2 = _interopRequireDefault(_modulesUtilNavJs);

var _modulesZoomControlsJs = require("./modules/zoomControls.js");

var _modulesZoomControlsJs2 = _interopRequireDefault(_modulesZoomControlsJs);

},{"./modules/accordions.js":5,"./modules/actionMap.js":6,"./modules/back2top.js":7,"./modules/bannerCarousel.js":8,"./modules/clickable.js":9,"./modules/dropdown.js":10,"./modules/emergencyAlerts.js":11,"./modules/formValidation.js":12,"./modules/hideAlert.js":13,"./modules/keywordSearch.js":14,"./modules/mainNav.js":15,"./modules/mainNavPilot.js":16,"./modules/mobileNav.js":17,"./modules/responsiveVideo.js":18,"./modules/richText.js":19,"./modules/scrollAnchors.js":20,"./modules/siteSettings.js":21,"./modules/utilNav.js":22,"./modules/zoomControls.js":23}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

exports['default'] = (function (window, document, $, undefined) {

  $('.js-accordion').each(function () {
    var $el = $(this),
        $link = $el.find('.js-accordion-link'),
        $content = $el.find('.js-accordion-content'),
        active = refreshValue($el);

    $link.on('click', function (e) {
      if (active) {
        e.preventDefault();
        if ($el.hasClass('is-open')) {
          $content.stop(true, true).slideUp();
        } else {
          $content.stop(true, true).slideDown();
        }
        $el.toggleClass('is-open');
      }
    });

    $(window).resize(function () {
      var temp = refreshValue($el);

      if (temp !== active && !temp) {
        $content.removeAttr('style');
        $el.removeClass('is-open');
      }

      active = temp;
    }).resize();
  });

  function refreshValue($el) {
    var value = "true";
    try {
      value = window.getComputedStyle($el[0], ':before').getPropertyValue('content').replace(/\"/g, '');
    } catch (err) {}
    return value === "false" ? false : true;
  };
})(window, document, jQuery);

;
module.exports = exports['default'];

},{}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _helpersGetHandlebarTemplateJs = require("../helpers/getHandlebarTemplate.js");

var _helpersGetHandlebarTemplateJs2 = _interopRequireDefault(_helpersGetHandlebarTemplateJs);

exports['default'] = (function (window, document, $, undefined) {

  // only run this code if there is a google map component on the page
  if (!$('.js-google-map').length || typeof googleMapData === 'undefined') {
    return;
  }

  var compiledTemplate = (0, _helpersGetHandlebarTemplateJs2['default'])('googleMapInfo');

  // after the api is loaded this function is called
  window.initMap = function () {

    $(".js-google-map").each(function (i) {
      // get the maps data
      var rawData = googleMapData[i];

      // *** Create the Map *** //
      // map defaults
      var initMapData = {
        scrollwheel: false
      };
      // create map Data
      var mapData = Object.assign({}, rawData.map, initMapData);

      var map = new google.maps.Map(this, mapData);

      // *** Add Markers with popups *** //
      rawData.markers.forEach(function (d) {
        var markerData = Object.assign({ map: map }, d);

        var marker = new google.maps.Marker(markerData);

        var infoData = infoTransform(markerData.infoWindow);
        var template = compiledTemplate(infoData);
        var infoWindow = new google.maps.InfoWindow({
          content: template
        });

        marker.addListener('click', function () {
          infoWindow.open(map, marker);
        });
      });

      // let infoWindow = new google.maps.InforWindow
    });
  };

  function infoTransform(data) {
    var infoData = {
      phoneFormatted: formatPhone(data.phone),
      faxFormatted: formatPhone(data.fax)
    };
    return Object.assign({}, data, infoData);
  }

  function formatPhone(phone) {
    var phoneTemp = phone[0] === '1' ? phone.substring(1) : phone;
    return phoneTemp.replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3');
  }

  // load Google's api
  var script = document.createElement('script');
  script.src = "//maps.googleapis.com/maps/api/js?key=AIzaSyC-WIoNfS6fh7TOtOqpDEgKST-W_NBebTk&callback=initMap";
  document.getElementsByTagName('head')[0].appendChild(script);
})(window, document, jQuery);

;
module.exports = exports['default'];

},{"../helpers/getHandlebarTemplate.js":3}],7:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

exports['default'] = (function (window, document, $, undefined) {
  var $footer = $('.js-footer'),
      visibleThreshold = 250,
      staticThreshold = 50;

  $(".js-back2top").each(function () {
    var $el = $(this);

    $el.on('click', function (e) {
      e.preventDefault();
      try {
        $("html, body").stop(true, true).animate({ scrollTop: 0 }, '750');
      } catch (e) {
        $('body').scrollTop(0);
      }
      return false;
    });

    $(window).on('scroll', function () {
      // if we've exceeded the threshold of scrolling
      // from the top, show control
      var scrollTop = $(window).scrollTop();

      if (scrollTop > visibleThreshold) {
        $el.removeClass('is-hidden');
      } else {
        $el.addClass('is-hidden');
      }
    });
  });
})(window, document, jQuery);

;
module.exports = exports['default'];

},{}],8:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

exports['default'] = (function (window, document, $, undefined) {

  $('.js-banner-carousel').each(function () {
    var $el = $(this);

    if ($el.children().length <= 1) {
      return;
    }

    var slider = $el.slick({
      dots: true,
      prevArrow: '<button type="button" class="slick-prev"></button>',
      nextArrow: '<button type="button" class="slick-next"></button>'
    });
  });
})(window, document, jQuery);

;
module.exports = exports['default'];

},{}],9:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

exports['default'] = (function (window, document, $, undefined) {
  $('.js-clickable').each(function () {
    // if the this is clicked
    $(this).click(function (event) {
      event.preventDefault();

      var $el = $(this).find('.js-clickable-link').first();
      // find the destination
      var dest = $el.attr("href");
      // if the target attribute exists
      if ("_blank" === $el.attr("target")) {
        // launch new tab/window
        window.open(dest);
      } else {
        // otherwise redirect to a new page
        window.location = dest;
      }
    });
  });
})(window, document, jQuery);

;
module.exports = exports['default'];

},{}],10:[function(require,module,exports){
// ****** basic custom select that uses mobile select keyboard ******
"use strict";

var dropdownMenu = document.querySelectorAll(".js-dropdown");

if (null !== dropdownMenu) {

  var _length = dropdownMenu.length;

  var _loop = function (i) {
    var parentEl = dropdownMenu[i],
        selectEl = parentEl.querySelector(".js-dropdown-select"),
        link = parentEl.querySelector(".js-dropdown-link");

    if (null === selectEl || null === link) {
      return "break";
    }

    selectEl.onchange = function () {
      var elem = typeof this.selectedIndex === "undefined" ? window.event.srcElement : this;
      link.innerText = elem.text || elem.options[elem.selectedIndex].text;
    };
  };

  for (var i = 0; i < _length; i++) {
    var _ret = _loop(i);

    if (_ret === "break") break;
  }
}

},{}],11:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _helpersCookiesJs = require("../helpers/cookies.js");

var _helpersCookiesJs2 = _interopRequireDefault(_helpersCookiesJs);

exports['default'] = (function (window, document, $, undefined) {

  $('.js-emergency-alerts').each(function () {
    var $el = $(this),
        open = true,
        id = $el.data('id'),
        cookieName = 'emergency-alerts' + id,
        cookieValue = _helpersCookiesJs2['default'].getCookie(cookieName);

    if (typeof cookieValue != 'undefined' && cookieValue === 'false') {
      // cookieValue is a string so we can't use the value directly
      open = false;
    }
    if (open) {
      // expand the menu
      $el.find('.js-accordion-link').trigger('click');
    }

    $el.on('click', '.js-accordion-link', function () {
      // toggle the current state
      open = !open;
      // update open/close state cookie
      // leave off third argument to make it expire on session
      _helpersCookiesJs2['default'].setCookie(cookieName, open);
    });
  });
})(window, document, jQuery);

;
module.exports = exports['default'];

},{"../helpers/cookies.js":1}],12:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

exports['default'] = (function (window, document, $, undefined) {

  $('form').each(function () {
    var $form = $(this),
        requiredFields = [];

    // find all required fields
    $('.js-is-required').each(function () {
      var $field = $(this),
          type = $field.data('type'),
          value = $field.val(),
          valid = validate(value, type);

      requiredFields.push({ type: type, valid: valid, $el: $field });

      $(this).data('index', requiredFields.length);
    });

    // if there aren't any required fields, don't do anything
    if (requiredFields.length === 0) {
      return;
    }

    $form.on('submit', function (e) {
      var submitForm = true;

      // validate each required field
      requiredFields.forEach(function (item) {
        var value = item.$el.val();

        item.valid = validate(value, item.type);

        if (item.valid) {
          item.$el.attr('data-valid', 'is-valid');
        } else {
          submitForm = false;
          item.$el.attr('data-valid', 'is-invalid');
        }
      });

      if (!submitForm) {
        // prevent the form from submitting
        e.preventDefault();
        // show the form error message
        // or blink the message if it is already visible
        $form.find('.js-error-msg').attr('hidden', true);
        setTimeout(function () {
          $form.find('.js-error-msg').removeAttr('hidden');
        }, 100);
      }
    });
  });

  function validate(value) {
    var type = arguments.length <= 1 || arguments[1] === undefined ? 'text' : arguments[1];

    var valid = false;

    switch (type) {
      case 'email':
        valid = !!value.match(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]+/i);
        break;
      default:
        valid = value.length !== 0;
    }

    return valid;
  }
})(window, document, jQuery);

;
module.exports = exports['default'];

},{}],13:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _helpersCookiesJs = require("../helpers/cookies.js");

var _helpersCookiesJs2 = _interopRequireDefault(_helpersCookiesJs);

exports['default'] = (function (window, document, $, undefined) {

  $('.js-header-alert').each(function () {
    var $el = $(this),
        $link = $el.find('.js-header-alert-link'),
        id = $el.data('id'),
        cookieName = "Alert" + id,
        cookieExpires = 365,
        cookieValue = _helpersCookiesJs2['default'].getCookie(cookieName);

    // show alert if cookie doesn't exist
    if (cookieValue !== "hide") {
      $el.fadeIn().fadeOut('fast').fadeIn('slow');
    }

    // hide the alert
    $link.on('click', function () {
      _helpersCookiesJs2['default'].setCookie(cookieName, "hide", cookieExpires);
      $el.stop(true, true).fadeOut();
    });
  });
})(window, document, jQuery);

;
module.exports = exports['default'];

},{"../helpers/cookies.js":1}],14:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

exports['default'] = (function (window, document, $, undefined) {

  $('.js-keyword-search').each(function () {
    var $el = $(this),
        $form = $el.find('form');

    $form.on('submit', function (e) {
      e.preventDefault();
      $el.addClass('is-dirty');
    });

    $form.on('reset', function () {
      $el.removeClass('is-dirty');
    });
  });
})(window, document, jQuery);

;
module.exports = exports['default'];

},{}],15:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = (function (window, document, $, undefined) {

  var windowWidth = window.innerWidth;

  $(window).resize(function () {
    windowWidth = window.innerWidth;
  });

  $('.js-main-nav').each(function () {
    var openClass = "is-open",
        closeClass = "is-closed",
        submenuClass = "show-submenu",
        $parent = $(this),
        $mainNavToggle = $parent.find('.js-main-nav-toggle'),
        $mainNavItems = $parent.find('.js-main-nav-toggle, .js-main-nav-top-link'),
        previousKey = null,
        breakpoint = 800; // matches CSS breakpoint for Main Nav

    $mainNavItems.on('keydown', function (e) {
      if (windowWidth <= breakpoint) {
        // only for desktop
        return;
      }

      // Grab all the DOM info we need...
      var $link = $(this),
          $topLevelLinks = $parent.find('.ma__main-nav__top-link'),
          open = $link.hasClass(openClass),
          $openContent = $parent.find('.js-main-nav-content.' + openClass),
          $focusedElement = $(document.activeElement),

      // relevant if open..
      $topLevelItem = $focusedElement.parents('.ma__main-nav__item'),
          $topLevelLink = $topLevelItem.find('.ma__main-nav__top-link'),
          $dropdownLinks = $link.find('.ma__main-nav__subitem .ma__main-nav__link'),
          focusIndexInDropdown = $dropdownLinks.index($focusedElement);

      // down arrow key
      if (e.keyCode === 40) {
        // hide content
        // If menubar focus
        //  - Open pull down menu and select first menu item
        //
        // If dropdown focus
        //  - Select next menu item
        e.preventDefault();
        if (open) {
          if (focusIndexInDropdown === $dropdownLinks.length - 1) {
            return;
          } else {
            if (focusIndexInDropdown === -1) {
              $dropdownLinks[1].focus();
            } else {
              $dropdownLinks[focusIndexInDropdown + 1].focus();
            }
            return;
          }
        } else {
          show($topLevelItem.find('.js-main-nav-content'));
          $link.addClass(openClass);
          if ($dropdownLinks[1]) {
            $dropdownLinks[1].focus();
          }
          return;
        }
      }

      if (e.keyCode === 38) {
        // up arrow
        // hide content
        // If menubar focus
        //  - Open pull down menu and select first menu item
        //
        // If dropdown focus
        //  - Select previous menu item
        e.preventDefault();
        if (open) {
          if (focusIndexInDropdown <= 1) {
            // not 0 bc of hidden first link
            hide($openContent);
            $topLevelLink.focus();
            return;
          } else {
            $dropdownLinks[focusIndexInDropdown - 1].focus();
            return;
          }
        } else {
          show($topLevelItem.find('.js-main-nav-content'));
          $link.addClass(openClass);
          return;
        }
      }

      // esc key
      if (e.keyCode === 27) {
        // Close menu and return focus to menubar
        e.preventDefault();
        hide($openContent);
        $link.removeClass(openClass);
        $topLevelLink.focus();
        return;
      }

      // left arrow key
      if (e.keyCode === 37) {
        e.preventDefault();
        // hide content
        // If menubar focus
        //  - Previous menubar item
        //
        // If dropdown focus
        //  - Open previous pull down menu and select first item
        hide($openContent);
        var index = $topLevelLinks.index($topLevelLink) - 1;
        if ($topLevelLinks[index]) {
          $topLevelLinks[index].focus();
        }
        return;
      }
      // right arrow key
      if (e.keyCode === 39) {
        e.preventDefault();
        // hide content
        // If menubar focus
        //  - Next menubar item
        //
        // If dropdown focus
        //  - Open next pull menu and select first item
        hide($openContent);
        var index = $topLevelLinks.index($topLevelLink) + 1;
        if ($topLevelLinks[index]) {
          $topLevelLinks[index].focus();
        }
        return;
      }

      // key code 9 is the tab key
      if (open || typeof e.keycode !== "undefined" && e.keycode !== 9) {
        return;
      }

      // hide content
      hide($openContent);
      // add open class to this item
      $(this).addClass(openClass);
      // add open class to the correct content based on index
      show($link.find('.js-main-nav-content'));
    });
    $mainNavItems.on('mouseenter', function (e) {
      if (windowWidth > breakpoint) {
        var $openContent = $(this).find('.js-main-nav-content');
        show($openContent);
      }
    });
    $mainNavItems.on('mouseleave', function (e) {
      if (windowWidth > breakpoint) {
        var $openContent = $(this).find('.js-main-nav-content');
        hide($openContent);
      }
    });
    $mainNavToggle.children('a').on('click', function (e) {
      if (windowWidth <= breakpoint) {
        e.preventDefault();
        var $content = $(this).parent().find('.js-main-nav-content');
        // add open class to this item
        $(this).parent().addClass(openClass);
        show($content);
      }
    });
    $mainNavToggle.last().find('.js-main-nav-content li').last().find('a').on('keydown', function (e) {
      e.stopPropagation();
      // previous key was not a shift
      if (e.keyCode === 9 && previousKey !== 16) {
        // tab arrow\
        var $openContent = $parent.find('.js-main-nav-content.' + openClass);
        hide($openContent);
      }
      previousKey = e.keyCode;
    });

    $('.js-close-sub-nav').on('click', function () {
      var $openContent = $parent.find('.js-main-nav-content.' + openClass);
      hide($openContent);
    });

    // Hide any open submenu content when the sidebar menu is closed
    $('.js-header-menu-button').click(function () {
      var $openContent = $parent.find('.js-main-nav-content.' + openClass);
      hide($openContent);
    });

    function hide($content) {
      $('body').removeClass(submenuClass);
      $parent.find("." + openClass).removeClass(openClass);

      if (windowWidth <= breakpoint) {
        $content.addClass(closeClass);
      } else {
        $content.stop(true, true).slideUp('fast', function () {
          $content.addClass(closeClass).slideDown(0);
        });
      }
    }

    function show($content) {
      $('body').addClass(submenuClass);
      if (windowWidth <= breakpoint) {
        $content.addClass(openClass).removeClass(closeClass);
      } else {
        $content.stop(true, true).delay(200).slideUp(0, function () {
          $content.addClass(openClass).removeClass(closeClass).slideDown('fast');
        });
      }
    }
  });
})(window, document, jQuery);

;
module.exports = exports["default"];

},{}],16:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

exports['default'] = (function (window, document, $, undefined) {

  $('.js-main-nav').each(function () {
    var $parent = $(this),
        $mainNavToggle = $parent.find('.js-main-nav-toggle');

    // make root top-level links inert for pilot
    $mainNavToggle.children('a').on('click', function (e) {
      e.preventDefault();
    });

    // Ensure top-level links that are potential anchor links close the sidebar on mobile
    $parent.find('.js-main-nav-top-link').find('a').on('click', function () {
      $('.js-header-menu-button').trigger('click');
    });
  });
})(window, document, jQuery);

;
module.exports = exports['default'];

},{}],17:[function(require,module,exports){
// ****** Menu button ******
"use strict";

var menuButton = document.querySelector(".js-header-menu-button");

if (null !== menuButton) {
  menuButton.addEventListener("click", function (event) {
    event.preventDefault();
    document.querySelector("body").classList.toggle("show-menu");
  });
}

// ****** Main Header Search button on mobile should open the mobile menu  ******
var searchForm = document.querySelector(".js-header-search-menu .js-header-search-form");

if (null !== searchForm) {
  searchForm.addEventListener("submit", function (event) {
    if (window.innerWidth > 620) {
      return;
    }
    event.preventDefault();
    document.querySelector("body").classList.toggle("show-menu");
  });
}

},{}],18:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

exports['default'] = (function (window, document, $, undefined) {

  $('.js-ma-responsive-video').fitVids();
})(window, document, jQuery);

;
module.exports = exports['default'];

},{}],19:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _helpersExternalUrlCheckJs = require("../helpers/externalUrlCheck.js");

var _helpersExternalUrlCheckJs2 = _interopRequireDefault(_helpersExternalUrlCheckJs);

exports["default"] = (function (window, document, $, undefined) {

  $('.js-ma-rich-text table').wrap("<div class='ma__rich-text__table-wrapper'></div>");

  // get the external SVG link code
  fetch(themePath + '/images/svg-sprite/external-link.svg', {
    method: 'get',
    headers: new Headers({
      'Content-Type': 'text/plain'
    })
  }).then(function (response) {
    return response.text();
  }).then(function (data) {
    // find all external links that need an icon
    $('.js-ma-rich-text a').each(function () {
      var $el = $(this),
          href = $el.attr('href');

      if ((0, _helpersExternalUrlCheckJs2["default"])(href) && !$el.children().length) {
        // wrap the link in a span tag
        $el.wrap('<span class="ma__decorative-link"></span>');
        // append the SVG to the link
        $el.append('&nbsp;' + data);
      }
    });
  })["catch"](function (e) {
    console.error('external link rte code failing');
  });
})(window, document, jQuery);

;
module.exports = exports["default"];

},{"../helpers/externalUrlCheck.js":2}],20:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

exports['default'] = (function (window, document, $, undefined) {

  $(".js-scroll-anchors").each(function () {
    var $el = $(this),
        $elParent = $el.parent().css('position') === 'relative' ? $el.parent() : $el.parent().offsetParent(),
        elHeight = undefined,
        headerBuffer = 0,
        lowerLimit = undefined,
        upperLimit = undefined,
        debounceTimer = undefined,
        activeClass = "is-active",
        activeAnchor = 0,
        anchors = [],
        numAnchors = 0,
        isMobile = false,
        linkScrolling = false;

    setVariables();

    // default assumption as to where the screen will load
    $el.attr('data-sticky', 'top');

    // update variables one more time to catch any post page load changes
    window.setTimeout(function () {
      setVariables();
    }, 1000);

    $el.find('a').on('click', function (e) {
      e.preventDefault();

      // is the menu closed on mobile
      if (!$el.hasClass('is-open') && isMobile) {
        // just show the menu
        $el.addClass('is-open');
        return;
      }

      // find the location of the desired link and scroll the page
      var position = anchors[$(this).data('index')].position;
      // close the menu
      $el.removeClass('is-open');
      // remove active flag from other links
      $el.find('.' + activeClass).removeClass(activeClass);
      // mark this link as active
      $(this).addClass(activeClass);
      activeAnchor = $(this).data('index');
      // prevent the scroll event from updating active links
      linkScrolling = true;

      $("html,body").stop(true, true).animate({ scrollTop: position }, '750', function () {
        linkScrolling = false;
      });
    });

    $el.find(".js-scroll-anchors-toggle").on('click', function () {
      $el.toggleClass('is-open');
    });

    // make the links sticky
    $(window).resize(function () {
      if (typeof debounceTimer === "number") {
        window.clearTimeout(debounceTimer);
      }
      debounceTimer = window.setTimeout(function () {
        setVariables();
        setPosition();
        activateLink();
      }, 300);
    });

    $(window).scroll(function () {
      setPosition();
      activateLink();
    });

    function setVariables() {
      var topOffset = 0;

      headerBuffer = 0;
      elHeight = $el.height();
      upperLimit = $elParent.offset().top;
      isMobile = checkMobile($el);

      if ($elParent[0].hasAttribute("style") && !isMobile) {
        $elParent.removeAttr('style');
      }

      if (isMobile) {
        headerBuffer = $('.js-sticky-header').height() || 0;
        upperLimit -= headerBuffer;
        topOffset = elHeight;
      }

      lowerLimit = upperLimit + $elParent.outerHeight(true) - $el.height();

      // locate the position of all of the anchor targets
      anchors = new Array();
      $el.find('a').each(function (i, e) {
        var hash = this.hash,
            position = $(hash).offset() ? $(hash).offset().top - headerBuffer - topOffset : upperLimit;

        anchors[i] = { hash: hash, position: position };

        $(this).data('index', i);
      });

      // record the number of anchors for performance
      numAnchors = anchors.length;
    }

    function setPosition() {
      var windowTop = $(window).scrollTop(),
          attr = $el.attr('data-sticky'),
          top = attr !== 'top' && windowTop <= upperLimit,
          middle = attr !== 'middle' && windowTop < lowerLimit && windowTop > upperLimit,
          bottom = attr !== 'bottom' && windowTop >= lowerLimit;

      if ($elParent[0].hasAttribute("style") && !isMobile) {
        $elParent.removeAttr('style');
      }

      if (!$elParent[0].hasAttribute("style") && isMobile && attr === 'middle') {
        $el.css({'top': 0});
        $elParent.css({ 'paddingTop': elHeight });
      }

      if (top) {
        $el.attr('data-sticky', 'top');

        if (isMobile) {
          $elParent.removeAttr('style');
        }
      } else if (middle) {
        $el.attr('data-sticky', 'middle');
        $el.css({'top': 0});

        if (isMobile) {
          $elParent.css({ 'paddingTop': elHeight });
          $el.css({'top': 0});
        }
      } else if (bottom) {
        $el.attr('data-sticky', 'bottom');

        if (isMobile) {
          $elParent.removeAttr('style');
        }
      }
    }

    function activateLink() {
      // do we have more than one anchor
      if (numAnchors < 2 || linkScrolling) {
        return;
      }

      // get the current scroll position and offset by half the view port
      var windowTop = $(window).scrollTop() + window.innerHeight / 2,
          currentAnchor = activeAnchor;

      // is there a prev target
      // and
      // is the current scroll position above the current target
      if (currentAnchor > 0 && windowTop < anchors[activeAnchor].position) {
        // make the prev link active
        --activeAnchor;
      }

      // is there a next target
      // and
      // is the current scroll position below the next target
      else if (currentAnchor < numAnchors - 1 && windowTop > anchors[activeAnchor + 1].position) {
          // make the next link active
          ++activeAnchor;
        }

      if (currentAnchor !== activeAnchor) {
        // move the active flag
        $el.find('.' + activeClass).removeClass(activeClass);
        $el.find('a').eq(activeAnchor).addClass(activeClass);
      }
    }
  });

  function checkMobile($el) {
    var value = "true";
    try {
      value = window.getComputedStyle($el[0], ':before').getPropertyValue('content').replace(/\"/g, '');
    } catch (err) {}
    return value === "false" ? false : true;
  };
})(window, document, jQuery);

;
module.exports = exports['default'];

},{}],21:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _helpersCookiesJs = require("../helpers/cookies.js");

var _helpersCookiesJs2 = _interopRequireDefault(_helpersCookiesJs);

exports['default'] = (function (window, document, $, undefined) {

  $('.js-site-setting-form').each(function () {
    var $parent = $(this),
        $reset = $parent.find('.js-button-reset'),
        $themeSelect = $parent.find('.js-site-settings-theme select'),
        $langSelect = $parent.find('.js-site-settings-lang select'),
        $zoomControls = $parent.find('.js-zoom-controls'),
        defaultZoomVal = $zoomControls.find('input[type="radio"]:checked').val(),
        cookieName = "site-settings",
        cookieExpires = 365,
        cookieValue = JSON.parse(_helpersCookiesJs2['default'].getCookie(cookieName) || "{}");

    // set default values to match cookie values
    if (typeof cookieValue.zoom !== "undefined") {
      $zoomControls.find('input[value="' + cookieValue.zoom + '"]').prop('checked', true);
      $zoomControls.trigger('reset');
    }

    if (typeof cookieValue.theme !== "undefined") {
      $themeSelect.val(cookieValue.theme).trigger('change');
      $('body').attr('data-theme', cookieValue.theme);
    }

    if (typeof cookieValue.lang !== "undefined") {
      $langSelect.val(cookieValue.lang).trigger('change');
      $('html').attr('lang', cookieValue.lang);
    }

    $zoomControls.find('input[type="radio"]').on('change', function () {
      cookieValue.zoom = $(this).val();
      updateCookie();
    });

    $themeSelect.on('change', function () {
      cookieValue.theme = $(this).val();
      updateCookie();
      $('body').attr('data-theme', cookieValue.theme);
    });

    $langSelect.on('change', function () {
      cookieValue.lang = $(this).val();
      updateCookie();
      $('html').attr('lang', cookieValue.lang);
    });

    $reset.on("click", function (e) {
      cookieValue.zoom = defaultZoomVal;
      updateCookie();
      // trigger a reset of the custom form input JS
      setTimeout(function () {
        $zoomControls.trigger('reset');
        $parent.find('select').trigger('change');
      }, .1);
    });

    function updateCookie() {
      _helpersCookiesJs2['default'].setCookie(cookieName, JSON.stringify(cookieValue), cookieExpires);
    }
  });
})(window, document, jQuery);

;
module.exports = exports['default'];

},{"../helpers/cookies.js":1}],22:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = (function (window, document, $, undefined) {

  $('.js-util-nav').each(function () {
    var openClass = "is-open",
        closeClass = "is-closed",
        submenuClass = "show-utilmenu",
        $parent = $(this),
        waitForIt = null;

    $('.js-close-sub-nav').on('click', function () {
      var $openContent = $parent.find('.js-util-nav-content.' + openClass);
      hide($openContent);
    });

    $parent.find('.js-util-nav-toggle > a').on('click', function (e) {
      e.preventdefault;

      var open = $(this).hasClass(openClass),
          $content = $(this).next('.js-util-nav-content'),
          $openContent = $parent.find('.js-util-nav-content.' + openClass);

      // hide other content
      hide($openContent);

      if (open) {
        return;
      }
      // add open class to this item
      $(this).addClass(openClass);
      // add open class to the correct content based on index
      $content.attr("aria-hidden", "false");

      setTimeout(function () {
        $content.removeClass(closeClass).addClass(openClass);
        $('body').addClass(submenuClass);
      }, .1);
    });

    $parent.find('.js-close-util-nav').on('click', function (e) {
      e.preventDefault;

      hide($(this).closest('.js-util-nav-content'));
    });

    $('.js-close-sub-nav').on('click', function () {
      var $openContent = $parent.find('.js-util-nav-content.' + openClass);
      hide($openContent);
    });

    function hide($content) {
      $('body').removeClass(submenuClass);
      $parent.find("." + openClass).removeClass(openClass);
      $content.removeClass(openClass).addClass(closeClass);

      if (waitForIt) {
        clearTimeout(waitForIt);
      }
      waitForIt = setTimeout(function () {
        $content.attr("aria-hidden", "true");
      }, 1000);
    }
  });
})(window, document, jQuery);

;
module.exports = exports["default"];

},{}],23:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

exports['default'] = (function (window, document, $, undefined) {

  // zoom controls updates/adds a data-zoom attribute to the html tag
  // with the desired level of zooming requeted.  CSS applies a scale
  // transform based on that value.

  $(".js-zoom-controls").each(function () {

    var $parent = $(this),
        $inputs = $(this).find('input[type="radio"]');

    $('html').attr("data-zoom", getCurrentValue());

    $inputs.on('change', function () {
      $('html').attr("data-zoom", $(this).val());
    });

    $parent.on('reset', function () {
      $('html').attr("data-zoom", getCurrentValue());
    });

    function getCurrentValue() {
      return $parent.find('input[type="radio"]:checked').val();
    }
  });
})(window, document, jQuery);

;
module.exports = exports['default'];

},{}]},{},[4])


//# sourceMappingURL=index-generated.js.map
