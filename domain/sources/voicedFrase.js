const frasesApi = require("./services/frasesApi");
const pollyChoreada = require("./services/pollyChoreada");

class VoicedFrase {
  constructor() {
    this.frasesApi = frasesApi;
    this.pollyChoreada = pollyChoreada;

  }

  get() {
    return frasesApi.randomFrase()
      .tap(frase => console.log("FRASE:", JSON.stringify(frase)))
      .then(frase => pollyChoreada.hablaPuta(`${frase.frase}. ${frase.autor} (${frase.anio})`))
      .tap(linkDeLaPuta => console.log("LINK DE LA PUTA:", linkDeLaPuta));
  }

}


module.exports = VoicedFrase;