"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function isNode() {
    return (typeof process !== 'undefined' &&
        process.versions != null &&
        process.versions.node != null);
}
function isBrowser() {
    // @ts-ignore
    return window !== 'undefined' && typeof window.document !== 'undefined';
}
function isReactNative() {
    return (typeof navigator !== 'undefined' && navigator.product === 'ReactNative');
}
function getExecEnvStr() {
    if (isReactNative()) {
        return 'ReactNative';
    }
    if (isBrowser()) {
        return 'Browser';
    }
    if (isNode()) {
        return 'Node';
    }
    return 'Unknown';
}
exports.default = {
    isNode: isNode,
    isBrowser: isBrowser,
    isReactNative: isReactNative,
    getExecEnvStr: getExecEnvStr
};
//# sourceMappingURL=util.js.map