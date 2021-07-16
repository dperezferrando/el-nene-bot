const Promise = require("bluebird");
const Command = require("./command");

class TextCommand extends Command {

  execute(client, { channel }) {
    return Promise.resolve(this.source.get(client, channel))
    .then(text => channel.send(text));
  }

}

module.exports = TextCommand;