'use strict';

const { Thing, SwitchablePower } = require('abstract-things');
const { PowerPlug, PowerOutlet } = require('abstract-things/electrical');

const MiioApi = require('../device');
const MiioPower = require('./capabilities/power');
const PowerState = require('./capabilities/power-state');

module.exports = class extends Thing.with(PowerPlug, PowerOutlet, MiioApi, MiioPower, PowerState) {
	static get type() {
		return 'miio:power-plug';
	}

	constructor(options) {
		super(options);

		this.defineProperty('on', {
			name: 'power'
		});

	}
};
