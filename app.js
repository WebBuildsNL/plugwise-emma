'use strict';

const Homey = require('homey');

module.exports = class PlugwiseApp extends Homey.App {

  async onInit() {
    this.log('Plugwise app has been initialized');
  }

};
