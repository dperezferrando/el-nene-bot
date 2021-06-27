const _ = require("lodash");
const Promise = require("bluebird");
const config = require("../../config")
const audios = require("../../data/audioFiles")

class Botonera {
  constructor() {
    this.url = config.frases.botoneraUrl;
    this.audios = audios;
  }

  get() {
    const audio = _.sample(this.audios);
    console.log("PLAYING", audio)
    return Promise.resolve(`${this.url}/${audio}`);
  }
}

module.exports = Botonera;