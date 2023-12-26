"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Animation {
    constructor(name, totalFrame, sprites) {
        this.loop = true;
        this.frame = 0;
        this.isPlayed = false;
        this.spriteIndex = 0;
        this.totalFrame = totalFrame;
        this.sprites = sprites;
        this.currentSprite = sprites[this.spriteIndex];
        this.name = name;
    }
    renderer() {
        if (this.isPlayed) {
            this.currentSprite.getCallBacks().length > 0 && this.currentSprite.getCallBacks().forEach(c => c(this.frame === (this.totalFrame / 100 * this.currentSprite.frame) ? false : this.frame));
            if (this.frame > (this.totalFrame / 100 * this.currentSprite.frame)) {
                this.spriteIndex === this.sprites.length - 1 ? this.spriteIndex = 0 : this.spriteIndex++;
                this.setCurrntSprite(this.sprites[this.spriteIndex]);
            }
            if (this.frame === this.totalFrame) {
                this.frame = 0;
                this.setCurrntSprite(this.sprites[0]);
                if (!this.loop)
                    this.isPlayed = false;
            }
            else
                this.frame++;
        }
    }
    play(loop = true) {
        this.loop = loop;
        this.isPlayed = true;
    }
    pause() {
        this.isPlayed = false;
    }
    reset() {
        this.setCurrntSprite(this.sprites[0]);
    }
    setCurrntSprite(sprite) {
        if (sprite)
            this.currentSprite = sprite;
    }
    getCurrentSprite() {
        return this.currentSprite;
    }
    getSprite(index) {
        return this.sprites[index];
    }
}
exports.default = Animation;
