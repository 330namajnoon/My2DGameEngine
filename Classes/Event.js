"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Event = void 0;
//export type CallBackType = MouseEvent | KeyboardEvent;
class Event {
    constructor(type, callBack, bodys, key) {
        this.key = key;
        this.type = type;
        this.bodys = bodys;
        this.callBack = callBack;
    }
}
exports.Event = Event;
