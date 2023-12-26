"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameEngine = void 0;
const Animation_1 = __importDefault(require("./Classes/Animation"));
const Asset_1 = __importDefault(require("./Classes/Asset"));
const AssetsManager_1 = __importDefault(require("./Classes/AssetsManager"));
const Entity_1 = __importDefault(require("./Classes/Entity"));
const EntitysManager_1 = __importDefault(require("./Classes/EntitysManager"));
const ImageEntity_1 = __importDefault(require("./Classes/ImageEntity"));
const Script_1 = __importDefault(require("./Classes/Script"));
const ScriptsManager_1 = __importDefault(require("./Classes/ScriptsManager"));
const Vector2_1 = __importDefault(require("./Classes/Vector2"));
const Vector6_1 = __importDefault(require("./Classes/Vector6"));
const Sprite_1 = __importDefault(require("./Classes/Sprite"));
const PhysicsEnginManager_ts_1 = __importDefault(require("./Classes/PhysicsEnginManager.ts"));
const PhysicBody_1 = __importDefault(require("./Classes/PhysicBody"));
const ChildrensManager_1 = __importDefault(require("./Classes/ChildrensManager"));
const Functions_1 = __importDefault(require("./Classes/Functions"));
const AnimationsManager_1 = __importDefault(require("./Classes/AnimationsManager"));
const Events_1 = __importDefault(require("./Classes/Events"));
const Event_1 = __importDefault(require("./Classes/Event"));
const Scene_1 = __importDefault(require("./Classes/Scene"));
const ScenesManager_1 = __importDefault(require("./Classes/ScenesManager"));
var GameEngine_1 = require("./GameEngine");
Object.defineProperty(exports, "GameEngine", { enumerable: true, get: function () { return GameEngine_1.GameEngine; } });
module.exports = {
    Animation: Animation_1.default,
    Asset: Asset_1.default,
    AssetsManager: AssetsManager_1.default,
    Entity: Entity_1.default,
    EntityManager: EntitysManager_1.default,
    ImageEntity: ImageEntity_1.default,
    Script: Script_1.default,
    ScriptsManager: ScriptsManager_1.default,
    Vector2: Vector2_1.default,
    Vector6: Vector6_1.default,
    Sprite: Sprite_1.default,
    PhysicsEnginManager: PhysicsEnginManager_ts_1.default,
    PhysicBody: PhysicBody_1.default,
    ChildrensManager: ChildrensManager_1.default,
    Functions: Functions_1.default,
    AnimationManager: AnimationsManager_1.default,
    Events: Events_1.default,
    Event: Event_1.default,
    Scene: Scene_1.default,
    ScenesManager: ScenesManager_1.default,
};
