const axios = require("axios");
const config = require("../config");
const Promise = require("bluebird");

class PollyChoreada {
  constructor() {
    this.url = config.polly.url;
  }

  hablaPuta(text) {
    return axios.post(`${this.url}/speak`, { voice: config.polly.voice , text })
      .then(({ data: { success, speak_url } }) => { return success ? speak_url : Promise.reject(new Error("No se para que si no lo voy a catchear")) })
  }

}

module.exports = new PollyChoreada();