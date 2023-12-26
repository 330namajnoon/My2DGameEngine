"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnimationManager = void 0;
class AnimationManager {
    constructor(animations) {
        this.animations = animations;
        this.currentAnimation = animations[0];
    }
    setCurrentAnimation(name) {
        const animation = this.animations.find(a => a.name === name);
        if (animation) {
            this.currentAnimation = animation;
            return animation;
        }
        else {
            return null;
        }
    }
    getCurrentAnimation() {
        return this.currentAnimation;
    }
}
exports.AnimationManager = AnimationManager;
