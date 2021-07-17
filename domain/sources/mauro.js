const Promise = require("bluebird");
const _ = require("lodash")

class Mauro {

  get(client, channel) {
    return Promise.resolve(channel.messages.fetch({ limit: 100 }))
    .then(it => it.map(_.identity))
    .filter(message => this._isValidMessage(message, client))
    .then(_.sample)
    .then(message => message ? message : { content: "Mauro dice: no vi nada capo"})
    .tap(message => console.log("MAURO VA A REPETIR:", message))
    .get("content")
    .then(content => content ? content : "Mauro dice: soy down");
  }

  _isValidMessage(message, client) {
    return !_.isEmpty(message.embeds) && message.author.id != client.user.id;
  }

}

module.exports = Mauro;