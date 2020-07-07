"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Protocols = {
    Info: {
        method: 'get',
        url: '/osc/info'
    },
    State: {
        method: 'post',
        url: '/osc/state'
    },
    CheckForUpdates: {
        method: 'post',
        url: '/osc/checkForUpdates'
    },
    Execute: {
        method: 'post',
        url: '/osc/commands/execute'
    },
    Status: {
        method: 'post',
        url: '/osc/commands/status'
    },
    OpenSourceLicenses: {
        method: 'get',
        url: '/legal-information/open-source-licenses'
    },
    Plugin: {
        method: 'get',
        url: '/plugin'
    }
};
var Commands;
(function (Commands) {
    Commands["_finishWlan"] = "camera._finishWlan";
    Commands["takePicture"] = "camera.takePicture";
    Commands["startCapture"] = "camera.startCapture";
    Commands["stopCapture"] = "camera.stopCapture";
    Commands["listFiles"] = "camera.listFiles";
    Commands["delete"] = "camera.delete";
    Commands["getLivePreview"] = "camera.getLivePreview";
    Commands["_getMetadata"] = "camera._getMetadata";
    Commands["getOptions"] = "camera.getOptions";
    Commands["reset"] = "camera.reset";
    Commands["setOptions"] = "camera.setOptions";
    Commands["_getMySetting"] = "camera._getMySetting";
    Commands["_setMySetting"] = "camera._setMySetting";
    Commands["_stopSelfTimer"] = "camera._stopSelfTimer";
    Commands["_convertVideoFormats"] = "camera._convertVideoFormats";
    Commands["_cancelVideoConvert"] = "camera._cancelVideoConvert";
    Commands["_setBluetoothDevice"] = "camera._setBluetoothDevice";
    Commands["_listAccessPoints"] = "camera._listAccessPoints";
    Commands["_setAccessPoint"] = "camera._setAccessPoint";
    Commands["_deleteAccessPoint"] = "camera._deleteAccessPoint";
    Commands["_listPlugins"] = "camera._listPlugins";
    Commands["_setPlugin"] = "camera._setPlugin";
    Commands["_pluginControl"] = "camera._pluginControl";
    Commands["_getPluginLicense"] = "camera._getPluginLicense";
    Commands["_getPluginOrders"] = "camera._getPluginOrders";
    Commands["_setPluginOrders"] = "camera._setPluginOrders";
    Commands["_deleteMySetting"] = "camera._deleteMySetting";
})(Commands = exports.Commands || (exports.Commands = {}));
//# sourceMappingURL=httpClient.js.map