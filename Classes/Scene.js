"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Scene {
    constructor() {
        this.entitys = [];
    }
    append(type, entity) {
        this.entitys.push(entity);
    }
}
exports.default = Scene;
