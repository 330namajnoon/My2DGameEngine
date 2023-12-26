"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Functions {
    constructor() {
        this.functions = [];
    }
    append(function_) {
        this.functions = function_;
    }
    update() {
        this.functions.forEach(f => {
            f();
        });
    }
}
exports.default = Functions;
