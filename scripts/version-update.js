"use strict";

const fs = require("fs");
const path = require("path");
const { exec } = require("child_process");
let pkg;
let version;

fs.readFile(
  path.resolve(__dirname, "../package.json"),
  "UTF-8",
  (err, data) => {
    if (err) throw err;
    pkg = JSON.parse(data);
    console.log(pkg.version);
  }
);

exec("npm show react-motion-toast version", (err, stdout, stderr) => {
  if (err) {
    // node couldn't execute the command
    console.log('Could not execute "npm show react-motion-toast version"');
    console.log(`stderr: ${stderr}`);
    return;
  }

  // the *entire* stdout and stderr (buffered)
  version = stdout.split(".");
  console.log("Version: " + version);
  updateJSON();
});

function newVersionStr(version) {
  var result = version[0];
  for (var i = 1; i < version.length; i++) {
    result = result + "." + version[i];
  }
  console.log("New Version String: " + result);
  return result;
}

function updateJSON() {
  version[version.length - 1] = String(Number(version[version.length - 1]) + 1);
  pkg.version = newVersionStr(version);
  console.log("PKG.Version: " + pkg.version);
  pkg.version = fs.writeFile(
    path.resolve(__dirname, "../package.json"),
    JSON.stringify(pkg),
    "utf8",
    function() {
      console.log("File Write");
    }
  );
}
