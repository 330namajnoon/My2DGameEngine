"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ScriptsManager {
    constructor(entity, app) {
        this.scripts = [];
        this.entity = entity;
        this.app = app;
    }
    setScripts(scripts) {
        scripts.forEach(s => {
            this.scripts.push(new s(this.entity, this.app));
        });
        this.initial();
    }
    initial() {
        this.scripts.forEach(s => {
            s.initial();
        });
    }
    update() {
        this.scripts.forEach(s => {
            s.update();
        });
    }
}
exports.default = ScriptsManager;
