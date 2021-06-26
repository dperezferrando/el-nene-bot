const _ = require("lodash");

class ElNene {
  constructor(client, commands) {
    this.commands = commands;
    this.client = client;
  }

  processMessage(message) {
    if(this._itsMeElNene(message.author))
      return Promise.resolve()
    const command = _.find(this.commands, command => command.isCommand(message.content));
    return command.process(this.client, message);
  }

  _itsMeElNene(author) {
    return author.id == this.client.user.id;
  }

}

module.exports = ElNene;