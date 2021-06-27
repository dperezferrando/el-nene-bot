const VoiceCommand = require("./voiceCommand");
const TextCommand = require("./textCommand");
const Botonera = require("../sources/botonera");
const VoicedFrase = require("../sources/voicedFrase");
const SimpleText = require("../sources/simpleText");

module.exports = [
  new VoiceCommand("botonera", new Botonera()),
  new VoiceCommand("frase", new VoicedFrase()),
  new TextCommand("help", new SimpleText("TOMÁ MOGOLICO: \n /botonera - /frase - /help"))
];