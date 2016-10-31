define('app',["require", "exports"], function (require, exports) {
    "use strict";
    var App = (function () {
        function App() {
            this.message = 'Hello World!';
        }
        return App;
    }());
    exports.App = App;
});

define('environment',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = {
        debug: true,
        testing: true
    };
});

define('main',["require", "exports", './environment'], function (require, exports, environment_1) {
    "use strict";
    Promise.config({
        warnings: {
            wForgottenReturn: false
        }
    });
    function configure(aurelia) {
        aurelia.use
            .standardConfiguration()
            .feature('resources');
        if (environment_1.default.debug) {
            aurelia.use.developmentLogging();
        }
        if (environment_1.default.testing) {
            aurelia.use.plugin('aurelia-testing');
        }
        aurelia.start().then(function () { return aurelia.setRoot(); });
    }
    exports.configure = configure;
});

define('resources/index',["require", "exports"], function (require, exports) {
    "use strict";
    function configure(config) {
        config.globalResources(['./elements/top/top',
            './elements/middle/middle',
            './elements/middle/sidebar/sidebar',
            './elements/middle/workspace/workspace',
            './elements/bottom/bottom'
        ]);
    }
    exports.configure = configure;
});

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('resources/elements/bottom/bottom',["require", "exports", 'aurelia-framework'], function (require, exports, aurelia_framework_1) {
    "use strict";
    var Bottom = (function () {
        function Bottom() {
        }
        Bottom.prototype.valueChanged = function (newValue, oldValue) {
        };
        __decorate([
            aurelia_framework_1.bindable, 
            __metadata('design:type', Object)
        ], Bottom.prototype, "value", void 0);
        return Bottom;
    }());
    exports.Bottom = Bottom;
});

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('resources/elements/middle/middle',["require", "exports", 'aurelia-framework'], function (require, exports, aurelia_framework_1) {
    "use strict";
    var Middle = (function () {
        function Middle() {
        }
        Middle.prototype.valueChanged = function (newValue, oldValue) {
        };
        __decorate([
            aurelia_framework_1.bindable, 
            __metadata('design:type', Object)
        ], Middle.prototype, "value", void 0);
        return Middle;
    }());
    exports.Middle = Middle;
});

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('resources/elements/top/top',["require", "exports", 'aurelia-framework'], function (require, exports, aurelia_framework_1) {
    "use strict";
    var Top = (function () {
        function Top() {
        }
        Top.prototype.valueChanged = function (newValue, oldValue) {
        };
        __decorate([
            aurelia_framework_1.bindable, 
            __metadata('design:type', Object)
        ], Top.prototype, "value", void 0);
        return Top;
    }());
    exports.Top = Top;
});

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('resources/elements/middle/sidebar/sidebar',["require", "exports", 'aurelia-framework'], function (require, exports, aurelia_framework_1) {
    "use strict";
    var Sidebar = (function () {
        function Sidebar() {
        }
        Sidebar.prototype.valueChanged = function (newValue, oldValue) {
        };
        __decorate([
            aurelia_framework_1.bindable, 
            __metadata('design:type', Object)
        ], Sidebar.prototype, "value", void 0);
        return Sidebar;
    }());
    exports.Sidebar = Sidebar;
});

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('resources/elements/middle/workspace/workspace',["require", "exports", 'aurelia-framework'], function (require, exports, aurelia_framework_1) {
    "use strict";
    var Workspace = (function () {
        function Workspace() {
        }
        Workspace.prototype.valueChanged = function (newValue, oldValue) {
        };
        __decorate([
            aurelia_framework_1.bindable, 
            __metadata('design:type', Object)
        ], Workspace.prototype, "value", void 0);
        return Workspace;
    }());
    exports.Workspace = Workspace;
});

define('text!app.html', ['module'], function(module) { module.exports = "<template>\n  <require from=\"./app.css\"></require>\n\n  <h1 class=\"app__header\">${message}</h1>\n  <top value=\"Header\"></top>\n  <middle value=\"Middle\"></middle>\n  <bottom value=\"Bottom\"></bottom>\n</template>\n"; });
define('text!app.css', ['module'], function(module) { module.exports = ".app__header {\n  color:red;\n}\n\ntop {\n  display:flex;\n  align-content: space-between;\n}\n\nmiddle {\n  display:flex;\n  align-content: space-between;\n\n}\n\nbottom {\n  display:flex;\n  align-content: space-between;\n}\n\nbody {\n  color:#333;\n}\n\na {\n  text-decoration: none;\n  color:#1b98f8;\n}\n"; });
define('text!resources/elements/bottom/bottom.html', ['module'], function(module) { module.exports = "<template>\n  <require from=\"./bottom.css\"></require>\n  <h1 class=\"bottom__header\">${value}</h1>\n</template>\n"; });
define('text!resources/elements/bottom/bottom.css', ['module'], function(module) { module.exports = "\n.bottom__header {\n  color: black;\n}\n"; });
define('text!resources/elements/middle/middle.html', ['module'], function(module) { module.exports = "<template>\n  <require from=\"./middle.css\"></require>\n  <div id=\"layout\" class=\"middle__content pure-g\">\n    <sidebar value=\"sidebar\"></sidebar>\n    <workspace value=\"workspace\"><workspace>\n  </workspace></workspace></div>\n</template>\n"; });
define('text!resources/elements/middle/middle.css', ['module'], function(module) { module.exports = "\nsidebar {\n width: 20%;  /* Or whatever */\n height: 100%; /* Or whatever */\n margin: auto;  /* Magic! */\n}\nworkspace {\n  width: 80%;\n  height:100%;\n  margin:auto;\n}\n.middle__content{\n  display:flex;\n  align-content: space-between;\n}\n"; });
define('text!resources/elements/top/top.html', ['module'], function(module) { module.exports = "<template>\n  <require from=\"./top.css\"></require>\n  <h1 class=\"top__header\">${value}</h1>\n</template>\n"; });
define('text!resources/elements/top/top.css', ['module'], function(module) { module.exports = ".top__header {\n  color: red;\n}\n"; });
define('text!resources/elements/middle/sidebar/sidebar.html', ['module'], function(module) { module.exports = "<template>\n  <require from=\"./sidebar.css\"></require>\n  <h1 class=\"sidebar__header\">${value}</h1>\n  <div id=\"nav\" class=\"pure-u\">\n      <a href=\"#\" class=\"sidebar__nav-menu-button\">Menu</a>\n\n      <div class=\"sidebar__nav-inner\">\n          <button class=\"sidebar__primary-button pure-button\">Compose</button>\n\n          <div class=\"sidebar__pure-menu\">\n              <ul class=\"pure-menu-list\">\n                  <li class=\"pure-menu-item\"><a href=\"#\" class=\"sidebar__pure-menu-link\">Inbox <span class=\"email-count\">(2)</span></a></li>\n                  <li class=\"pure-menu-item\"><a href=\"#\" class=\"sidebar__pure-menu-link\">Important</a></li>\n                  <li class=\"pure-menu-item\"><a href=\"#\" class=\"sidebar__pure-menu-link\">Sent</a></li>\n                  <li class=\"pure-menu-item\"><a href=\"#\" class=\"sidebar__pure-menu-link\">Drafts</a></li>\n                  <li class=\"pure-menu-item\"><a href=\"#\" class=\"sidebar__pure-menu-link\">Trash</a></li>\n                  <li class=\"sidebar__pure-menu-heading\">Labels</li>\n                  <li class=\"pure-menu-item\"><a href=\"#\" class=\"sidebar__pure-menu-link\"><span class=\"email-label-personal\"></span>Personal</a></li>\n                  <li class=\"pure-menu-item\"><a href=\"#\" class=\"sidebar__pure-menu-link\"><span class=\"email-label-work\"></span>Work</a></li>\n                  <li class=\"pure-menu-item\"><a href=\"#\" class=\"sidebar__pure-menu-link\"><span class=\"email-label-travel\"></span>Travel</a></li>\n              </ul>\n          </div>\n      </div>\n  </div>\n</template>\n"; });
define('text!resources/elements/middle/sidebar/sidebar.css', ['module'], function(module) { module.exports = ".sidebar__header {\n  color: orange;\n}\n\n\n/*\n * -- HELPER STYLES --\n * Over-riding some of the .pure-button styles to make my buttons look unique\n */\n\n.sidebar__primary-button, .sidebar__secondary-button {\n  box-shadow: none;\n  border-radius: 20px;\n}\n\n.sidebar__primary-button {\n  color: #fff;\n  background: #1b98f8;\n  margin: 1em 0;\n}\n\n.sidebar__secondary-button {\n  background: #fff;\n  border: 1px solid #ddd;\n  color: #666;\n  padding: 0.5em 2em;\n  font-size: 80%;\n}\n\n/*\n * -- LAYOUT STYLES --\n * This layout consists of three main elements, `#nav` (navigation bar), `#list` (email list), and `#main` (email content). All 3 elements are within `#layout`\n */\n\n#sidebar__layout, #sidebar__nav, #sidebar__list, #sidebar__main {\n  margin: 0;\n  padding: 0;\n}\n\n/* Make the navigation 100% width on phones */\n\n#sidebar__nav {\n  width: 100%;\n  height: 40px;\n  position: relative;\n  background: rgb(37, 42, 58);\n  text-align: center;\n  .sidebar__nav-menu-button {\n    display: block;\n    top: 0.5em;\n    right: 0.5em;\n    position: absolute;\n  }\n}\n\n#sidebar__nav.sidebar__active {\n  height: 80%;\n}\n\n/* Show the \"Menu\" button on phones */\n\n/* When \"Menu\" is clicked, the navbar should be 80% height */\n\n/* Don't show the navigation items... */\n\n.sidebar__nav-inner {\n  display: none;\n}\n\n/* ...until the \"Menu\" button is clicked */\n\n#sidebar__nav {\n  .sidebar__pure-menu {\n    background: transparent;\n    border: none;\n    text-align: left;\n  }\n  .sidebar__pure-menu-link {\n    color: #fff;\n    margin-left: 0.5em;\n  }\n  .sidebar__pure-menu-link:hover, .sidebar__pure-menu-link:focus {\n    background: rgb(55, 60, 90);\n  }\n  .sidebar__pure-menu-heading {\n    border-bottom: none;\n    font-size: 110%;\n    color: rgb(75, 113, 151);\n  }\n}\n\n#sidebar__nav.sidebar__active .sidebar__nav-inner {\n  display: block;\n  padding: 2em 0;\n}\n\n/*\n * -- NAV BAR STYLES --\n * Styling the default .pure-menu to look a little more unique.\n */\n\n/*\n * -- TABLET (AND UP) MEDIA QUERIES --\n * On tablets and other medium-sized devices, we want to customize some\n * of the mobile styles.\n */\n@media (min-width: 40em) {\n  /* Move the layout over so we can fit the nav + list in on the left */\n  #sidebar__layout {\n    padding-left: 500px;\n    /* \"left col (nav + list)\" width */\n    position: relative;\n  }\n  /* These are position:fixed; elements that will be in the left 500px of the screen */\n  #sidebar__nav, #sidebar__list {\n    position: fixed;\n    top: 0;\n    bottom: 0;\n    overflow: auto;\n  }\n  #sidebar__nav {\n    margin-left: -500px;\n    /* \"left col (nav + list)\" width */\n    width: 150px;\n    height: 100%;\n  }\n  /* Show the menu items on the larger screen */\n  .sidebar__nav-inner {\n    display: block;\n    padding: 2em 0;\n  }\n  /* Hide the \"Menu\" button on larger screens */\n  #sidebar__nav .sidebar__nav-menu-button {\n    display: none;\n  }\n}\n\n/*\n * -- DESKTOP (AND UP) MEDIA QUERIES --\n * On desktops and other large-sized devices, we want to customize some\n * of the mobile styles.\n */\n@media (min-width: 60em) {\n  /* This will take up the entire height, and be a little thinner */\n  #sidebar__list {\n    margin-left: -350px;\n    width: 350px;\n    height: 100%;\n    border-right: 1px solid #ddd;\n  }\n}\n"; });
define('text!resources/elements/middle/workspace/workspace.html', ['module'], function(module) { module.exports = "<template>\n  <require from=\"./workspace.css\"></require>\n  <div id=\"list\" class=\"pure-u-1-4\">\n        <div class=\"workspace__email-item workspace__email-item-selected pure-g\">\n            <div class=\"pure-u\">\n                <img class=\"workspace__email-avatar\" alt=\"Tilo Mitra&apos;s avatar\" height=\"64\" width=\"64\" src=\"img/common/tilo-avatar.png\">\n            </div>\n\n            <div class=\"pure-u-3-4\">\n                <h5 class=\"workspace__email-name\">Tilo Mitra</h5>\n                <h4 class=\"workspace__email-subject\">Hello from Toronto</h4>\n                <p class=\"workspace__email-desc\">\n                    Hey, I just wanted to check in with you from Toronto. I got here earlier today.\n                </p>\n            </div>\n        </div>\n\n        <div class=\"workspace__email-item workspace__email-item-unread pure-g\">\n            <div class=\"pure-u\">\n                <img class=\"workspace__email-avatar\" alt=\"Eric Ferraiuolo&apos;s avatar\" height=\"64\" width=\"64\" src=\"img/common/ericf-avatar.png\">\n            </div>\n\n            <div class=\"pure-u-3-4\">\n                <h5 class=\"workspace__email-name\">Eric Ferraiuolo</h5>\n                <h4 class=\"workspace__email-subject\">Re: Pull Requests</h4>\n                <p class=\"workspace__email-desc\">\n                    Hey, I had some feedback for pull request #51. We should center the menu so it looks better on mobile.\n                </p>\n            </div>\n        </div>\n\n        <div class=\"workspace__email-item workspace__email-item-unread pure-g\">\n            <div class=\"pure-u\">\n                <img class=\"workspace__email-avatar\" alt=\"YUI&apos;s avatar\" height=\"64\" width=\"64\" src=\"img/common/yui-avatar.png\">\n            </div>\n\n            <div class=\"pure-u-3-4\">\n                <h5 class=\"workspace__email-name\">YUI Library</h5>\n                <h4 class=\"workspace__email-subject\">You have 5 bugs assigned to you</h4>\n                <p class=\"workspace__email-desc\">\n                    Duis aute irure dolor in reprehenderit in voluptate velit essecillum dolore eu fugiat nulla.\n                </p>\n            </div>\n        </div>\n\n        <div class=\"workspace__email-item pure-g\">\n            <div class=\"pure-u\">\n                <img class=\"workspace__email-avatar\" alt=\"Reid Burke&apos;s avatar\" height=\"64\" width=\"64\" src=\"img/common/reid-avatar.png\">\n            </div>\n\n            <div class=\"pure-u-3-4\">\n                <h5 class=\"workspace__email-name\">Reid Burke</h5>\n                <h4 class=\"workspace__email-subject\">Re: Design Language</h4>\n                <p class=\"workspace__email-desc\">\n                    Excepteur sint occaecat cupidatat non proident, sunt in culpa.\n                </p>\n            </div>\n        </div>\n\n        <div class=\"workspace__email-item pure-g\">\n            <div class=\"pure-u\">\n                <img class=\"workspace__email-avatar\" alt=\"Andrew Wooldridge&apos;s avatar\" height=\"64\" width=\"64\" src=\"img/common/andrew-avatar.png\">\n            </div>\n\n            <div class=\"pure-u-3-4\">\n                <h5 class=\"workspace__email-name\">Andrew Wooldridge</h5>\n                <h4 class=\"workspace__email-subject\">YUI Blog Updates?</h4>\n                <p class=\"workspace__email-desc\">\n                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.\n                </p>\n            </div>\n        </div>\n\n        <div class=\"workspace__email-item pure-g\">\n            <div class=\"pure-u\">\n                <img class=\"workspace__email-avatar\" alt=\"Yahoo! Finance&apos;s Avatar\" height=\"64\" width=\"64\" src=\"img/common/yfinance-avatar.png\">\n            </div>\n\n            <div class=\"pure-u-3-4\">\n                <h5 class=\"workspace__email-name\">Yahoo! Finance</h5>\n                <h4 class=\"workspace__email-subject\">How to protect your finances from winter storms</h4>\n                <p class=\"workspace__email-desc\">\n                    Mauris tempor mi vitae sem aliquet pharetra. Fusce in dui purus, nec malesuada mauris.\n                </p>\n            </div>\n        </div>\n\n        <div class=\"workspace__email-item pure-g\">\n            <div class=\"pure-u\">\n                <img class=\"workspace__email-avatar\" alt=\"Yahoo! News&apos; avatar\" height=\"64\" width=\"64\" src=\"img/common/ynews-avatar.png\">\n            </div>\n\n            <div class=\"pure-u-3-4\">\n                <h5 class=\"workspace__email-name\">Yahoo! News</h5>\n                <h4 class=\"workspace__email-subject\">Summary for April 3rd, 2012</h4>\n                <p class=\"workspace__email-desc\">\n                    We found 10 news articles that you may like.\n                </p>\n            </div>\n        </div>\n    </div>\n\n    <div id=\"main\" class=\"pure-u-3-4\">\n        <div class=\"email-content\">\n            <div class=\"workspace__email-content-header pure-g\">\n                <div class=\"pure-u-1-2\">\n                    <h1 class=\"workspace__email-content-title\">Hello from Toronto</h1>\n                    <p class=\"workspace__email-content-subtitle\">\n                        From <a>Tilo Mitra</a> at <span>3:56pm, April 3, 2012</span>\n                    </p>\n                </div>\n\n                <div class=\"workspace__email-content-controls pure-u-1-2\">\n                    <button class=\"workspace__secondary-button pure-button\">Reply</button>\n                    <button class=\"workspace__secondary-button pure-button\">Forward</button>\n                    <button class=\"workspace__secondary-button pure-button\">Move to</button>\n                </div>\n            </div>\n\n            <div class=\"workspace__email-content-body\">\n                <p>\n                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n                </p>\n                <p>\n                    Duis aute irure dolor in reprehenderit in voluptate velit essecillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n                </p>\n                <p>\n                    Aliquam ac feugiat dolor. Proin mattis massa sit amet enim iaculis tincidunt. Mauris tempor mi vitae sem aliquet pharetra. Fusce in dui purus, nec malesuada mauris. Curabitur ornare arcu quis mi blandit laoreet. Vivamus imperdiet fermentum mauris, ac posuere urna tempor at. Duis pellentesque justo ac sapien aliquet egestas. Morbi enim mi, porta eget ullamcorper at, pharetra id lorem.\n                </p>\n                <p>\n                    Donec sagittis dolor ut quam pharetra pretium varius in nibh. Suspendisse potenti. Donec imperdiet, velit vel adipiscing bibendum, leo eros tristique augue, eu rutrum lacus sapien vel quam. Nam orci arcu, luctus quis vestibulum ut, ullamcorper ut enim. Morbi semper erat quis orci aliquet condimentum. Nam interdum mauris sed massa dignissim rhoncus.\n                </p>\n                <p>\n                    Regards,<br>\n                    Tilo\n                </p>\n            </div>\n        </div>\n    </div>\n  \n</template>\n"; });
define('text!resources/elements/middle/workspace/workspace.css', ['module'], function(module) { module.exports = "\n.workspace__header {\n  color: blue;\n}\n\n/*\n * -- EMAIL STYLES --\n * Styles relevant to the email messages, labels, counts, and more.\n */\n\n.workspace__email-count {\n  color: rgb(75, 113, 151);\n}\n\n.workspace__email-label-personal, .workspace__email-label-work, .workspace__email-label-travel {\n  width: 15px;\n  height: 15px;\n  display: inline-block;\n  margin-right: 0.5em;\n  border-radius: 3px;\n}\n\n.workspace__email-label-personal {\n  background: #ffc94c;\n}\n\n.workspace__email-label-work {\n  background: #41ccb4;\n}\n\n.workspace__email-label-travel {\n  background: #40c365;\n}\n\n/* Email Item Styles */\n\n.workspace__email-item {\n  padding: 0.9em 1em;\n  border-bottom: 1px solid #ddd;\n  border-left: 6px solid transparent;\n}\n\n.workspace__email-avatar {\n  border-radius: 3px;\n  margin-right: 0.5em;\n}\n\n.workspace__email-name, .workspace__email-subject {\n  margin: 0;\n}\n\n.workspace__email-name {\n  text-transform: uppercase;\n  color: #999;\n}\n\n.workspace__email-desc {\n  font-size: 80%;\n  margin: 0.4em 0;\n}\n\n.workspace__email-item-selected {\n  background: #eee;\n}\n\n.workspace__email-item-unread {\n  border-left: 6px solid #1b98f8;\n}\n\n/* Email Content Styles */\n\n.workspace__email-content-header, .workspace__email-content-body, .workspace__email-content-footer {\n  padding: 1em 2em;\n}\n\n.workspace__email-content-header {\n  border-bottom: 1px solid #ddd;\n}\n\n.workspace__email-content-title {\n  margin: 0.5em 0 0;\n}\n\n.workspace__email-content-subtitle {\n  font-size: 1em;\n  margin: 0;\n  font-weight: normal;\n  span {\n    color: #999;\n  }\n}\n\n.workspace__email-content-controls {\n  margin-top: 2em;\n  text-align: right;\n  .workspace__secondary-button {\n    margin-bottom: 0.3em;\n  }\n}\n\n.workspace__email-avatar {\n  width: 40px;\n  height: 40px;\n}\n"; });
//# sourceMappingURL=app-bundle.js.map