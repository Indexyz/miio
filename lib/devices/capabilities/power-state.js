'use strict';

const { Thing } = require('abstract-things');
const Power = require('./power.js');

module.exports = Thing.mixin(Parent => class extends Parent.with(Power) {
	propertyUpdated(key, value) {
		super.propertyUpdated(key, value);
	}

	powerState() {
		return this.call('get_power', [], { refresh: [ 'power' ] })
			.then(state => {
				return state[0];
			});
	}
});
