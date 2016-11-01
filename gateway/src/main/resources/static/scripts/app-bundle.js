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
            './elements/top/logo/logo',
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
define('resources/elements/top/logo/logo',["require", "exports", 'aurelia-framework'], function (require, exports, aurelia_framework_1) {
    "use strict";
    var Logo = (function () {
        function Logo() {
        }
        Logo.prototype.valueChanged = function (newValue, oldValue) {
        };
        __decorate([
            aurelia_framework_1.bindable, 
            __metadata('design:type', Object)
        ], Logo.prototype, "value", void 0);
        return Logo;
    }());
    exports.Logo = Logo;
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

define('text!app.html', ['module'], function(module) { module.exports = "<template>\n  <require from=\"./app.css\"></require>\n  <top value=\"Header\" class=\"pure-g\"></top>\n  <middle value=\"Middle\" class=\"pure-g\"></middle>\n  <bottom value=\"Bottom\" class=\"pure-g\"></bottom>\n</template>\n"; });
define('text!app.css', ['module'], function(module) { module.exports = ".app__header {\n  color: red;\n}\n\ntop {\n}\n\nmiddle {\n}\n\nbottom {\n}\n"; });
define('text!resources/elements/bottom/bottom.html', ['module'], function(module) { module.exports = "<template>\n  <require from=\"./bottom.css\"></require>\n  <h1 class=\"bottom__header pure-u-1\">${value}</h1>\n</template>\n"; });
define('text!resources/elements/bottom/bottom.css', ['module'], function(module) { module.exports = "\n.bottom__header {\n  color: black;\n}\n"; });
define('text!resources/elements/middle/middle.html', ['module'], function(module) { module.exports = "<template>\n  <require from=\"./middle.css\"></require>\n    <sidebar value=\"sidebar\" class=\"pure-u-1-6\"></sidebar>\n    <workspace value=\"workspace\" class=\"pure-u-3-4\"><workspace>\n</workspace></workspace></template>\n"; });
define('text!resources/elements/middle/middle.css', ['module'], function(module) { module.exports = "\nsidebar {\n\n}\nworkspace {\n\n}\n"; });
define('text!resources/elements/top/top.html', ['module'], function(module) { module.exports = "<template>\n  <require from=\"./top.css\"></require>\n  <logo class=\"pure-u-1-8\"></logo>\n  <h1 class=\"top__header pure-u-1\">${value}</h1>\n</template>\n"; });
define('text!resources/elements/top/top.css', ['module'], function(module) { module.exports = ".top__header {\n  color: red;\n}\n"; });
define('text!resources/elements/middle/sidebar/sidebar.html', ['module'], function(module) { module.exports = "<template>\n  <require from=\"./sidebar.css\"></require>\n  <nav class=\"pure-menu sidebar__custom-restricted-width\">\n    <span class=\"pure-menu-heading\"><i class=\"fa fa-user-circle fa-fw\"></i>Romeo</span>\n\n    <ul class=\"pure-menu-list\">\n        <li class=\"pure-menu-item\"><a href=\"#\" class=\"pure-menu-link\"><i class=\"fa fa-building fa-fw \" aria-hidden=\"true\"></i>Bedrijf</a></li>\n        <li class=\"pure-menu-item\"><a href=\"#\" class=\"pure-menu-link\"><i class=\"fa fa-briefcase fa-fw\" aria-hidden=\"true\"></i>Administratie</a></li>\n        <li class=\"pure-menu-item\"><a href=\"#\" class=\"pure-menu-link\"><i class=\"fa fa-comment fa-fw\" aria-hidden=\"true\"></i>Communicatie</a></li>\n        <li class=\"pure-menu-item\"><a href=\"#\" class=\"pure-menu-link\"><i class=\"fa fa-area-chart fa-fw\" aria-hidden=\"true\"></i>Rapportage</a></li>\n        <li class=\"pure-menu-heading\"><i class=\"fa fa-flag fa-fw\"></i>Favorieten</li>\n        <li class=\"pure-menu-item\"><a href=\"#\" class=\"pure-menu-link\">Favoriet 1</a></li>\n        <li class=\"pure-menu-item\"><a href=\"#\" class=\"pure-menu-link\">Favoriet 2</a></li>\n        <li class=\"pure-menu-item\"><a href=\"#\" class=\"pure-menu-link\">etc </a></li>\n    </ul>\n</nav>\n\n</template>\n"; });
define('text!resources/elements/middle/sidebar/sidebar.css', ['module'], function(module) { module.exports = ".sidebar__custom-restricted-width {\n    /* To limit the menu width to the content of the menu: */\n    display: inline-block;\n    /* Or set the width explicitly: */\n    /* width: 10em; */\n}\n"; });
define('text!resources/elements/middle/workspace/workspace.html', ['module'], function(module) { module.exports = "<template>\n  <require from=\"./workspace.css\"></require>\n  <h1 class=\"header\">${value}</h1>\n</template>\n"; });
define('text!resources/elements/middle/workspace/workspace.css', ['module'], function(module) { module.exports = ""; });
define('text!resources/elements/top/logo/logo.html', ['module'], function(module) { module.exports = "<template>\n  <require from=\"./logo.css\"></require>\n  <h1 class=\"logo__header\">${value}</h1>\n</template>\n"; });
define('text!resources/elements/top/logo/logo.css', ['module'], function(module) { module.exports = ".logo__header{\n  color:blue;\n}\n"; });
//# sourceMappingURL=app-bundle.js.map