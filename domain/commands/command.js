const _ = require("lodash");
// Abstract

class Command {

  constructor(commandText, source) {
    this.commandText = commandText;
    this.source = source;
  }

  process(client, message) {
    if(!message.guild)
      return Promise.resolve();
    return this.execute(client, message)
  }

  isCommand(commandText) {
    return `/${this.commandText}` == _.toLower(commandText);
  }

}

module.exports = Command;