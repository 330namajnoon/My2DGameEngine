"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Entity = void 0;
const ChildrensManager_1 = require("./ChildrensManager");
const Vector2_1 = require("./Vector2");
class Entity {
    constructor(name = "New entity", position = new Vector2_1.Vector2(0, 0), rotation = 0, size = new Vector2_1.Vector2(100, 100)) {
        this.childrens = new ChildrensManager_1.ChildrensManager(this);
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
exports.Entity = Entity;
