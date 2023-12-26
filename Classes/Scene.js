"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Scene = void 0;
class Scene {
    constructor() {
        this.entitys = [];
    }
    append(type, entity) {
        this.entitys.push(entity);
    }
}
exports.Scene = Scene;
