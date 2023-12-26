"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Script = void 0;
const App_1 = require("./App");
class Script extends App_1.App {
    constructor(entity, app) {
        super(app);
        this.entity = entity;
    }
}
exports.Script = Script;
