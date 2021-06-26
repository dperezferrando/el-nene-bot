const _ = require("lodash");

class ElNene {
  constructor(client, commands) {
    this.commands = commands;
    this.client = client;
  }

  processMessage(message) {
    const command = _.find(this.commands, command => command.isCommand(message.content));
    return command.process(client, message);
  }

}

module.exports = ElNene;