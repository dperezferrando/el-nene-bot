module.exports = {
  discord: {
    botToken: process.env.BOT_TOKEN
  },
  frases: {
    apiUrl: process.env.FRASES_API_URL || "http://decada.punchbangstuff.com/api",
    session: process.env.API_SESSION,
    maxFrases: process.env.MAX_FRASES || 437
  },
  polly: {
    url: process.env.POLLY_URL || "https://streamlabs.com/polly",
    voice: process.env.voice || "Penelope"
  }
};