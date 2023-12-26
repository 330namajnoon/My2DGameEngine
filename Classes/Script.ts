
import { GameEngine } from "../GameEngine";
import { App } from "./App";
export class Script<EntityType> extends App {
    entity: EntityType;
    initial!: () => void;
    update!: () => void;
    constructor(entity: EntityType, app: GameEngine) {
        super(app);
        this.entity = entity;

    }
}