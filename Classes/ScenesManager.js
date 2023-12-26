"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const App_1 = __importDefault(require("./App"));
class ScenesManager extends App_1.default {
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
}
exports.default = ScenesManager;
