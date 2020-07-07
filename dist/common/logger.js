"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Logger = /** @class */ (function () {
    function Logger(level) {
        if (level === void 0) { level = 5; }
        this.pLevel = level;
    }
    Object.defineProperty(Logger.prototype, "level", {
        get: function () {
            return this.pLevel;
        },
        set: function (level) {
            this.pLevel = level;
        },
        enumerable: true,
        configurable: true
    });
    Logger.prototype.trace = function () {
        var msg = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            msg[_i] = arguments[_i];
        }
        if (Logger.levels.TRACE <= this.level) {
            return;
        }
        // tslint:disable-next-line: no-console
        console.trace(msg);
    };
    Logger.prototype.debug = function () {
        var msg = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            msg[_i] = arguments[_i];
        }
        if (Logger.levels.DEBUG <= this.level) {
            return;
        }
        // tslint:disable-next-line: no-console
        console.log(msg);
    };
    Logger.prototype.info = function () {
        var msg = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            msg[_i] = arguments[_i];
        }
        if (Logger.levels.INFO <= this.level) {
            return;
        }
        // tslint:disable-next-line: no-console
        console.info(msg);
    };
    Logger.prototype.warn = function () {
        var msg = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            msg[_i] = arguments[_i];
        }
        if (Logger.levels.WARN <= this.level) {
            return;
        }
        // tslint:disable-next-line: no-console
        console.warn(msg);
    };
    Logger.prototype.error = function () {
        var msg = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            msg[_i] = arguments[_i];
        }
        if (Logger.levels.ERROR <= this.level) {
            return;
        }
        // tslint:disable-next-line: no-console
        console.error(msg);
    };
    Logger.levels = {
        TRACE: 0,
        DEBUG: 1,
        INFO: 2,
        WARN: 3,
        ERROR: 4,
        SILENT: 5
    };
    return Logger;
}());
exports.default = Logger;
//# sourceMappingURL=logger.js.map