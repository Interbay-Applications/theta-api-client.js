interface ILogLevel {
    TRACE: 0;
    DEBUG: 1;
    INFO: 2;
    WARN: 3;
    ERROR: 4;
    SILENT: 5;
}
declare type LogLevelNumbers = ILogLevel[keyof ILogLevel];
declare type LogLevelDesc = LogLevelNumbers | 'trace' | 'debug' | 'info' | 'warn' | 'error' | 'silent' | keyof ILogLevel;
export default class Logger {
    level: LogLevelDesc;
    static levels: {
        TRACE: number;
        DEBUG: number;
        INFO: number;
        WARN: number;
        ERROR: number;
        SILENT: number;
    };
    private pLevel;
    constructor(level?: LogLevelDesc);
    trace(...msg: any[]): void;
    debug(...msg: any[]): void;
    info(...msg: any[]): void;
    warn(...msg: any[]): void;
    error(...msg: any[]): void;
}
export {};
