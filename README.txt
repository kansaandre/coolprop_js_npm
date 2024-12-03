## Credits

CoolProp version 6.5.0 - last updated 21.11.2023

https://www.npmjs.com/package/coolprop_js_npm <-- published to npm

http://www.coolprop.org/coolprop/wrappers/Javascript/index.html --> In this package, we utilize the CoolProp JavaScript wrapper (coolprop.js), enabling the integration and usage of the CoolProp library within JavaScript environments. 
CoolProp, originally developed in C++, is compiled into WebAssembly bytecode (coolprop.wasm) to ensure compatibility and high performance in web applications.

The JavaScript wrapper doesn't directly call the C++ library. Instead, it acts as an intermediary, translating JavaScript calls into operations that the WebAssembly bytecode can understand and execute. This process involves:

1.WebAssembly Compilation: The C++ code of CoolProp is compiled into WebAssembly, allowing it to run in web browsers with near-native performance.
2. JavaScript Wrapper Functionality: The coolprop.js file serves as an interface to the coolprop.wasm file. It manages loading, initializing, and communicating with the WebAssembly module.
3. API Interactions: Through the JavaScript wrapper, specific functions and APIs of CoolProp are exposed, allowing JavaScript code to leverage the library's capabilities for thermophysical calculations.
4. Web Integration: This setup enables the integration of CoolProp into web applications and other JavaScript-based platforms, bringing robust thermophysical property calculations to these environments.

This npm package includes the CoolProp library, which is developed and maintained by the CoolProp Foundation. CoolProp is released under the MIT License.

- [CoolProp GitHub Repository](https://github.com/CoolProp/CoolProp)
- [CoolProp Website](http://www.coolprop.org/)
- [CoolProp License](https://github.com/CoolProp/CoolProp/blob/master/LICENSE)

Please note that CoolProp is a separate open-source project, and its developers deserve full credit for their contributions to this package. Be sure to review and comply with the MIT License and any other licenses associated with CoolProp.


Q:Why did I make this package?
A:Needed coolprop for Node-RED (meaning NodeJS) and the existing packages did not work and was outdated so I made this package. 
