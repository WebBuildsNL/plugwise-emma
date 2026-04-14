'use strict';

const Homey = require('homey');

class EmmaDriver extends Homey.Driver {

  async onInit() {
    this.log('EmmaDriver has been initialized');
  }

}

module.exports = EmmaDriver;
