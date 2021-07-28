const Promise = require("bluebird");
const _ = require("lodash")
const ytdl = require("ytdl-core");

class YouTube {

  constructor(url) {
    this.url = url;
  }

  get(client, channel) {
    return Promise.resolve(ytdl(this.url));
  }


}

module.exports = YouTube;