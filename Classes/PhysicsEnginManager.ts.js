"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PhysicsEnginManager = void 0;
const matter_js_1 = require("matter-js");
class PhysicsEnginManager {
    constructor() {
        this.engine = matter_js_1.Engine.create();
    }
    worldAdd(body) {
        matter_js_1.World.add(this.engine.world, body);
    }
    update() {
        matter_js_1.Engine.update(this.engine, 1000 / 60);
    }
}
exports.PhysicsEnginManager = PhysicsEnginManager;
