const Promise = require("bluebird");

class WebhookController {
  ping({ body }) {
    return Promise.resolve(body);
  }
}

module.exports = WebhookController;