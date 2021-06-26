const _ = require("lodash");
const Promise = require("bluebird");

class VoiceCommand {

  constructor(commandText, audioSource) {
    this.commandText = commandText;
    this.audioSource = audioSource;
  }

  process(client, message) {
    // Se mezcla streams con promises, no se como evitarlo con estos eventos de mierda
    if(!message.guild)
      return Promise.resolve();
    if (!message.member.voice.channel) 
      return message.reply('Metete en un canal de voz, mogolico');
    const ids = client.voice.connections.map(it => it.channel.id)
    if(_.includes(ids, message.member.voice.channel.id))
        return Promise.resolve();
    return this.audioSource.get()
      .then(audio => Promise.props({ audio, connection: message.member.voice.channel.join() }))
      .then(({ connection, audio }) => ({ dispatcher: connection.play(audio), connection }))
      .then(({ connection, dispatcher}) => this._handleDispatcherEvents(connection, dispatcher))

  }

  isCommand(commandText) {
    return `/${this.commandText}` == commandText;
  }

  _handleDispatcherEvents(connection, dispatcher) {
    dispatcher.on("error", console.log)
    dispatcher.on("finish", () => connection.disconnect())
    return dispatcher;
  }

}


module.exports = VoiceCommand;