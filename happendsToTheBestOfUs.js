// Classic move, Jekyll! Gotta destroy you into ashes now!
var fs = require('fs');
var path = require("path");

var finalPath = path.join(__dirname, "docs")

var exists = fs.existsSync(finalPath);

if (exists) {
  fs.copyFileSync(
    path.join(
      __dirname,
      ".nojekyll"
    ),
    path.join(
      __dirname,
      "docs",
      ".nojekyll"
    )
  )
}