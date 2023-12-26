"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const AnimationsManager_1 = __importDefault(require("./AnimationsManager"));
const Entity_1 = __importDefault(require("./Entity"));
const Vector2_1 = __importDefault(require("./Vector2"));
const Events_1 = __importDefault(require("./Events"));
const ScriptsManager_1 = __importDefault(require("./ScriptsManager"));
class ImageEntity extends Entity_1.default {
    constructor(name = "New entity", position = new Vector2_1.default(0, 0), rotation = 0, size = new Vector2_1.default(100, 100), side, sprites, app) {
        super(name, position, rotation, size);
        this.events = new Events_1.default();
        this.draw = () => {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w;
            const { image, cutting, frame } = this.animations.getCurrentAnimation().getCurrentSprite();
            const position = this.getPosition();
            const size = this.getSize();
            if (this.app.ctx) {
                (_a = this.app.ctx) === null || _a === void 0 ? void 0 : _a.save();
                if (cutting) {
                    (_b = this.app.ctx) === null || _b === void 0 ? void 0 : _b.translate(position.x, position.y);
                    switch (this.side) {
                        case "LEFT":
                            (_c = this.app.ctx) === null || _c === void 0 ? void 0 : _c.rotate(-(this.getRotation() * (Math.PI / 180)));
                            (_d = this.app.ctx) === null || _d === void 0 ? void 0 : _d.scale(-1, 1);
                            break;
                        case "LEFT_BOTTOM":
                            (_e = this.app.ctx) === null || _e === void 0 ? void 0 : _e.rotate(-(this.getRotation() * (Math.PI / 180)));
                            (_f = this.app.ctx) === null || _f === void 0 ? void 0 : _f.scale(-1, 1);
                            break;
                        case "LEFT_TOP":
                            (_g = this.app.ctx) === null || _g === void 0 ? void 0 : _g.rotate(-(this.getRotation() * (Math.PI / 180)));
                            (_h = this.app.ctx) === null || _h === void 0 ? void 0 : _h.scale(-1, -1);
                            break;
                        case "BOTTOM":
                            (_j = this.app.ctx) === null || _j === void 0 ? void 0 : _j.rotate(this.getRotation() * (Math.PI / 180));
                            (_k = this.app.ctx) === null || _k === void 0 ? void 0 : _k.scale(1, 1);
                            break;
                        case "RIGHT":
                            (_l = this.app.ctx) === null || _l === void 0 ? void 0 : _l.rotate(this.getRotation() * (Math.PI / 180));
                            (_m = this.app.ctx) === null || _m === void 0 ? void 0 : _m.scale(1, 1);
                            break;
                        case "RIGHT_BOTTOM":
                            (_o = this.app.ctx) === null || _o === void 0 ? void 0 : _o.rotate(this.getRotation() * (Math.PI / 180));
                            (_p = this.app.ctx) === null || _p === void 0 ? void 0 : _p.scale(1, 1);
                            break;
                        case "RIGHT_TOP":
                            (_q = this.app.ctx) === null || _q === void 0 ? void 0 : _q.rotate(this.getRotation() * (Math.PI / 180));
                            (_r = this.app.ctx) === null || _r === void 0 ? void 0 : _r.scale(1, -1);
                            break;
                        case "TOP":
                            (_s = this.app.ctx) === null || _s === void 0 ? void 0 : _s.rotate(-(this.getRotation() * (Math.PI / 180)));
                            (_t = this.app.ctx) === null || _t === void 0 ? void 0 : _t.scale(1, -1);
                            break;
                    }
                    (_u = this.app.ctx) === null || _u === void 0 ? void 0 : _u.drawImage(image, cutting.x, cutting.y, cutting.w, cutting.h, cutting.xs - cutting.orgX, cutting.ys - cutting.orgY, cutting.ws, cutting.hs);
                }
                else
                    (_v = this.app.ctx) === null || _v === void 0 ? void 0 : _v.drawImage(image, position.x, position.y, size.x, size.y);
                (_w = this.app.ctx) === null || _w === void 0 ? void 0 : _w.restore();
            }
            this.childrens.draw();
        };
        this.update = () => {
            this.scripts.update();
            this.animations.getCurrentAnimation().renderer();
            this.childrens.update();
        };
        this.animations = new AnimationsManager_1.default(sprites);
        this.side = side;
        this.app = app;
        this.scripts = new ScriptsManager_1.default(this, this.app);
    }
    setSide(side) {
        this.side = side;
    }
}
exports.default = ImageEntity;
