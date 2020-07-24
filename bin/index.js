#!/usr/bin/env node
const googleErr = require("../lib/googleErr.js");

// Stores the command iine arguments
var args = process.argv.slice(2, process.argv.length);

// Forms the query string
var query = args.join('+');

// Embeds the query into the URL
var url = `https://www.google.com/search?q=${query}&oq=${query}`;

console.log("Searching your query on google...");

// Calls open() in find()
googleErr.find(url);