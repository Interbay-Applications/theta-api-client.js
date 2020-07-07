import { AxiosRequestConfig, AxiosResponse } from 'axios';
import { ICameraListFilesReqParam } from '../http/interfaces/commands/05_cameraListFiles';
import { ICameraSetOptionsReqParam } from '../http/interfaces/commands/11_cameraSetOptions';
import { ICameraConvertVideoFormatsReqParam } from '../http/interfaces/commands/15_cameraConvertVideoFormats';
import { ICameraSetAccessPointReqParam } from '../http/interfaces/commands/19_cameraSetAccessPoint';
import { ICameraPluginControlReqParam } from '../http/interfaces/commands/23_cameraPluginControl';
import ThetaClientBase from './ThetaClientBase';
interface IAuthConfig {
    user: string;
    pass: string;
    realm: string;
}
export default class ThetaHttpClient extends ThetaClientBase {
    static readonly hostnames: {
        APModeIP: string;
        PluginModeIP: string;
    };
    private readonly axios;
    private readonly auth;
    constructor(config?: {
        hostname?: string;
        axiosConfig?: AxiosRequestConfig;
        auth?: IAuthConfig;
    });
    /**
     * API GET /osc/info
     * [概要]
     * カメラに関する基本情報や、サポートしている機能を取得する。
     * @param config Axios Request Config
     * @return Axios Response
     */
    oscInfo(config?: AxiosRequestConfig): Promise<AxiosResponse>;
    /**
     * API POST /osc/state
     * [概要]
     * カメラの状態を取得する。
     * stateオブジェクトの内容が変化したことはCheckForUpdatesで確認できる。
     * @param config Axios Request Config
     * @return Axios Response
     */
    oscState(config?: AxiosRequestConfig): Promise<AxiosResponse>;
    /**
     * POST /osc/checkForUpdates
     * [概要]
     * 現在の状態IDを取得し、Stateの状態変化を確認する。
     * @param stateFingerprint 状態ID
     * @param config config Axios Request Config
     * @return Axios Response
     */
    oscCheckForUpdates(stateFingerprint: string, config?: AxiosRequestConfig): Promise<AxiosResponse>;
    /**
     * POST /osc/commands/execute
     * [概要]
     * commandsカテゴリ内のコマンドを実行する。
     * @param name 実行するコマンド
     * @param parameters 各コマンド実行に必要な入力パラメータ
     * @param config
     */
    oscCommandsExecute(name: string, parameters?: object, config?: AxiosRequestConfig): Promise<AxiosResponse>;
    /**
     * POST /osc/commands/status
     * [概要]
     * コマンドの実行状況を取得する。
     * @param id Commands/Executeで取得したコマンドID
     * @param config Axios Request Config
     * @return Axios Response
     */
    oscCommandsStatus(id: string, config?: AxiosRequestConfig): Promise<AxiosResponse>;
    /**
     * GET /legal-information/open-source-licenses
     * [概要]
     * カメラに関するオープンソースライセンス情報を取得する。
     * @param config Axios Request Config
     * @return Axios Response
     */
    OpenSourceLicenses(config?: AxiosRequestConfig): Promise<AxiosResponse>;
    /**
     * GET /plugin
     * [概要]
     * プラグイン提供のWebページを開く。
     * RICOH THETA Z1以降ではプラグインの起動状態_pluginRunningが停止中の場合はクエリ「id=<PluginOrder番号>」
     * (<PluginOrder番号> = 1, 2, 3)で表示対象のプラグインを指定すること。
     * @param config Axios Request Config
     * @return Axios Response
     */
    plugin(config?: AxiosRequestConfig): Promise<AxiosResponse>;
    /**
     * 無線LANをOFFにする。
     * @param config Axios Request Config
     */
    cameraFinishWlan(config?: AxiosRequestConfig): Promise<AxiosResponse>;
    /**
     * 静止画撮影を開始する。
     * exposureDelayが有効の場合、セルフタイマーで撮影が開始される。
     * @param config Axios Request Config
     */
    cameraTakePicture(config?: AxiosRequestConfig): Promise<AxiosResponse>;
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
    cameraStartCapture(_mode: 'interval' | 'composite' | 'bracket' | 'thimeShift', config?: AxiosRequestConfig): Promise<AxiosResponse>;
    /**
     * 連続撮影を停止する。
     * @param config Axios Request Config
     */
    cameraStopCapture(config?: AxiosRequestConfig): Promise<AxiosResponse>;
    /**
     * 静止画および動画ファイルリストを取得する。
     * @param param Parameters
     * @param config Axios Request Config
     */
    cameraListFiles(param: ICameraListFilesReqParam, config?: AxiosRequestConfig): Promise<AxiosResponse>;
    /**
     * 静止画または動画ファイルを削除する。
     * 指定したファイルURLに存在しないか削除できないファイルが含まれている場合、それ以外のファイルの削除も実行されずエラーとなる。
     * @param fileUrls 削除するファイルのURLリスト
     *                  ファイルURLを最大128個指定できる
     *                  一括削除する場合は、"all"で全てのファイル、"image"で全ての静止画、"video"で全ての動画を削除可能（単独で指定すること）
     * @param config Axios Request Config
     */
    cameraDelete(fileUrls: string[], config?: AxiosRequestConfig): Promise<AxiosResponse>;
    /**
     * ライブビューを取得する。
     * RICOH THETA SおよびRICOH THETA SCは静止画撮影モード時のみ実行可能。
     * RICOH THETA V以降は静止画撮影モード時と動画撮影モード時に実行可能。
     * 本体操作、撮影の開始、撮影モード切替のいずれかでデータの取得が終了する。
     * @param config Axios Request Config
     */
    cameraGetLivePreview(config?: AxiosRequestConfig): Promise<AxiosResponse>;
    /**
     * 指定した静止画のメタ情報参照。
     * @param fileUrl JPEGファイルID
     * @param config Axios Request Config
     */
    cameraGetMetadata(fileUrl: string, config?: AxiosRequestConfig): Promise<AxiosResponse>;
    /**
     * 撮影や本体などのプロパティ、各プロパティサポート仕様を取得する。
     * 取得可能なプロパティはAPI v2.1リファレンスのoptionsカテゴリを参照すること。
     * 各プロパティにおけるサポート仕様は、プロパティ名+"Support"の名称で取得できる。
     * ex. 「iso」のサポート仕様プロパティ名:「isoSupport」
     * 詳細なリクエスト例は[Getting Started](https://developers.theta360.com/ja/docs/v2.1/api_reference/getting_started.html#get_and_set_options)を参照。
     * @param optionNames JSON形式取得したいオプション名リスト
     * @param config Axios Request Config
     */
    cameraGetOptions(optionNames: string[], config?: AxiosRequestConfig): Promise<AxiosResponse>;
    /**
     * 撮影や本体の全ての設定をリセットする。
     * リセット後、システム再起動する。
     * @param config Axios Request Config
     */
    cameraReset(config?: AxiosRequestConfig): Promise<AxiosResponse>;
    /**
     * 撮影や本体などのプロパティの設定。
     * 設定出来るプロパティ、仕様はAPI v2.1リファレンスのoptionsカテゴリやサポート仕様の取得((camera.getOptions)[https://developers.theta360.com/ja/docs/v2.1/api_reference/commands/camera.get_options.html])で確認すること。
     * 詳細なリクエスト例は(Getting Started)[https://developers.theta360.com/ja/docs/v2.1/api_reference/getting_started.html#get_and_set_options]を参照。
     * @param param
     * @param config Axios Request Config
     */
    cameraSetOptions(param: ICameraSetOptionsReqParam, config?: AxiosRequestConfig): Promise<AxiosResponse>;
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
    cameraGetMySetting(mode: string, optionNames: string[], config?: AxiosRequestConfig): Promise<AxiosResponse>;
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
    cameraSetMySetting(mode: 'image' | 'video', options: object, config?: AxiosRequestConfig): Promise<AxiosResponse>;
    /**
     * 作動中のセルフタイマーの撮影を停止する。
     * セルフタイマー((exposureDelay)[https://developers.theta360.com/ja/docs/v2.1/api_reference/options/exposure_delay.html])が有効の場合、
     * (camera.takePicture)[https://developers.theta360.com/ja/docs/v2.1/api_reference/commands/camera.take_picture.html]、
     * (camera.startCapture)[https://developers.theta360.com/ja/docs/v2.1/api_reference/commands/camera.start_capture.html]で撮影開始される。
     * @param config Axios Request Config
     */
    cameraStopSelfTimer(config?: AxiosRequestConfig): Promise<AxiosResponse>;
    /**
     * 保存済み動画のフォーマットを変換する。
     * @param param
     * @param config Axios Request Config
     */
    cameraConvertVideoFormats(param: ICameraConvertVideoFormatsReqParam, config?: AxiosRequestConfig): Promise<AxiosResponse>;
    /**
     * 保存済み動画のフォーマット変換を中止する。
     * @param config Axios Request Config
     */
    cameraCancelVideoConvert(config?: AxiosRequestConfig): Promise<AxiosResponse>;
    /**
     * カメラに接続するBLEデバイス（スマートフォンアプリ側）の識別情報（UUID）をカメラ側に登録する。
     * カメラの無線LANがダイレクトモードの場合に設定できる。
     * @param uuid フォーマット： xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
     *                            アルファベットの大文字、小文字は区別しない。
     * @param config Axios Request Config
     */
    cameraSetBluetoothDevice(uuid: string, config?: AxiosRequestConfig): Promise<AxiosResponse>;
    /**
     * クライアントモードで使用するアクセスポイントのリストを取得する。
     * @param config Axios Request Config
     */
    cameraListAccessPoints(config?: AxiosRequestConfig): Promise<AxiosResponse>;
    /**
     * クライアントモードで使用するアクセスポイント情報を設定する。
     * @param param
     * @param config  Axios Request Config
     */
    cameraSetAccessPoint(param: ICameraSetAccessPointReqParam, config?: AxiosRequestConfig): Promise<AxiosResponse>;
    /**
     * クライアントモードで使用するアクセスポイント情報を削除する。
     * @param ssid SSID
     * @param config Axios Request Config
     */
    cameraDeleteAccessPoint(ssid: string, config?: AxiosRequestConfig): Promise<AxiosResponse>;
    /**
     * インストール済みのプラグインのリストを取得する。
     * @param config Axios Request Config
     */
    cameraListPlugins(config?: AxiosRequestConfig): Promise<AxiosResponse>;
    /**
     * インストール済みのプラグインを起動対象に設定する。
     * RICOH THETA Z1以降では本コマンドは無視される。camera._pluginControlを使用すること。
     * @param packageName 起動対象にするプラグインのパッケージ名
     * @param boot 起動選択
     *         trueを指定すること
     * @param config Axios Request Config
     */
    cameraSetPlugin(packageName: string, boot: boolean, config?: AxiosRequestConfig): Promise<AxiosResponse>;
    /**
     * プラグインの起動・停止。
     * @param param
     * @param config Axios Request Config
     */
    cameraPluginControl(param: ICameraPluginControlReqParam, config?: AxiosRequestConfig): Promise<AxiosResponse>;
    /**
     * インストール済みのプラグインのライセンスを取得する。
     * @param packageName 取得対象のプラグインのパッケージ名
     * @param config Axios Request Config
     */
    cameraGetPluginLicense(packageName: string, config?: AxiosRequestConfig): Promise<AxiosResponse>;
    /**
     * プラグインモードの起動プラグインを取得する。
     * @param config Axios Request Config
     */
    cameraGetPluginOrders(config?: AxiosRequestConfig): Promise<AxiosResponse>;
    /**
     * 起動プラグインの登録。
     * @param pluginOrders 起動プラグインのパッケージ名3件の配列。
     *                      指定しない場合は空文字列を指定すること。途中に空文字列が入った場合は前詰めされる。
     *                      指定0件はエラー。
     * @param config Axios Request Config
     */
    cameraSetPluginOrders(pluginOrders: string[], config?: AxiosRequestConfig): Promise<AxiosResponse>;
    /**
     * マイセッティング登録を削除する。
     * @param mode 削除対象
     *              (image: 静止画用マイセッティング登録、video: 動画用マイセッティング登録)
     * @param config Axios Request Config
     */
    cameraDeleteMySetting(mode: 'image' | 'video', config?: AxiosRequestConfig): Promise<AxiosResponse>;
    /**
     * 共通送信処理
     * @param axiosConfig Axios Request Config
     * @param protocol path,method情報
     * @param data api parameter
     */
    private send;
}
export {};
