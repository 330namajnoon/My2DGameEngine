"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const matter_js_1 = require("matter-js");
const Event_1 = __importDefault(require("./Event"));
class Events {
    constructor() {
        this.isKeyDown = false;
        this.events = [];
        this.callingEvents = [];
        window.addEventListener("mousedown", (e) => {
            this.events.forEach(e_ => {
                if (e_.type === "mousedown") {
                    const mousePosition = { x: e.clientX, y: e.clientY };
                    const bodyUnderMouse = matter_js_1.Query.point(e_.bodys, mousePosition);
                    if (bodyUnderMouse.length > 0)
                        e_.callBack(e, bodyUnderMouse);
                }
            });
        });
        window.addEventListener("mousemove", (e) => {
            this.events.forEach(e_ => {
                if (e_.type === "mousemove") {
                    const mousePosition = { x: e.clientX, y: e.clientY };
                    const bodyUnderMouse = matter_js_1.Query.point(e_.bodys, mousePosition);
                    if (bodyUnderMouse.length > 0)
                        e_.callBack(e, bodyUnderMouse);
                }
            });
        });
        window.addEventListener("keydown", (e) => {
            if (!this.isKeyDown) {
                this.events.forEach(e_ => {
                    if (e_.type === "keydown" && e_.key === e.key) {
                        const event = this.callingEvents.find(_e_ => _e_.event.key === e.key);
                        this.callingEvents.push({ e, event: e_ });
                    }
                });
                this.isKeyDown = true;
            }
        });
        window.addEventListener("keyup", (e) => {
            this.isKeyDown = false;
            this.callingEvents = this.callingEvents.filter(e_ => e_.event.key !== e.key);
            this.events.forEach(e_ => {
                if (e_.key === e.key && e_.type === "keyup") {
                    e_.callBack(e, null);
                }
            });
        });
        window.addEventListener("keyup", (e) => {
            this.events.forEach(e_ => {
                if (e_.key === e.key && e_.type === "keypress") {
                    e_.callBack(e, null);
                }
            });
        });
    }
    mouseOn(type, callBack, bodys = []) {
        this.events.push(new Event_1.default(type, callBack, bodys, null));
    }
    keyboardOn(type, key, callBack) {
        this.events.push(new Event_1.default(type, callBack, [], key));
    }
    calling() {
        this.callingEvents.forEach(e => {
            e.event.callBack(e.e, null);
        });
    }
}
exports.default = Events;
