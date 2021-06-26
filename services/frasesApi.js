const axios = require("axios");
const config = require("../config")
const _ = require("lodash")
const Promise = require("bluebird")

class FrasesApi {
  
  constructor() {
    this.url = config.frases.apiUrl;
  }

  randomFrase() {
    const offset = _.random(0, config.frases.maxFrases);
    return Promise.resolve(axios.get(`${this.url}/frases?offset=${offset}`, { headers: { Cookie: config.frases.session }}))
      .then(({ data: { results } }) => _.sample(results));
  }

}

module.exports = FrasesApi;