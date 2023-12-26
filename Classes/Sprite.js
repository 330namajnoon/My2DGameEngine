"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sprite = void 0;
class Sprite {
    constructor(image, cutting, frame) {
        this.callBacks = [];
        this.image = image;
        this.cutting = cutting;
        this.frame = frame;
    }
    setCallBack(callBack) {
        this.callBacks.push(callBack);
    }
    getCallBacks() {
        return this.callBacks;
    }
}
exports.Sprite = Sprite;
