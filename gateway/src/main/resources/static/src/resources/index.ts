import {FrameworkConfiguration} from 'aurelia-framework';

export function configure(config: FrameworkConfiguration) {
  // config.globalResources(["./elements/top/top","./elements/middle/middle","./elements/bottom/bottom"]);
  config.globalResources(['./elements/top/top', './elements/middle/middle', './elements/bottom/bottom']);
}
