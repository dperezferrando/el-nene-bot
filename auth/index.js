const nacl = require('tweetnacl');
const config = require("../config");

module.exports = (req, res, next) => {
  // Your public key can be found on your application in the Developer Portal
  const PUBLIC_KEY = config.discord.publicKey;

  const signature = req.get('X-Signature-Ed25519');
  const timestamp = req.get('X-Signature-Timestamp');
  const body = req.rawBody; // rawBody is expected to be a string, not raw bytes

  const isVerified = nacl.sign.detached.verify(
    Buffer.from(timestamp + body),
    Buffer.from(signature, 'hex'),
    Buffer.from(PUBLIC_KEY, 'hex')
  );

  if (!isVerified) {
    return res.status(401).end('invalid request signature');
  }
  next();  
}
