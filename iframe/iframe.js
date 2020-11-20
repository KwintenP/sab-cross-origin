var finalhandler = require("finalhandler");
var https = require("https");
var serveStatic = require("serve-static");

const fs = require("fs");
const key = fs.readFileSync("./key.key");
const cert = fs.readFileSync("./cert.crt");
// Serve up public/ftp folder
var serve = serveStatic("./", { index: ["index.html", "index.htm"] });

// Create server
var server = https.createServer({ key, cert }, function onRequest(req, res) {
  res.setHeader("Cross-Origin-Resource-Policy", "cross-origin");
  res.setHeader("Cross-Origin-Embedder-Policy", "require-corp");

  serve(req, res, finalhandler(req, res));
});

// Listen
server.listen(7588);
