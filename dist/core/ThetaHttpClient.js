"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = __importDefault(require("axios"));
var blueimp_md5_1 = __importDefault(require("blueimp-md5"));
var httpClient_1 = require("../http/interfaces/httpClient");
var ThetaClientBase_1 = __importDefault(require("./ThetaClientBase"));
var ThetaHttpClient = /** @class */ (function (_super) {
    __extends(ThetaHttpClient, _super);
    function ThetaHttpClient(config) {
        if (config === void 0) { config = {
            hostname: ThetaHttpClient.hostnames.APModeIP
        }; }
        var _this = _super.call(this) || this;
        if (config.axiosConfig !== undefined) {
            config.axiosConfig = {};
        }
        if (config.hostname !== undefined) {
            config.axiosConfig = __assign({}, config.axiosConfig, { baseURL: "http://" + config.hostname });
        }
        _this.axios = axios_1.default.create(config.axiosConfig);
        if (config.auth !== undefined) {
            _this.auth = config.auth;
        }
        return _this;
    }
    /**
     * API GET /osc/info
     * [概要]
     * カメラに関する基本情報や、サポートしている機能を取得する。
     * @param config Axios Request Config
     * @return Axios Response
     */
    ThetaHttpClient.prototype.oscInfo = function (config) {
        if (config === void 0) { config = {}; }
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.send(config, httpClient_1.Protocols.Info, {})];
            });
        });
    };
    /**
     * API POST /osc/state
     * [概要]
     * カメラの状態を取得する。
     * stateオブジェクトの内容が変化したことはCheckForUpdatesで確認できる。
     * @param config Axios Request Config
     * @return Axios Response
     */
    ThetaHttpClient.prototype.oscState = function (config) {
        if (config === void 0) { config = {}; }
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.send(config, httpClient_1.Protocols.State, {})];
            });
        });
    };
    /**
     * POST /osc/checkForUpdates
     * [概要]
     * 現在の状態IDを取得し、Stateの状態変化を確認する。
     * @param stateFingerprint 状態ID
     * @param config config Axios Request Config
     * @return Axios Response
     */
    ThetaHttpClient.prototype.oscCheckForUpdates = function (stateFingerprint, config) {
        if (config === void 0) { config = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                data = { stateFingerprint: stateFingerprint };
                return [2 /*return*/, this.send(config, httpClient_1.Protocols.CheckForUpdates, data)];
            });
        });
    };
    /**
     * POST /osc/commands/execute
     * [概要]
     * commandsカテゴリ内のコマンドを実行する。
     * @param name 実行するコマンド
     * @param parameters 各コマンド実行に必要な入力パラメータ
     * @param config
     */
    ThetaHttpClient.prototype.oscCommandsExecute = function (name, parameters, config) {
        if (parameters === void 0) { parameters = {}; }
        if (config === void 0) { config = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                data = { name: name, parameters: parameters };
                return [2 /*return*/, this.send(config, httpClient_1.Protocols.Execute, data)];
            });
        });
    };
    /**
     * POST /osc/commands/status
     * [概要]
     * コマンドの実行状況を取得する。
     * @param id Commands/Executeで取得したコマンドID
     * @param config Axios Request Config
     * @return Axios Response
     */
    ThetaHttpClient.prototype.oscCommandsStatus = function (id, config) {
        if (config === void 0) { config = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                data = { id: id };
                return [2 /*return*/, this.send(config, httpClient_1.Protocols.Status, data)];
            });
        });
    };
    /**
     * GET /legal-information/open-source-licenses
     * [概要]
     * カメラに関するオープンソースライセンス情報を取得する。
     * @param config Axios Request Config
     * @return Axios Response
     */
    ThetaHttpClient.prototype.OpenSourceLicenses = function (config) {
        if (config === void 0) { config = {}; }
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.send(config, httpClient_1.Protocols.OpenSourceLicenses, {})];
            });
        });
    };
    /**
     * GET /plugin
     * [概要]
     * プラグイン提供のWebページを開く。
     * RICOH THETA Z1以降ではプラグインの起動状態_pluginRunningが停止中の場合はクエリ「id=<PluginOrder番号>」
     * (<PluginOrder番号> = 1, 2, 3)で表示対象のプラグインを指定すること。
     * @param config Axios Request Config
     * @return Axios Response
     */
    ThetaHttpClient.prototype.plugin = function (config) {
        if (config === void 0) { config = {}; }
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.send(config, httpClient_1.Protocols.Plugin, {})];
            });
        });
    };
    /**
     * 無線LANをOFFにする。
     * @param config Axios Request Config
     */
    ThetaHttpClient.prototype.cameraFinishWlan = function (config) {
        if (config === void 0) { config = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                data = {
                    name: httpClient_1.Commands._finishWlan,
                    parameters: {}
                };
                return [2 /*return*/, this.send(config, httpClient_1.Protocols.Execute, data)];
            });
        });
    };
    /**
     * 静止画撮影を開始する。
     * exposureDelayが有効の場合、セルフタイマーで撮影が開始される。
     * @param config Axios Request Config
     */
    ThetaHttpClient.prototype.cameraTakePicture = function (config) {
        if (config === void 0) { config = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                data = {
                    name: httpClient_1.Commands.takePicture,
                    parameters: {}
                };
                return [2 /*return*/, this.send(config, httpClient_1.Protocols.Execute, data)];
            });
        });
    };
    /**
     * 連続撮影を開始する。
     * 撮影モード（captureMode)と_modeの設定により撮影方法が変わる。
     * 静止画撮影モードの時、_modeによってインターバル撮影、インターバル合成撮影、マルチブラケット撮影、レンズ別時間差撮影のいずれかの撮影を開始する。
     * 動画撮影モードの時、動画撮影を開始する。
     * exposureDelayが有効の場合、セルフタイマーで撮影が開始される。ただしレンズ別時間差撮影の場合にはセルフタイマーは無効となる。
     * 動画撮影または枚数指定なしのインターバル撮影の場合には、Commands/ExecuteとCommands/Statusのstateは即時に"done"となる。
     * 枚数指定ありのインターバル撮影、インターバル合成撮影、マルチブラケット撮影、レンズ別時間差撮影の場合には、 Commands/ExecuteとCommands/Statusのprogressオブジェクトから進捗状況を取得できる。また、指定した枚数または時間の撮影が完了したときにstateが"done"となる。
     * @param _mode 静止画撮影モード時の連続撮影方法
     *               無指定の場合はインターバル撮影となる
     *               （interval: インターバル撮影、composite: インターバル合成撮影、bracket: マルチブラケット撮影、thimeShift: レンズ別時間差撮影）
     *               動画記録モードのとき、本パラメータは指定できない
     * @param config Axios Request Config
     */
    ThetaHttpClient.prototype.cameraStartCapture = function (_mode, config) {
        if (config === void 0) { config = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var param, data;
            return __generator(this, function (_a) {
                param = { _mode: _mode };
                data = {
                    name: httpClient_1.Commands.startCapture,
                    parameters: param
                };
                return [2 /*return*/, this.send(config, httpClient_1.Protocols.Execute, data)];
            });
        });
    };
    /**
     * 連続撮影を停止する。
     * @param config Axios Request Config
     */
    ThetaHttpClient.prototype.cameraStopCapture = function (config) {
        if (config === void 0) { config = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                data = {
                    name: httpClient_1.Commands.stopCapture,
                    parameters: {}
                };
                return [2 /*return*/, this.send(config, httpClient_1.Protocols.Execute, data)];
            });
        });
    };
    /**
     * 静止画および動画ファイルリストを取得する。
     * @param param Parameters
     * @param config Axios Request Config
     */
    ThetaHttpClient.prototype.cameraListFiles = function (param, config) {
        if (config === void 0) { config = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                data = {
                    name: httpClient_1.Commands.listFiles,
                    parameters: param
                };
                return [2 /*return*/, this.send(config, httpClient_1.Protocols.Execute, data)];
            });
        });
    };
    /**
     * 静止画または動画ファイルを削除する。
     * 指定したファイルURLに存在しないか削除できないファイルが含まれている場合、それ以外のファイルの削除も実行されずエラーとなる。
     * @param fileUrls 削除するファイルのURLリスト
     *                  ファイルURLを最大128個指定できる
     *                  一括削除する場合は、"all"で全てのファイル、"image"で全ての静止画、"video"で全ての動画を削除可能（単独で指定すること）
     * @param config Axios Request Config
     */
    ThetaHttpClient.prototype.cameraDelete = function (fileUrls, config) {
        if (config === void 0) { config = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var param, data;
            return __generator(this, function (_a) {
                param = { fileUrls: fileUrls };
                data = {
                    name: httpClient_1.Commands.delete,
                    parameters: param
                };
                return [2 /*return*/, this.send(config, httpClient_1.Protocols.Execute, data)];
            });
        });
    };
    /**
     * ライブビューを取得する。
     * RICOH THETA SおよびRICOH THETA SCは静止画撮影モード時のみ実行可能。
     * RICOH THETA V以降は静止画撮影モード時と動画撮影モード時に実行可能。
     * 本体操作、撮影の開始、撮影モード切替のいずれかでデータの取得が終了する。
     * @param config Axios Request Config
     */
    ThetaHttpClient.prototype.cameraGetLivePreview = function (config) {
        if (config === void 0) { config = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                data = {
                    name: httpClient_1.Commands.getLivePreview,
                    parameters: {}
                };
                return [2 /*return*/, this.send(config, httpClient_1.Protocols.Execute, data)];
            });
        });
    };
    /**
     * 指定した静止画のメタ情報参照。
     * @param fileUrl JPEGファイルID
     * @param config Axios Request Config
     */
    ThetaHttpClient.prototype.cameraGetMetadata = function (fileUrl, config) {
        if (config === void 0) { config = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var param, data;
            return __generator(this, function (_a) {
                param = { fileUrl: fileUrl };
                data = {
                    name: httpClient_1.Commands._getMetadata,
                    parameters: param
                };
                return [2 /*return*/, this.send(config, httpClient_1.Protocols.Execute, data)];
            });
        });
    };
    /**
     * 撮影や本体などのプロパティ、各プロパティサポート仕様を取得する。
     * 取得可能なプロパティはAPI v2.1リファレンスのoptionsカテゴリを参照すること。
     * 各プロパティにおけるサポート仕様は、プロパティ名+"Support"の名称で取得できる。
     * ex. 「iso」のサポート仕様プロパティ名:「isoSupport」
     * 詳細なリクエスト例は[Getting Started](https://developers.theta360.com/ja/docs/v2.1/api_reference/getting_started.html#get_and_set_options)を参照。
     * @param optionNames JSON形式取得したいオプション名リスト
     * @param config Axios Request Config
     */
    ThetaHttpClient.prototype.cameraGetOptions = function (optionNames, config) {
        if (config === void 0) { config = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var param, data;
            return __generator(this, function (_a) {
                param = { optionNames: optionNames };
                data = {
                    name: httpClient_1.Commands.getOptions,
                    parameters: param
                };
                return [2 /*return*/, this.send(config, httpClient_1.Protocols.Execute, data)];
            });
        });
    };
    /**
     * 撮影や本体の全ての設定をリセットする。
     * リセット後、システム再起動する。
     * @param config Axios Request Config
     */
    ThetaHttpClient.prototype.cameraReset = function (config) {
        if (config === void 0) { config = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                data = {
                    name: httpClient_1.Commands.reset,
                    parameters: {}
                };
                return [2 /*return*/, this.send(config, httpClient_1.Protocols.Execute, data)];
            });
        });
    };
    /**
     * 撮影や本体などのプロパティの設定。
     * 設定出来るプロパティ、仕様はAPI v2.1リファレンスのoptionsカテゴリやサポート仕様の取得((camera.getOptions)[https://developers.theta360.com/ja/docs/v2.1/api_reference/commands/camera.get_options.html])で確認すること。
     * 詳細なリクエスト例は(Getting Started)[https://developers.theta360.com/ja/docs/v2.1/api_reference/getting_started.html#get_and_set_options]を参照。
     * @param param
     * @param config Axios Request Config
     */
    ThetaHttpClient.prototype.cameraSetOptions = function (param, config) {
        if (config === void 0) { config = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                data = {
                    name: httpClient_1.Commands.setOptions,
                    parameters: param
                };
                return [2 /*return*/, this.send(config, httpClient_1.Protocols.Execute, data)];
            });
        });
    };
    /**
     * コマンドcamera._setMySettingで設定した撮影プロパティを取得する。
     * 取得可能なプロパティはOptions Overviewのマイセッティングを参照。
     * @param mode 取得対象の撮影モード
     *              RICOH THETA Vファームウェアv2.30.1以降で指定
     *              (image: 静止画撮影モード、video: 動画撮影モード)
     *              RICOH THETA SおよびSCでは無指定で静止画撮影モードのみ
     * @param optionNames JSON形式取得したいオプション名リスト
     *                     RICOH THETA S, SCでのみ指定
     *                     それ以外の機種では無指定で全取得
     * @param config Axios Request Config
     */
    ThetaHttpClient.prototype.cameraGetMySetting = function (mode, optionNames, config) {
        if (config === void 0) { config = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var param, data;
            return __generator(this, function (_a) {
                param = { mode: mode, optionNames: optionNames };
                data = {
                    name: httpClient_1.Commands._getMySetting,
                    parameters: param
                };
                return [2 /*return*/, this.send(config, httpClient_1.Protocols.Execute, data)];
            });
        });
    };
    /**
     * 撮影条件をマイセッティング登録する。
     * 起動中にプロパティを調整するにはcamera.setOptionsで設定すること。
     * コマンドからのリセットcamera.resetで初期値に戻すことが可能。
     * RICOH THETA V以前では起動時にマイセッティング登録が反映される。
     * RICOH THETA Z1以降ではマイセッティングモード切り替え時にマイセッティング登録が反映される。
     * 設定可能なプロパティはOptions Overviewのマイセッティングを参照。
     * @param mode 設定対象の撮影モード
     *              RICOH THETA Vファームウェアv2.30.1以降で指定
     *              (image: 静止画撮影モード、video: 動画撮影モード)
     *              RICOH THETA SおよびSCでは無指定で静止画撮影モードのみ
     * @param options JSON形式による設定したいオプション名と設定値セット
     * @param config Axios Request Config
     */
    ThetaHttpClient.prototype.cameraSetMySetting = function (mode, options, config) {
        if (config === void 0) { config = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var param, data;
            return __generator(this, function (_a) {
                param = { mode: mode, options: options };
                data = {
                    name: httpClient_1.Commands._setMySetting,
                    parameters: param
                };
                return [2 /*return*/, this.send(config, httpClient_1.Protocols.Execute, data)];
            });
        });
    };
    /**
     * 作動中のセルフタイマーの撮影を停止する。
     * セルフタイマー((exposureDelay)[https://developers.theta360.com/ja/docs/v2.1/api_reference/options/exposure_delay.html])が有効の場合、
     * (camera.takePicture)[https://developers.theta360.com/ja/docs/v2.1/api_reference/commands/camera.take_picture.html]、
     * (camera.startCapture)[https://developers.theta360.com/ja/docs/v2.1/api_reference/commands/camera.start_capture.html]で撮影開始される。
     * @param config Axios Request Config
     */
    ThetaHttpClient.prototype.cameraStopSelfTimer = function (config) {
        if (config === void 0) { config = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                data = {
                    name: httpClient_1.Commands._stopSelfTimer,
                    parameters: {}
                };
                return [2 /*return*/, this.send(config, httpClient_1.Protocols.Execute, data)];
            });
        });
    };
    /**
     * 保存済み動画のフォーマットを変換する。
     * @param param
     * @param config Axios Request Config
     */
    ThetaHttpClient.prototype.cameraConvertVideoFormats = function (param, config) {
        if (config === void 0) { config = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                data = {
                    name: httpClient_1.Commands._convertVideoFormats,
                    parameters: param
                };
                return [2 /*return*/, this.send(config, httpClient_1.Protocols.Execute, data)];
            });
        });
    };
    /**
     * 保存済み動画のフォーマット変換を中止する。
     * @param config Axios Request Config
     */
    ThetaHttpClient.prototype.cameraCancelVideoConvert = function (config) {
        if (config === void 0) { config = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                data = {
                    name: httpClient_1.Commands._cancelVideoConvert,
                    parameters: {}
                };
                return [2 /*return*/, this.send(config, httpClient_1.Protocols.Execute, data)];
            });
        });
    };
    /**
     * カメラに接続するBLEデバイス（スマートフォンアプリ側）の識別情報（UUID）をカメラ側に登録する。
     * カメラの無線LANがダイレクトモードの場合に設定できる。
     * @param uuid フォーマット： xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
     *                            アルファベットの大文字、小文字は区別しない。
     * @param config Axios Request Config
     */
    ThetaHttpClient.prototype.cameraSetBluetoothDevice = function (uuid, config) {
        if (config === void 0) { config = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var param, data;
            return __generator(this, function (_a) {
                param = { uuid: uuid };
                data = {
                    name: httpClient_1.Commands._setBluetoothDevice,
                    parameters: param
                };
                return [2 /*return*/, this.send(config, httpClient_1.Protocols.Execute, data)];
            });
        });
    };
    /**
     * クライアントモードで使用するアクセスポイントのリストを取得する。
     * @param config Axios Request Config
     */
    ThetaHttpClient.prototype.cameraListAccessPoints = function (config) {
        if (config === void 0) { config = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                data = {
                    name: httpClient_1.Commands._listAccessPoints,
                    parameters: {}
                };
                return [2 /*return*/, this.send(config, httpClient_1.Protocols.Execute, data)];
            });
        });
    };
    /**
     * クライアントモードで使用するアクセスポイント情報を設定する。
     * @param param
     * @param config  Axios Request Config
     */
    ThetaHttpClient.prototype.cameraSetAccessPoint = function (param, config) {
        if (config === void 0) { config = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                data = {
                    name: httpClient_1.Commands._setAccessPoint,
                    parameters: param
                };
                return [2 /*return*/, this.send(config, httpClient_1.Protocols.Execute, data)];
            });
        });
    };
    /**
     * クライアントモードで使用するアクセスポイント情報を削除する。
     * @param ssid SSID
     * @param config Axios Request Config
     */
    ThetaHttpClient.prototype.cameraDeleteAccessPoint = function (ssid, config) {
        if (config === void 0) { config = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var param, data;
            return __generator(this, function (_a) {
                param = { ssid: ssid };
                data = {
                    name: httpClient_1.Commands._deleteAccessPoint,
                    parameters: param
                };
                return [2 /*return*/, this.send(config, httpClient_1.Protocols.Execute, data)];
            });
        });
    };
    /**
     * インストール済みのプラグインのリストを取得する。
     * @param config Axios Request Config
     */
    ThetaHttpClient.prototype.cameraListPlugins = function (config) {
        if (config === void 0) { config = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                data = {
                    name: httpClient_1.Commands._listPlugins,
                    parameters: {}
                };
                return [2 /*return*/, this.send(config, httpClient_1.Protocols.Execute, data)];
            });
        });
    };
    /**
     * インストール済みのプラグインを起動対象に設定する。
     * RICOH THETA Z1以降では本コマンドは無視される。camera._pluginControlを使用すること。
     * @param packageName 起動対象にするプラグインのパッケージ名
     * @param boot 起動選択
     *         trueを指定すること
     * @param config Axios Request Config
     */
    ThetaHttpClient.prototype.cameraSetPlugin = function (packageName, boot, config) {
        if (config === void 0) { config = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var param, data;
            return __generator(this, function (_a) {
                param = { packageName: packageName, boot: boot };
                data = {
                    name: httpClient_1.Commands._setPlugin,
                    parameters: param
                };
                return [2 /*return*/, this.send(config, httpClient_1.Protocols.Execute, data)];
            });
        });
    };
    /**
     * プラグインの起動・停止。
     * @param param
     * @param config Axios Request Config
     */
    ThetaHttpClient.prototype.cameraPluginControl = function (param, config) {
        if (config === void 0) { config = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                data = {
                    name: httpClient_1.Commands._pluginControl,
                    parameters: param
                };
                return [2 /*return*/, this.send(config, httpClient_1.Protocols.Execute, data)];
            });
        });
    };
    /**
     * インストール済みのプラグインのライセンスを取得する。
     * @param packageName 取得対象のプラグインのパッケージ名
     * @param config Axios Request Config
     */
    ThetaHttpClient.prototype.cameraGetPluginLicense = function (packageName, config) {
        if (config === void 0) { config = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var param, data;
            return __generator(this, function (_a) {
                param = { packageName: packageName };
                data = {
                    name: httpClient_1.Commands._getPluginLicense,
                    parameters: param
                };
                return [2 /*return*/, this.send(config, httpClient_1.Protocols.Execute, data)];
            });
        });
    };
    /**
     * プラグインモードの起動プラグインを取得する。
     * @param config Axios Request Config
     */
    ThetaHttpClient.prototype.cameraGetPluginOrders = function (config) {
        if (config === void 0) { config = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                data = {
                    name: httpClient_1.Commands._getPluginOrders,
                    parameters: {}
                };
                return [2 /*return*/, this.send(config, httpClient_1.Protocols.Execute, data)];
            });
        });
    };
    /**
     * 起動プラグインの登録。
     * @param pluginOrders 起動プラグインのパッケージ名3件の配列。
     *                      指定しない場合は空文字列を指定すること。途中に空文字列が入った場合は前詰めされる。
     *                      指定0件はエラー。
     * @param config Axios Request Config
     */
    ThetaHttpClient.prototype.cameraSetPluginOrders = function (pluginOrders, config) {
        if (config === void 0) { config = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var param, data;
            return __generator(this, function (_a) {
                param = { pluginOrders: pluginOrders };
                data = {
                    name: httpClient_1.Commands._setPluginOrders,
                    parameters: param
                };
                return [2 /*return*/, this.send(config, httpClient_1.Protocols.Execute, data)];
            });
        });
    };
    /**
     * マイセッティング登録を削除する。
     * @param mode 削除対象
     *              (image: 静止画用マイセッティング登録、video: 動画用マイセッティング登録)
     * @param config Axios Request Config
     */
    ThetaHttpClient.prototype.cameraDeleteMySetting = function (mode, config) {
        if (config === void 0) { config = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var param, data;
            return __generator(this, function (_a) {
                param = { mode: mode };
                data = {
                    name: httpClient_1.Commands._deleteMySetting,
                    parameters: param
                };
                return [2 /*return*/, this.send(config, httpClient_1.Protocols.Execute, data)];
            });
        });
    };
    /**
     * 共通送信処理
     * @param axiosConfig Axios Request Config
     * @param protocol path,method情報
     * @param data api parameter
     */
    ThetaHttpClient.prototype.send = function (axiosConfig, protocol, data) {
        if (axiosConfig === void 0) { axiosConfig = {}; }
        var config = __assign({}, axiosConfig, protocol, { data: data });
        if (this.auth) {
            var _a = this.auth, user = _a.user, pass = _a.pass, realm = _a.realm;
            var method = protocol.method.toUpperCase();
            var uri = protocol.url;
            var algorithm = 'MD5';
            var nonce = 0;
            var qop = 'auth';
            var nc = '00000001';
            var cnonce = blueimp_md5_1.default(Math.random().toString(36));
            var a1 = [user, realm, pass].join(':');
            var a2 = [method, uri].join(':');
            var response = blueimp_md5_1.default(blueimp_md5_1.default(a1) + ":" + nonce + ":" + nc + ":" + cnonce + ":" + qop + ":" + blueimp_md5_1.default(a2));
            config.headers = {
                Authorization: "Digest username=\"" + user + "\", realm=\"" + realm + "\", nonce=\"" + nonce + "\", uri=\"" + uri + "\", algorithm=" + algorithm + ", response=\"" + response + "\", qop=\"" + qop + "\", nc=" + nc + ", cnonce=\"" + cnonce + "\""
            };
        }
        return this.axios(config);
    };
    ThetaHttpClient.hostnames = {
        APModeIP: '192.168.1.1',
        PluginModeIP: '127.0.0.1'
    };
    return ThetaHttpClient;
}(ThetaClientBase_1.default));
exports.default = ThetaHttpClient;
//# sourceMappingURL=ThetaHttpClient.js.map