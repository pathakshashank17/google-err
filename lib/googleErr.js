const open = require("open");

exports.find = async (url) => {
    await open(url);            // Opens the url into the default browser
}