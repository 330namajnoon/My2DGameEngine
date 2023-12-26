"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class EntityManager {
    constructor() {
        this.entitys = [];
    }
    find(type, name) {
        const entity = this.entitys.find(e => e.getName() === name);
        return entity ? entity : null;
    }
    append(type, entity) {
        this.entitys.push(entity);
    }
    draw() {
        this.entitys.forEach(e => {
            e.draw();
        });
    }
    update() {
        this.entitys.forEach(e => {
            e.update();
        });
    }
}
exports.default = EntityManager;
