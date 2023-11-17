// Require the CoolProp WebAssembly module
const CoolProp = require('./coolprop.js');

// Set the library path to coolprop_sources
CoolProp.setLibraryPath('./coolprop_sources');

// Export the CoolProp module for use in other Node.js files
module.exports = CoolProp;
