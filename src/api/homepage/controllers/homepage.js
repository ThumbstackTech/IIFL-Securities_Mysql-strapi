"use strict";

/**
 *  homepage controller
 */

// const { createCoreController } = require("@strapi/strapi").factories;

// module.exports = createCoreController("api::homepage.homepage");

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::homepage.homepage",
  ({ strapi }) => ({
    async find(ctx) {
      const { query } = ctx;

      const entity = await strapi.entityService.findMany(
        "api::homepage.homepage",
        {
          ...query,
          populate: {
            populate: "*",
            header: { populate: "*" },
            dpvs: {
              populate:"*",
              populate: {
                populate: "*",
                dpv: {
                  populate: "*",
                },
                icons: {
                  populate: "*",
                },
                secondory_card: {
                  populate: "*",
                },
                secondory_card: {
                  populate: {
                    points_cards: {
                      populate: "*",
                      customer_support_items: { populate: "*" },
                    },
                    tag_cards: {
                      populate: "*",
                    },
                    img_cards: {
                      populate: "*",
                    },
                  },
                },
              },
            },

            rtb: { populate: "*",populate:{
              rtb_sub:{
                populate:"*",
              },
            } ,},
            pricing: { populate: "*",populate:{
              items:{
                populate:"*",
              }
            } },
            investment_offering: { populate: "*" },
            research: { populate: "*" },
            feature: { populate: "*" },
            tool: { populate: "*" },
            learn: {
              populate: "*",
              populate: {
                plateform: {
                  populate: "*",
                },
              },
            },
            footer: { populate: "*" },
          },
        }
      );
      const sanitizedEntity = await this.sanitizeOutput(entity, ctx);

      return this.transformResponse(sanitizedEntity);
    },
  })
);
