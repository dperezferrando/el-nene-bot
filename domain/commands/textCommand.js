const Command = require("./command");

class TextCommand extends Command {

  execute(client, { channel }) {
    const text = this.source.get();
    return channel.send(text);
  }

}

module.exports = TextCommand;