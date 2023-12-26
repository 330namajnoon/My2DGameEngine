"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function stringToVector2(st) {
    const vector = [];
    const stToVec = st.split(/\s+/);
    let i = 0;
    while (stToVec[i]) {
        let x = parseFloat(stToVec[1]);
        let y = parseFloat(stToVec[i + 1] ? stToVec[i + 1] : "0");
        vector.push({ x, y });
        i += 2;
    }
    return vector;
}
exports.default = stringToVector2;
