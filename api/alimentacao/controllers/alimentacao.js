const { sanitizeEntity } = require("strapi-utils");

module.exports = {
  /**
   * Retrieve records.
   *
   * @return {Array}
   */

  async find(ctx) {
    let entities;
    if (ctx.query._q) {
      entities = await strapi.services.alimentacao.search(ctx.query);
    } else {
      entities = await strapi.services.alimentacao.find(ctx.query, [
        "quantidadeAlimento.alimento.categoria",
      ]);
    }

    return entities.map((entity) =>
      sanitizeEntity(entity, { model: strapi.models.alimentacao })
    );
  },
};
