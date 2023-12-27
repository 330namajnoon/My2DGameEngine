"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScenesManager = void 0;
const App_1 = require("./App");
class ScenesManager extends App_1.App {
    constructor() {
        super(...arguments);
        this.scenes = [];
    }
    append(name, scene) {
        this.scenes.push({ name, scene });
    }
    render(name) {
        const scene = this.scenes.find(s => s.name === name);
        if (scene) {
            const scene_ = new scene.scene();
            this.app.entitys.entitys = scene_.entitys;
            this.currentScene = scene;
            scene_.initial(this.app);
            return true;
        }
        else
            return false;
    }
    restart() {
        if (this.currentScene) {
            this.app.entitys.entitys = this.currentScene.scene().entitys;
            return true;
        }
        else
            return false;
    }
    update() {
        if (this.currentScene.scene.update)
            this.currentScene.scene.update();
    }
}
exports.ScenesManager = ScenesManager;
