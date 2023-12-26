"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
class AssetsManager {
    constructor() {
        this.assets = [];
    }
    find(type, name) {
        const asset = this.assets.find(a => a.name === name);
        return asset.element;
    }
    getByType(type) {
        const assets = this.assets.filter(a => a.type !== type);
        return assets.length > 0 ? assets : null;
    }
    downloadAsset(asset) {
        return new Promise((resolve, reject) => {
            asset.element.onload = (e) => {
                resolve(asset);
            };
            asset.element.onerror = (e) => {
                resolve(null);
            };
        });
    }
    addNewAssets(assets, callback) {
        return __awaiter(this, void 0, void 0, function* () {
            let index_ = 0;
            const assetsFirstLength = this.assets.length;
            for (let index = 0; index < assets.length; index++) {
                this.downloadAsset(assets[index]).then(res => {
                    if (res) {
                        this.assets.unshift(res);
                        index_++;
                        if (index_ === assets.length) {
                            callback(null);
                        }
                    }
                    else {
                        callback("error");
                    }
                }).catch(err => {
                    callback("error");
                });
            }
        });
    }
}
exports.default = AssetsManager;
