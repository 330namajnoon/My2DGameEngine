"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Asset = void 0;
class Asset {
    constructor(name, type, url) {
        this.name = name;
        this.type = type;
        this.url = url;
        switch (type) {
            case "image":
                this.element = new Image();
                this.element.src = url;
                break;
            case "audio":
                this.element = new Audio(url);
                break;
            case "video":
                this.element = window.document.createElement("video");
                this.element.src = url;
                break;
        }
    }
}
exports.Asset = Asset;
