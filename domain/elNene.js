const _ = require("lodash");
const Promise = require("bluebird");
const client = require("../services/discordClient");
const commands = require("./commands");

class ElNene {
  constructor() {
    this.commands = commands;
    this.client = client;
  }

  processMessage(message) {
    const command = _.find(this.commands, command => command.isCommand(message.content));
    if(!command)
      return Promise.resolve()
    return command.process(this.client, message);
  }

}

module.exports = new ElNene();