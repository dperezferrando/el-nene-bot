module.exports = {
  discord: {
    botToken: process.env.BOT_TOKEN,
    publicKey: process.env.PUBLIC_KEY,
    godId: process.env.GOD_ID || '298908591782625282'
  },
  frases: {
    apiUrl: process.env.FRASES_API_URL || "http://decada.punchbangstuff.com/api",
    session: process.env.API_SESSION,
    maxFrases: process.env.MAX_FRASES || 437,
    botoneraUrl: process.env.BOTONERA_URL || "http://www.punchbangstuff.com/media/botonera"
  },
  polly: {
    url: process.env.POLLY_URL || "https://streamlabs.com/polly",
    voice: process.env.voice || "Penelope"
  },
  port: process.env.PORT || process.env.$PORT || 9001
};
