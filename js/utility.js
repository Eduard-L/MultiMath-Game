"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logger = exports.getInputValue = void 0;
function getInputValue(id) {
    const inputElement = (document.getElementById(id));
    return inputElement.value;
}
exports.getInputValue = getInputValue;
function logger(message) {
    console.log(message);
}
exports.logger = logger;
//# sourceMappingURL=utility.js.map