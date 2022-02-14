'use strict';

/**
 * dpv service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::dpv.dpv');
