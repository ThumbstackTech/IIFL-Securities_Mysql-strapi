'use strict';

/**
 * rtb service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::rtb.rtb');
