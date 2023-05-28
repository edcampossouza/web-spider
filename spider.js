import fs from "fs";
import path from "path";
import superagent from "superagent";
import { mkdirp } from "mkdirp";
import { urlToFilename } from "./utils.js";

function saveFile(filename, contents, callback) {
  fs.mkdir(path.dirname(filename), { recursive: true }, (err) => {
    if (err) return callback(err);
    fs.writeFile(filename, contents, callback);
  });
}

function download(url, filename, callback) {
  console.log(`Downloading ${url}`);
  superagent.get(url).end((err, res) => {
    if (err) return callback(err);
    saveFile(filename, res.text, (err) => {
      if (err) return callback(err);
      console.log(`Downloaded and saved: ${url}`);
      return callback(null, res.text);
    });
  });
}

export function spider(url, cb) {
  const filename = urlToFilename(url);
  fs.access(filename, (err) => {
    if (!err || err.code !== "ENOENT") return cb(null, filename, false);
    download(url, filename, (err) => {
      if (err) return cb(err);
      return cb(null, filename, true);
    });
  });
}
