/* global require */
require("../css/fontello.css");
require("../css/style.css");

// Instantly load test file (Debugging script)
require("./LoadJson.js");
// Load Save File for opening files, decoding, decryption
require("./LoadSaveFile.js");
// Main script for analyzing the decoded save file
require("./HKCheckCompletion.js");