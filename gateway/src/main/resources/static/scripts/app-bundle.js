define('app',["require", "exports"], function (require, exports) {
    "use strict";
    var App = (function () {
        function App() {
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

define('main',["require", "exports", './environment', 'materialize-css'], function (require, exports, environment_1) {
    "use strict";
    Promise.config({
        warnings: {
            wForgottenReturn: false
        }
    });
    function configure(aurelia) {
        aurelia.use
            .standardConfiguration()
            .feature('resources')
            .plugin('aurelia-materialize-bridge', function (bridge) { return bridge.useAll(); });
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
        config.globalResources(['./elements/theming/theming'
        ]);
    }
    exports.configure = configure;
});

define('resources/elements/theming/theming',["require", "exports"], function (require, exports) {
    "use strict";
    var Theming = (function () {
        function Theming() {
            this.primaryColor = '#3f51b5';
            this.accentColor = '#ff9800';
        }
        return Theming;
    }());
    exports.Theming = Theming;
});

define('text!app.html', ['module'], function(module) { module.exports = "<template>\n  <require from=\"./app.css\"></require>\n  <require from=\"materialize-css/css/materialize.css\"></require>\n  <theming></theming>\n  <md-navbar>\n    \n    <ul class=\"hide-on-med-and-down right\">\n      <li md-waves=\"\"><a>About</a></li>\n      <li md-waves=\"\"><a>Installation</a></li>\n      <li md-waves=\"\"><a>Project Status</a></li>\n      <li md-waves=\"\"><a md-dropdown=\"activates: dropdown1;\">Dropdown<i class=\"material-icons right\">arrow_drop_down</i></a></li>\n      <li md-waves=\"\"><a>\n      <form>\n      <div class=\"input-field\">\n        <input id=\"search\" type=\"search\" required>\n        <label for=\"search\"><i class=\"material-icons\">search</i></label>\n        <i class=\"material-icons\">close</i>\n      </div>\n    </form>\n      </a></li>\n    </ul>\n  </md-navbar>\n\n\n  <ul id=\"dropdown1\" class=\"dropdown-content\">\n    <li><a>one</a></li>\n    <li><a>two</a></li>\n    <li class=\"divider\"></li>\n    <li><a>three</a></li>\n  </ul>\n</template>\n"; });
define('text!app.css', ['module'], function(module) { module.exports = "\n\n"; });
define('text!resources/elements/theming/theming.html', ['module'], function(module) { module.exports = "<template>\n  <require from=\"./theming.css\"></require>\n  <md-colors md-primary-color.bind=\"primaryColor\" md-accent-color.bind=\"accentColor\"></md-colors>\n</template>"; });
define('text!resources/elements/theming/theming.css', ['module'], function(module) { module.exports = ""; });
//# sourceMappingURL=app-bundle.js.map