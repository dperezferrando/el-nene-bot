const frasesApi = require("../../services/frasesApi");
const pollyChoreada = require("../../services/pollyChoreada");

class VoicedFrase {
  constructor() {
    this.frasesApi = frasesApi;
    this.pollyChoreada = pollyChoreada;

  }

  get() {
    return frasesApi.randomFrase()
      .tap(frase => console.log("FRASE:", JSON.stringify(frase)))
      .then(frase => pollyChoreada.hablaPuta(`${frase.frase}. ${frase.aclaracion || ""}. ${this._transformAuthor(frase.autor)} (${frase.anio})`))
      .tap(linkDeLaPuta => console.log("LINK DE LA PUTA:", linkDeLaPuta));
  }

  _transformAuthor(author) {
    const mapper = { Ibar: "Íbar", "Yerman": "El Nene"}
    return mapper[author] || author;
  }

}


module.exports = VoicedFrase;