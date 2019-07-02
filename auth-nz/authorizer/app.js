const express = require('express')
const app = express()
app.listen(8080)

function extractSub(req) {
  const buf = Buffer.from(req.headers.jwt_payload_in_json_base64_encoded, 'base64')
  const sub = JSON.parse(buf.toString()).sub
  return sub.includes('ng') ? 403 : 200
}

app.get(/^\/authz\//, (req, res) => res.send(extractSub(req)))
app.post(/^\/authz\//, (req, res) => res.send(extractSub(req)))
