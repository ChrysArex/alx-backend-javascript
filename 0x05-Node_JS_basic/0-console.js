/*
 * Display message to the STDOUT
*/

function displayMessage(msg) { process.stdout.write(`${msg}\n`); }
module.exports = displayMessage;
