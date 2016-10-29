define('app',['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var App = exports.App = function App() {
    _classCallCheck(this, App);

    this.message = 'Hello World!';
  };
});
define('environment',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    debug: true,
    testing: true
  };
});
define('main',['exports', './environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.configure = configure;

  var _environment2 = _interopRequireDefault(_environment);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  Promise.config({
    warnings: {
      wForgottenReturn: false
    }
  });

  function configure(aurelia) {
    aurelia.use.standardConfiguration().feature('resources');

    if (_environment2.default.debug) {
      aurelia.use.developmentLogging();
    }

    if (_environment2.default.testing) {
      aurelia.use.plugin('aurelia-testing');
    }

    aurelia.start().then(function () {
      return aurelia.setRoot();
    });
  }
});
define('resources/index',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.configure = configure;
  function configure(config) {}
});
define('text!app.css', ['module'], function(module) { module.exports = "/*\n * -- BASE STYLES --\n * Most of these are inherited from Base, but I want to change a few.\n */\nbody {\n    color: #333;\n}\n\n\n\na {\n    text-decoration: none;\n    color: #1b98f8;\n}\n\n\n/*\n * -- HELPER STYLES --\n * Over-riding some of the .pure-button styles to make my buttons look unique\n */\n.primary-button,\n.secondary-button {\n    -webkit-box-shadow: none;\n    -moz-box-shadow: none;\n    box-shadow: none;\n    border-radius: 20px;\n}\n.primary-button {\n    color: #fff;\n    background: #1b98f8;\n    margin: 1em 0;\n}\n.secondary-button {\n    background: #fff;\n    border: 1px solid #ddd;\n    color: #666;\n    padding: 0.5em 2em;\n    font-size: 80%;\n}\n\n/*\n * -- LAYOUT STYLES --\n * This layout consists of three main elements, `#nav` (navigation bar), `#list` (email list), and `#main` (email content). All 3 elements are within `#layout`\n */\n#layout, #nav, #list, #main {\n    margin: 0;\n    padding: 0;\n}\n\n/* Make the navigation 100% width on phones */\n#nav {\n    width: 100%;\n    height: 40px;\n    position: relative;\n    background: rgb(37, 42, 58);\n    text-align: center;\n}\n/* Show the \"Menu\" button on phones */\n#nav .nav-menu-button {\n    display: block;\n    top: 0.5em;\n    right: 0.5em;\n    position: absolute;\n}\n\n/* When \"Menu\" is clicked, the navbar should be 80% height */\n#nav.active {\n    height: 80%;\n}\n/* Don't show the navigation items... */\n.nav-inner {\n    display: none;\n}\n\n/* ...until the \"Menu\" button is clicked */\n#nav.active .nav-inner {\n    display: block;\n    padding: 2em 0;\n}\n\n\n/*\n * -- NAV BAR STYLES --\n * Styling the default .pure-menu to look a little more unique.\n */\n#nav .pure-menu {\n    background: transparent;\n    border: none;\n    text-align: left;\n}\n    #nav .pure-menu-link:hover,\n    #nav .pure-menu-link:focus {\n        background: rgb(55, 60, 90);\n    }\n    #nav .pure-menu-link {\n        color: #fff;\n        margin-left: 0.5em;\n    }\n    #nav .pure-menu-heading {\n        border-bottom: none;\n        font-size:110%;\n        color: rgb(75, 113, 151);\n    }\n\n\n/*\n * -- EMAIL STYLES --\n * Styles relevant to the email messages, labels, counts, and more.\n */\n.email-count {\n    color: rgb(75, 113, 151);\n}\n\n.email-label-personal,\n.email-label-work,\n.email-label-travel {\n    width: 15px;\n    height: 15px;\n    display: inline-block;\n    margin-right: 0.5em;\n    border-radius: 3px;\n}\n.email-label-personal {\n    background: #ffc94c;\n}\n.email-label-work {\n    background: #41ccb4;\n}\n.email-label-travel {\n    background: #40c365;\n}\n\n\n/* Email Item Styles */\n.email-item {\n    padding: 0.9em 1em;\n    border-bottom: 1px solid #ddd;\n    border-left: 6px solid transparent;\n}\n    .email-avatar {\n        border-radius: 3px;\n        margin-right: 0.5em;\n    }\n    .email-name,\n    .email-subject {\n        margin: 0;\n    }\n    .email-name {\n        text-transform: uppercase;\n        color: #999;\n    }\n    .email-desc {\n        font-size: 80%;\n        margin: 0.4em 0;\n    }\n\n.email-item-selected {\n    background: #eee;\n}\n.email-item-unread {\n    border-left: 6px solid #1b98f8;\n}\n\n/* Email Content Styles */\n.email-content-header, .email-content-body, .email-content-footer {\n    padding: 1em 2em;\n}\n    .email-content-header {\n        border-bottom: 1px solid #ddd;\n    }\n\n        .email-content-title {\n            margin: 0.5em 0 0;\n        }\n        .email-content-subtitle {\n            font-size: 1em;\n            margin: 0;\n            font-weight: normal;\n        }\n            .email-content-subtitle span {\n                color: #999;\n            }\n    .email-content-controls {\n        margin-top: 2em;\n        text-align: right;\n    }\n        .email-content-controls .secondary-button {\n            margin-bottom: 0.3em;\n        }\n\n    .email-avatar {\n        width: 40px;\n        height: 40px;\n    }\n\n\n/*\n * -- TABLET (AND UP) MEDIA QUERIES --\n * On tablets and other medium-sized devices, we want to customize some\n * of the mobile styles.\n */\n@media (min-width: 40em) {\n\n    /* Move the layout over so we can fit the nav + list in on the left */\n    #layout {\n        padding-left:500px; /* \"left col (nav + list)\" width */\n        position: relative;\n    }\n\n    /* These are position:fixed; elements that will be in the left 500px of the screen */\n    #nav, #list {\n        position: fixed;\n        top: 0;\n        bottom: 0;\n        overflow: auto;\n    }\n    #nav {\n        margin-left:-500px; /* \"left col (nav + list)\" width */\n        width:150px;\n        height: 100%;\n    }\n\n    /* Show the menu items on the larger screen */\n    .nav-inner {\n        display: block;\n        padding: 2em 0;\n    }\n\n    /* Hide the \"Menu\" button on larger screens */\n    #nav .nav-menu-button {\n        display: none;\n    }\n\n    #list {\n        margin-left: -350px;\n        width: 100%;\n        height: 33%;\n        border-bottom: 1px solid #ddd;\n    }\n\n    #main {\n        position: fixed;\n        top: 33%;\n        right: 0;\n        bottom: 0;\n        left: 150px;\n        overflow: auto;\n        width: auto; /* so that it's not 100% */\n    }\n\n}\n\n/*\n * -- DESKTOP (AND UP) MEDIA QUERIES --\n * On desktops and other large-sized devices, we want to customize some\n * of the mobile styles.\n */\n@media (min-width: 60em) {\n\n    /* This will take up the entire height, and be a little thinner */\n    #list {\n        margin-left: -350px;\n        width:350px;\n        height: 100%;\n        border-right: 1px solid #ddd;\n    }\n\n    /* This will now take up it's own column, so don't need position: fixed; */\n    #main {\n        position: static;\n        margin: 0;\n        padding: 0;\n    }\n}\n"; });
define('text!app.html', ['module'], function(module) { module.exports = "<template>\n <require from=\"app.css\"></require>\n <div id=\"layout\" class=\"content pure-g\">\n    <div id=\"nav\" class=\"pure-u\">\n        <a href=\"#\" class=\"nav-menu-button\">Menu</a>\n\n        <div class=\"nav-inner\">\n            <button class=\"primary-button pure-button\">Compose</button>\n\n            <div class=\"pure-menu\">\n                <ul class=\"pure-menu-list\">\n                    <li class=\"pure-menu-item\"><a href=\"#\" class=\"pure-menu-link\">Inbox <span class=\"email-count\">(2)</span></a></li>\n                    <li class=\"pure-menu-item\"><a href=\"#\" class=\"pure-menu-link\">Important</a></li>\n                    <li class=\"pure-menu-item\"><a href=\"#\" class=\"pure-menu-link\">Sent</a></li>\n                    <li class=\"pure-menu-item\"><a href=\"#\" class=\"pure-menu-link\">Drafts</a></li>\n                    <li class=\"pure-menu-item\"><a href=\"#\" class=\"pure-menu-link\">Trash</a></li>\n                    <li class=\"pure-menu-heading\">Labels</li>\n                    <li class=\"pure-menu-item\"><a href=\"#\" class=\"pure-menu-link\"><span class=\"email-label-personal\"></span>Personal</a></li>\n                    <li class=\"pure-menu-item\"><a href=\"#\" class=\"pure-menu-link\"><span class=\"email-label-work\"></span>Work</a></li>\n                    <li class=\"pure-menu-item\"><a href=\"#\" class=\"pure-menu-link\"><span class=\"email-label-travel\"></span>Travel</a></li>\n                </ul>\n            </div>\n        </div>\n    </div>\n\n    <div id=\"list\" class=\"pure-u-1\">\n        <div class=\"email-item email-item-selected pure-g\">\n            <div class=\"pure-u\">\n                <img class=\"email-avatar\" alt=\"Tilo Mitra&#x27;s avatar\" height=\"64\" width=\"64\" src=\"resources/img/common/tilo-avatar.png\">\n            </div>\n\n            <div class=\"pure-u-3-4\">\n                <h5 class=\"email-name\">Tilo Mitra</h5>\n                <h4 class=\"email-subject\">Hello from Toronto</h4>\n                <p class=\"email-desc\">\n                    Hey, I just wanted to check in with you from Toronto. I got here earlier today.\n                </p>\n            </div>\n        </div>\n\n        <div class=\"email-item email-item-unread pure-g\">\n            <div class=\"pure-u\">\n                <img class=\"email-avatar\" alt=\"Eric Ferraiuolo&#x27;s avatar\" height=\"64\" width=\"64\" src=\"resources/img/common/ericf-avatar.png\">\n            </div>\n\n            <div class=\"pure-u-3-4\">\n                <h5 class=\"email-name\">Eric Ferraiuolo</h5>\n                <h4 class=\"email-subject\">Re: Pull Requests</h4>\n                <p class=\"email-desc\">\n                    Hey, I had some feedback for pull request #51. We should center the menu so it looks better on mobile.\n                </p>\n            </div>\n        </div>\n\n        <div class=\"email-item email-item-unread pure-g\">\n            <div class=\"pure-u\">\n                <img class=\"email-avatar\" alt=\"YUI&#x27;s avatar\" height=\"64\" width=\"64\" src=\"resources/img/common/yui-avatar.png\">\n            </div>\n\n            <div class=\"pure-u-3-4\">\n                <h5 class=\"email-name\">YUI Library</h5>\n                <h4 class=\"email-subject\">You have 5 bugs assigned to you</h4>\n                <p class=\"email-desc\">\n                    Duis aute irure dolor in reprehenderit in voluptate velit essecillum dolore eu fugiat nulla.\n                </p>\n            </div>\n        </div>\n\n        <div class=\"email-item pure-g\">\n            <div class=\"pure-u\">\n                <img class=\"email-avatar\" alt=\"Reid Burke&#x27;s avatar\" height=\"64\" width=\"64\" src=\"resources/img/common/reid-avatar.png\">\n            </div>\n\n            <div class=\"pure-u-3-4\">\n                <h5 class=\"email-name\">Reid Burke</h5>\n                <h4 class=\"email-subject\">Re: Design Language</h4>\n                <p class=\"email-desc\">\n                    Excepteur sint occaecat cupidatat non proident, sunt in culpa.\n                </p>\n            </div>\n        </div>\n\n        <div class=\"email-item pure-g\">\n            <div class=\"pure-u\">\n                <img class=\"email-avatar\" alt=\"Andrew Wooldridge&#x27;s avatar\" height=\"64\" width=\"64\" src=\"resources/img/common/andrew-avatar.png\">\n            </div>\n\n            <div class=\"pure-u-3-4\">\n                <h5 class=\"email-name\">Andrew Wooldridge</h5>\n                <h4 class=\"email-subject\">YUI Blog Updates?</h4>\n                <p class=\"email-desc\">\n                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.\n                </p>\n            </div>\n        </div>\n\n        <div class=\"email-item pure-g\">\n            <div class=\"pure-u\">\n                <img class=\"email-avatar\" alt=\"Yahoo! Finance&#x27;s Avatar\" height=\"64\" width=\"64\" src=\"resources/img/common/yfinance-avatar.png\">\n            </div>\n\n            <div class=\"pure-u-3-4\">\n                <h5 class=\"email-name\">Yahoo! Finance</h5>\n                <h4 class=\"email-subject\">How to protect your finances from winter storms</h4>\n                <p class=\"email-desc\">\n                    Mauris tempor mi vitae sem aliquet pharetra. Fusce in dui purus, nec malesuada mauris.\n                </p>\n            </div>\n        </div>\n\n        <div class=\"email-item pure-g\">\n            <div class=\"pure-u\">\n                <img class=\"email-avatar\" alt=\"Yahoo! News&#x27; avatar\" height=\"64\" width=\"64\" src=\"resources/img/common/ynews-avatar.png\">\n            </div>\n\n            <div class=\"pure-u-3-4\">\n                <h5 class=\"email-name\">Yahoo! News</h5>\n                <h4 class=\"email-subject\">Summary for April 3rd, 2012</h4>\n                <p class=\"email-desc\">\n                    We found 10 news articles that you may like.\n                </p>\n            </div>\n        </div>\n    </div>\n\n    <div id=\"main\" class=\"pure-u-1\">\n        <div class=\"email-content\">\n            <div class=\"email-content-header pure-g\">\n                <div class=\"pure-u-1-2\">\n                    <h1 class=\"email-content-title\">Hello from Toronto</h1>\n                    <p class=\"email-content-subtitle\">\n                        From <a>Tilo Mitra</a> at <span>3:56pm, April 3, 2012</span>\n                    </p>\n                </div>\n\n                <div class=\"email-content-controls pure-u-1-2\">\n                    <button class=\"secondary-button pure-button\">Reply</button>\n                    <button class=\"secondary-button pure-button\">Forward</button>\n                    <button class=\"secondary-button pure-button\">Move to</button>\n                </div>\n            </div>\n\n            <div class=\"email-content-body\">\n                <p>\n                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n                </p>\n                <p>\n                    Duis aute irure dolor in reprehenderit in voluptate velit essecillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n                </p>\n                <p>\n                    Aliquam ac feugiat dolor. Proin mattis massa sit amet enim iaculis tincidunt. Mauris tempor mi vitae sem aliquet pharetra. Fusce in dui purus, nec malesuada mauris. Curabitur ornare arcu quis mi blandit laoreet. Vivamus imperdiet fermentum mauris, ac posuere urna tempor at. Duis pellentesque justo ac sapien aliquet egestas. Morbi enim mi, porta eget ullamcorper at, pharetra id lorem.\n                </p>\n                <p>\n                    Donec sagittis dolor ut quam pharetra pretium varius in nibh. Suspendisse potenti. Donec imperdiet, velit vel adipiscing bibendum, leo eros tristique augue, eu rutrum lacus sapien vel quam. Nam orci arcu, luctus quis vestibulum ut, ullamcorper ut enim. Morbi semper erat quis orci aliquet condimentum. Nam interdum mauris sed massa dignissim rhoncus.\n                </p>\n                <p>\n                    Regards,<br>\n                    Tilo\n                </p>\n            </div>\n        </div>\n    </div>\n</div>\n</template>\n"; });
//# sourceMappingURL=app-bundle.js.map