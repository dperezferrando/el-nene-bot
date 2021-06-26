const config = require("../../config")
const audioFiles = require("../../data/audioFiles")

class Botonera {
  constructor() {
    this.url = config.frases.botoneraUrl;
    this.audioFiles = audioFiles;
  }

  get() {
    const audio = _.sample(audios);
    console.log("PLAYING", audio)
    return `${this.url}/${audio}`;
  }
}

module.exports = Botonera;