const VoiceCommand = require("./voiceCommand");
const TextCommand = require("./textCommand");
const BurocraticCommand = require("./burocraticCommand");
const Botonera = require("../sources/botonera");
const VoicedFrase = require("../sources/voicedFrase");
const SimpleText = require("../sources/simpleText");
const Mauro = require("../sources/mauro");
const YouTube = require("../sources/youTube");

module.exports = [
  new VoiceCommand("botonera", new Botonera()),
  new VoiceCommand("frase", new VoicedFrase()),
  new VoiceCommand("pacto", new YouTube("https://www.youtube.com/watch?v=P8u8md-NiHM", { filter: 'audioonly' }, 0.05)),
  new TextCommand("aiuda", new SimpleText("TOMÁ MOGOLICO: \n /botonera - /frase - /help - /mauro - /pacto - /silencio")),
  new TextCommand("mauro", new Mauro()),
  new BurocraticCommand("silencio"),
];