"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameEngine = exports.ScenesManager = exports.Scene = exports.Event = exports.Events = exports.AnimationManager = exports.Functions = exports.ChildrensManager = exports.PhisicBody = exports.PhysicsEnginManager = exports.Sprite = exports.Vector6 = exports.Vector2 = exports.ScriptsManager = exports.Script = exports.ImageEntity = exports.EntityManager = exports.Entity = exports.AssetsManager = exports.Asset = exports.Animation = exports.matterjs = void 0;
const matterjs = __importStar(require("matter-js"));
exports.matterjs = matterjs;
var Animation_1 = require("./Classes/Animation");
Object.defineProperty(exports, "Animation", { enumerable: true, get: function () { return Animation_1.Animation; } });
var Asset_1 = require("./Classes/Asset");
Object.defineProperty(exports, "Asset", { enumerable: true, get: function () { return Asset_1.Asset; } });
var AssetsManager_1 = require("./Classes/AssetsManager");
Object.defineProperty(exports, "AssetsManager", { enumerable: true, get: function () { return AssetsManager_1.AssetsManager; } });
var Entity_1 = require("./Classes/Entity");
Object.defineProperty(exports, "Entity", { enumerable: true, get: function () { return Entity_1.Entity; } });
var EntitysManager_1 = require("./Classes/EntitysManager");
Object.defineProperty(exports, "EntityManager", { enumerable: true, get: function () { return EntitysManager_1.EntityManager; } });
var ImageEntity_1 = require("./Classes/ImageEntity");
Object.defineProperty(exports, "ImageEntity", { enumerable: true, get: function () { return ImageEntity_1.ImageEntity; } });
var Script_1 = require("./Classes/Script");
Object.defineProperty(exports, "Script", { enumerable: true, get: function () { return Script_1.Script; } });
var ScriptsManager_1 = require("./Classes/ScriptsManager");
Object.defineProperty(exports, "ScriptsManager", { enumerable: true, get: function () { return ScriptsManager_1.ScriptsManager; } });
var Vector2_1 = require("./Classes/Vector2");
Object.defineProperty(exports, "Vector2", { enumerable: true, get: function () { return Vector2_1.Vector2; } });
var Vector6_1 = require("./Classes/Vector6");
Object.defineProperty(exports, "Vector6", { enumerable: true, get: function () { return Vector6_1.Vector6; } });
var Sprite_1 = require("./Classes/Sprite");
Object.defineProperty(exports, "Sprite", { enumerable: true, get: function () { return Sprite_1.Sprite; } });
var PhysicsEnginManager_ts_1 = require("./Classes/PhysicsEnginManager.ts");
Object.defineProperty(exports, "PhysicsEnginManager", { enumerable: true, get: function () { return PhysicsEnginManager_ts_1.PhysicsEnginManager; } });
var PhysicBody_1 = require("./Classes/PhysicBody");
Object.defineProperty(exports, "PhisicBody", { enumerable: true, get: function () { return PhysicBody_1.PhisicBody; } });
var ChildrensManager_1 = require("./Classes/ChildrensManager");
Object.defineProperty(exports, "ChildrensManager", { enumerable: true, get: function () { return ChildrensManager_1.ChildrensManager; } });
var Functions_1 = require("./Classes/Functions");
Object.defineProperty(exports, "Functions", { enumerable: true, get: function () { return Functions_1.Functions; } });
var AnimationsManager_1 = require("./Classes/AnimationsManager");
Object.defineProperty(exports, "AnimationManager", { enumerable: true, get: function () { return AnimationsManager_1.AnimationManager; } });
var Events_1 = require("./Classes/Events");
Object.defineProperty(exports, "Events", { enumerable: true, get: function () { return Events_1.Events; } });
var Event_1 = require("./Classes/Event");
Object.defineProperty(exports, "Event", { enumerable: true, get: function () { return Event_1.Event; } });
var Scene_1 = require("./Classes/Scene");
Object.defineProperty(exports, "Scene", { enumerable: true, get: function () { return Scene_1.Scene; } });
var ScenesManager_1 = require("./Classes/ScenesManager");
Object.defineProperty(exports, "ScenesManager", { enumerable: true, get: function () { return ScenesManager_1.ScenesManager; } });
var GameEngine_1 = require("./GameEngine");
Object.defineProperty(exports, "GameEngine", { enumerable: true, get: function () { return GameEngine_1.GameEngine; } });
