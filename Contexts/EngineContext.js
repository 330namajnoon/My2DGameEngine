"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class EngineContext {
    setCtx(ctx) {
        this.ctx = ctx;
    }
    setEngine(engine) {
        this.engine = engine;
    }
    setFunctions(functions) {
        this.functions = functions;
    }
    setEvents(events) {
        this.events = events;
    }
    setApp(app) {
        this.app = app;
    }
}
const engineContext = new EngineContext();
exports.default = engineContext;
