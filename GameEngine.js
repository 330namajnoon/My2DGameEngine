"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameEngine = void 0;
const matter_js_1 = require("matter-js");
const AssetsManager_1 = require("./Classes/AssetsManager");
const EntitysManager_1 = require("./Classes/EntitysManager");
const Events_1 = require("./Classes/Events");
const Functions_1 = require("./Classes/Functions");
const ImageEntity_1 = require("./Classes/ImageEntity");
const PhysicBody_1 = require("./Classes/PhysicBody");
const PhysicsEnginManager_ts_1 = require("./Classes/PhysicsEnginManager.ts");
const ScenesManager_1 = require("./Classes/ScenesManager");
const Vector2_1 = require("./Classes/Vector2");
class GameEngine {
    constructor(args = { canvas: window.document.createElement("canvas"), width: window.innerWidth, heigth: window.innerHeight, root: window.document.body }) {
        this.engine = new PhysicsEnginManager_ts_1.PhysicsEnginManager();
        this.frame = 0;
        this.assets = new AssetsManager_1.AssetsManager();
        this.entitys = new EntitysManager_1.EntityManager();
        this.functions = new Functions_1.Functions();
        this.events = new Events_1.Events();
        this.scenes = new ScenesManager_1.ScenesManager(this);
        this.canvas = args.canvas ? args.canvas : window.document.createElement("canvas");
        this.ctx = this.canvas.getContext("2d");
        args.root.appendChild(this.canvas);
        this.setCanvasSize(args.width ? args.width : window.innerWidth, args.heigth ? args.heigth : window.innerHeight);
    }
    draw() {
        this.entitys.draw();
    }
    update() {
        var _a;
        (_a = this.ctx) === null || _a === void 0 ? void 0 : _a.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.draw();
        this.engine.update();
        this.entitys.update();
        this.functions.update();
        this.events.calling();
        this.scenes.scenes.forEach((scene) => {
            if (scene.update)
                scene.update();
        });
        requestAnimationFrame(this.update.bind(this));
    }
    start(assets, scenes, callBack) {
        this.assets.addNewAssets(assets, (err) => {
            if (!err) {
                scenes.forEach((scene, index) => {
                    this.scenes.append(scene.name, scene.scene);
                    if (index === 0)
                        this.scenes.render(scene.name);
                    this.update();
                    callBack(false);
                });
            }
            else {
                callBack(true);
            }
        });
    }
    setCanvasSize(width, height) {
        this.canvas.width = width;
        this.canvas.height = height;
    }
    createImageEntity(name = "New entity", position = new Vector2_1.Vector2(0, 0), rotation = 0, size = new Vector2_1.Vector2(100, 100), side, sprites) {
        return new ImageEntity_1.ImageEntity(name, position, rotation, size, side, sprites, this);
    }
    createPhisicBody(x, y, polygons = [[new matter_js_1.Vector()]], options) {
        return new PhysicBody_1.PhisicBody(x, y, polygons, options, this);
    }
}
exports.GameEngine = GameEngine;
