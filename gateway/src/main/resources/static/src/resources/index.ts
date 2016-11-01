import {FrameworkConfiguration} from 'aurelia-framework';

export function configure(config: FrameworkConfiguration) {
  config.globalResources(['./elements/top/top',
                          './elements/top/logo/logo',
                          './elements/top/title/title',
                          './elements/top/status/status',
                          './elements/top/status/user-icon/user-icon',
                          './elements/middle/middle',
                          './elements/middle/sidebar/sidebar',
                          './elements/middle/workspace/workspace',
                          './elements/bottom/bottom',
                          ]);
}
