"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const matter_js_1 = require("matter-js");
const App_1 = __importDefault(require("./App"));
class PhisicBody extends App_1.default {
    constructor(x, y, polygons = [[new matter_js_1.Vector()]], options, app) {
        super(app);
        this.body = matter_js_1.Bodies.fromVertices(x, y, polygons, options, true);
        this.polygons = polygons;
    }
    draw() {
        const ctx = this.app.ctx;
        if (ctx) {
            ctx.beginPath();
            ctx.moveTo(this.body.vertices[0].x, this.body.vertices[0].y);
            this.body.vertices.forEach((p, index) => {
                ctx.lineTo(p.x, p.y);
            });
            // Vuelve al primer vértice para cerrar la forma
            ctx.lineTo(this.body.vertices[0].x, this.body.vertices[0].y);
            ctx.stroke();
        }
    }
}
exports.default = PhisicBody;
