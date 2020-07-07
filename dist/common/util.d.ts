declare function isNode(): boolean;
declare function isBrowser(): boolean;
declare function isReactNative(): boolean;
declare function getExecEnvStr(): "ReactNative" | "Browser" | "Node" | "Unknown";
declare const _default: {
    isNode: typeof isNode;
    isBrowser: typeof isBrowser;
    isReactNative: typeof isReactNative;
    getExecEnvStr: typeof getExecEnvStr;
};
export default _default;
