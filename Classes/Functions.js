"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Functions = void 0;
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
exports.Functions = Functions;
