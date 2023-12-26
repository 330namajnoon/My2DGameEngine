"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const App_1 = __importDefault(require("./App"));
class Script extends App_1.default {
    constructor(entity, app) {
        super(app);
        this.entity = entity;
    }
}
exports.default = Script;
