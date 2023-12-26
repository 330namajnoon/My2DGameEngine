"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChildrensManager = void 0;
class ChildrensManager {
    constructor(entity) {
        this.childrens = [];
        this.entity = entity;
    }
    getByName(name) {
        const entity = this.childrens.find(e => e.getName() === name);
        return entity ? entity : null;
    }
    append(entity) {
        this.childrens.push(entity);
    }
    draw() {
        this.childrens.forEach(e => {
            e.draw();
        });
    }
    update() {
        this.childrens.forEach(e => {
            e.update();
        });
    }
}
exports.ChildrensManager = ChildrensManager;
