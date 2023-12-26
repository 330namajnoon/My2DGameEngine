"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Context {
    constructor() {
        this.context = {};
    }
    addPropertie(name, value) {
        if (!this.context[name]) {
            this.context[name] = value;
            return true;
        }
        else {
            return null;
        }
    }
    getPropertie(name) {
        return this.context[name];
    }
}
exports.default = Context;
