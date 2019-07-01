const express = require('express')
const bodyParser = require('body-parser')

const NodeRSA = require('node-rsa')
const jwt = require('jsonwebtoken')

const rsa = new NodeRSA({b: 2048})
const privateKey = rsa.exportKey('pkcs1-private-pem')
const rawPublicKey = rsa.exportKey('components-public-pem')

if (rawPublicKey.e !== 65537) {
  throw new Error('sorry, not supprted ' + rawPublicKey.e)
}
const publicKey = {
  n: rawPublicKey.n.toString('base64').replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/g, ''),
  e: 'AQAB',
}
const keyId = 'kid123'

const app = express()
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.listen(8080)

app.post('/', (req, res) => {
  const payload = req.body
  const token = jwt.sign(payload, privateKey, { algorithm: 'RS256', keyid: keyId})
  res.send(token)
})

app.get('/.well-known/jwks.json', (req, res) => {
  const jwks = {
    "keys": [
      {
        "alg": "RS256",
        "e": publicKey.e,
        "kid": keyId,
        "kty": "RSA",
        "n": publicKey.n,
        "use": "sig"
      }
    ]
  }
  res.send(jwks)
})
