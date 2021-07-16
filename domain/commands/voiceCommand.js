const _ = require("lodash");
const Promise = require("bluebird");
const Command = require("./command");

class VoiceCommand extends Command {

  execute(client, message) {
    // Se mezcla streams con promises, no se como evitarlo con estos eventos de mierda
    const { member: { voice: { channel } } } = message;
    if (!channel) 
      return message.reply('metete en un canal de voz, mogolico');
    const ids = client.voice.connections.map(it => it.channel.id)
    if(_.includes(ids, channel))
        return Promise.resolve();
    return this.source.get(client, channel)
      .tap(console.log)
      .then(audio => Promise.props({ audio, connection: channel.join() }))
      .then(({ connection, audio }) => ({ dispatcher: connection.play(audio), connection }))
      .then(({ connection, dispatcher}) => this._handleDispatcherEvents(connection, dispatcher))

  }

  _handleDispatcherEvents(connection, dispatcher) {
    dispatcher.on("error", console.log)
    dispatcher.on("finish", () => connection.disconnect())
    return dispatcher;
  }

}


module.exports = VoiceCommand;