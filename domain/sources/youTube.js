const Promise = require("bluebird");
const _ = require("lodash")
const ytdl = require("ytdl-core");

class YouTube {

  constructor(url, options = {}, volume = 1) {
    this.url = url;
    this.volume = volume;
    this.options = options;
  }

  get(client, channel) {
    return Promise.resolve(ytdl(this.url, this.options));
  }


}

module.exports = YouTube;