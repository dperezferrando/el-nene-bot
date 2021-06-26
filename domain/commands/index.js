const VoiceCommand = require("./voiceCommand");
const Botonera = require("../sources/botonera");
const VoicedFrase = require("../sources/voicedFrase");

module.exports = [
  new VoiceCommand("botonera", new Botonera()),
  new VoiceCommand("frase", new VoicedFrase())
];