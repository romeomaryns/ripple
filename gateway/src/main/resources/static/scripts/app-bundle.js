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
        config.globalResources(['./elements/top/top', './elements/middle/middle', './elements/bottom/bottom']);
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
define('resources/elements/card',["require", "exports", 'aurelia-framework'], function (require, exports, aurelia_framework_1) {
    "use strict";
    var Card = (function () {
        function Card() {
        }
        Card.prototype.valueChanged = function (newValue, oldValue) {
        };
        __decorate([
            aurelia_framework_1.bindable, 
            __metadata('design:type', Object)
        ], Card.prototype, "value", void 0);
        return Card;
    }());
    exports.Card = Card;
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

define('text!app.html', ['module'], function(module) { module.exports = "<template>\n  <require from=\"./app.css\"></require>\n\n  <h1 class=\"app__header\">${message}</h1>\n  <top value=\"Header\"></top>\n  <middle value=\"Middle\"></middle>\n  <bottom value=\"Bottom\"></bottom>\n</template>\n"; });
define('text!app.css', ['module'], function(module) { module.exports = ".app__header {\n  color: red;\n}\n"; });
define('text!resources/elements/card.html', ['module'], function(module) { module.exports = "<template>\n  <require from=\"./card.css\"></require>\n  <h1 class=\"card__header\">${value}</h1>\n</template>  \n"; });
define('text!resources/elements/card.css', ['module'], function(module) { module.exports = "\n.card__header {\n  color: purple;\n}\n"; });
define('text!resources/elements/bottom/bottom.html', ['module'], function(module) { module.exports = "<template>\n  <require from=\"./bottom.css\"></require>\n  <h1 class=\"bottom__header\">${value}</h1>\n</template>\n"; });
define('text!resources/elements/bottom/bottom.css', ['module'], function(module) { module.exports = "\n.bottom__header {\n  color: black;\n}\n"; });
define('text!resources/elements/middle/middle.html', ['module'], function(module) { module.exports = "<template>\n  <require from=\"./middle.css\"></require>\n  <h1 class=\"middle__header\">${value}</h1>\n</template>\n"; });
define('text!resources/elements/middle/middle.css', ['module'], function(module) { module.exports = ".middle__header {\n  color: gray;\n}\n"; });
define('text!resources/elements/top/top.html', ['module'], function(module) { module.exports = "<template>\n  <require from=\"./top.css\"></require>\n  <h1 class=\"top__header\">${value}</h1>\n</template>\n"; });
define('text!resources/elements/top/top.css', ['module'], function(module) { module.exports = ".top__header {\n  color: red;\n}\n"; });
//# sourceMappingURL=app-bundle.js.map