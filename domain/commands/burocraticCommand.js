const _ = require("lodash");
const Promise = require("bluebird");
const Command = require("./command");
const config = require("../../config");

class BurocraticCommaand extends Command {

  execute(client, message) {
    const { member: { voice: { channel } } } = message;
    const connection = client.voice.connections.find(it => it.channel.id == channel.id)
    return Promise.resolve(connection && connection.disconnect())
  }

}


module.exports = BurocraticCommaand;