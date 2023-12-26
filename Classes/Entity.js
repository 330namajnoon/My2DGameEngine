"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ChildrensManager_1 = __importDefault(require("./ChildrensManager"));
const Vector2_1 = __importDefault(require("./Vector2"));
class Entity {
    constructor(name = "New entity", position = new Vector2_1.default(0, 0), rotation = 0, size = new Vector2_1.default(100, 100)) {
        this.childrens = new ChildrensManager_1.default(this);
        this.name = name;
        this.position = position;
        this.rotation = rotation;
        this.size = size;
    }
    getName() {
        return this.name;
    }
    getPosition() {
        return this.position;
    }
    getRotation() {
        return this.rotation;
    }
    getSize() {
        return this.size;
    }
}
exports.default = Entity;
