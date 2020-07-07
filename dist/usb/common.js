"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var OperationCode;
(function (OperationCode) {
    OperationCode[OperationCode["GetDeviceInfo"] = 4097] = "GetDeviceInfo";
    OperationCode[OperationCode["OpenSession"] = 4098] = "OpenSession";
    OperationCode[OperationCode["CloseSession"] = 4099] = "CloseSession";
    OperationCode[OperationCode["GetStorageIDs"] = 4100] = "GetStorageIDs";
    OperationCode[OperationCode["GetStorageInfo"] = 4101] = "GetStorageInfo";
    OperationCode[OperationCode["GetNumObjects"] = 4102] = "GetNumObjects";
    OperationCode[OperationCode["GetObjectHandles"] = 4103] = "GetObjectHandles";
    OperationCode[OperationCode["GetObjectInfo"] = 4104] = "GetObjectInfo";
    OperationCode[OperationCode["GetObject"] = 4105] = "GetObject";
    OperationCode[OperationCode["GetThumb"] = 4106] = "GetThumb";
    OperationCode[OperationCode["DeleteObject"] = 4107] = "DeleteObject";
    OperationCode[OperationCode["InitiateCapture"] = 4110] = "InitiateCapture";
    OperationCode[OperationCode["PowerDown"] = 4115] = "PowerDown";
    OperationCode[OperationCode["GetDevicePropDesc"] = 4116] = "GetDevicePropDesc";
    OperationCode[OperationCode["GetDevicePropValue"] = 4117] = "GetDevicePropValue";
    OperationCode[OperationCode["SetDevicePropValue"] = 4118] = "SetDevicePropValue";
    OperationCode[OperationCode["ResetDevicePropValue"] = 4119] = "ResetDevicePropValue";
    OperationCode[OperationCode["TerminateOpenCapture"] = 4120] = "TerminateOpenCapture";
    OperationCode[OperationCode["GetPartialObject"] = 4123] = "GetPartialObject";
    OperationCode[OperationCode["InitiateOpenCapture"] = 4124] = "InitiateOpenCapture";
    OperationCode[OperationCode["StopSelfTimer"] = 39330] = "StopSelfTimer";
    OperationCode[OperationCode["GetAccessPointHandles"] = 39331] = "GetAccessPointHandles";
    OperationCode[OperationCode["GetAccessPointInfo"] = 39332] = "GetAccessPointInfo";
    OperationCode[OperationCode["SetAccessPoint"] = 39333] = "SetAccessPoint";
    OperationCode[OperationCode["DeleteAccessPoint"] = 39334] = "DeleteAccessPoint";
    OperationCode[OperationCode["GetPluginHandles"] = 39336] = "GetPluginHandles";
    OperationCode[OperationCode["GetPluginInfo"] = 39337] = "GetPluginInfo";
    OperationCode[OperationCode["PluginControl"] = 39339] = "PluginControl";
    OperationCode[OperationCode["SetAccessPointPassword"] = 39341] = "SetAccessPointPassword";
    OperationCode[OperationCode["GetPluginLicense"] = 39347] = "GetPluginLicense";
    OperationCode[OperationCode["GetWlanMacAddress"] = 39349] = "GetWlanMacAddress";
    OperationCode[OperationCode["GetBluetoothMacAddress"] = 39350] = "GetBluetoothMacAddress";
    OperationCode[OperationCode["SetPluginOrders"] = 39351] = "SetPluginOrders";
    OperationCode[OperationCode["GetPluginOrders"] = 39352] = "GetPluginOrders";
    OperationCode[OperationCode["GetPluginState"] = 39353] = "GetPluginState";
})(OperationCode = exports.OperationCode || (exports.OperationCode = {}));
var PropertyCode;
(function (PropertyCode) {
    PropertyCode[PropertyCode["BatteryLevel"] = 20481] = "BatteryLevel";
    PropertyCode[PropertyCode["FunctionalMode"] = 20482] = "FunctionalMode";
    PropertyCode[PropertyCode["ImageSize"] = 20483] = "ImageSize";
    PropertyCode[PropertyCode["WhiteBalance"] = 20485] = "WhiteBalance";
    PropertyCode[PropertyCode["FNumber"] = 20487] = "FNumber";
    PropertyCode[PropertyCode["ExposureProgramMode"] = 20494] = "ExposureProgramMode";
    PropertyCode[PropertyCode["ExposureIndex"] = 20495] = "ExposureIndex";
    PropertyCode[PropertyCode["ExposureBiasCompensation"] = 20496] = "ExposureBiasCompensation";
    PropertyCode[PropertyCode["DateTime"] = 20497] = "DateTime";
    PropertyCode[PropertyCode["CaptureDelay"] = 20498] = "CaptureDelay";
    PropertyCode[PropertyCode["StillCaptureMode"] = 20499] = "StillCaptureMode";
    PropertyCode[PropertyCode["TimelapseNumber"] = 20506] = "TimelapseNumber";
    PropertyCode[PropertyCode["TimelapseInterval"] = 20507] = "TimelapseInterval";
    PropertyCode[PropertyCode["AudioVolume"] = 20524] = "AudioVolume";
    PropertyCode[PropertyCode["ErrorInfo"] = 53254] = "ErrorInfo";
    PropertyCode[PropertyCode["ShutterSpeed"] = 53263] = "ShutterSpeed";
    PropertyCode[PropertyCode["PerceivedDeviceType"] = 54279] = "PerceivedDeviceType";
    PropertyCode[PropertyCode["GpsInfo"] = 55297] = "GpsInfo";
    PropertyCode[PropertyCode["AutoPowerOffDelay"] = 55298] = "AutoPowerOffDelay";
    PropertyCode[PropertyCode["SleepDelay"] = 55299] = "SleepDelay";
    PropertyCode[PropertyCode["ChannelNumber"] = 55303] = "ChannelNumber";
    PropertyCode[PropertyCode["CaptureStatus"] = 55304] = "CaptureStatus";
    PropertyCode[PropertyCode["RecordingTime"] = 55305] = "RecordingTime";
    PropertyCode[PropertyCode["RemainingRecordingTime"] = 55306] = "RemainingRecordingTime";
    PropertyCode[PropertyCode["Filter"] = 55307] = "Filter";
    PropertyCode[PropertyCode["BatteryStatus"] = 55308] = "BatteryStatus";
    PropertyCode[PropertyCode["RemainingVideos"] = 55309] = "RemainingVideos";
    PropertyCode[PropertyCode["SleepMode"] = 55310] = "SleepMode";
    PropertyCode[PropertyCode["CompositeShootingTime"] = 55311] = "CompositeShootingTime";
    PropertyCode[PropertyCode["CompositeShootingOutputInterval"] = 55312] = "CompositeShootingOutputInterval";
    PropertyCode[PropertyCode["CompositeShootingElapsedTime"] = 55313] = "CompositeShootingElapsedTime";
    PropertyCode[PropertyCode["BracketParameters"] = 55314] = "BracketParameters";
    PropertyCode[PropertyCode["ColorTemperature"] = 55315] = "ColorTemperature";
    PropertyCode[PropertyCode["BluetoothPowerStatus"] = 55316] = "BluetoothPowerStatus";
    PropertyCode[PropertyCode["Username"] = 55317] = "Username";
    PropertyCode[PropertyCode["Password"] = 55318] = "Password";
    PropertyCode[PropertyCode["VideoStitching"] = 55320] = "VideoStitching";
    PropertyCode[PropertyCode["MicrophoneChannel"] = 55322] = "MicrophoneChannel";
    PropertyCode[PropertyCode["AutoPowerOffDelaySec"] = 55323] = "AutoPowerOffDelaySec";
    PropertyCode[PropertyCode["Microphone"] = 55324] = "Microphone";
    PropertyCode[PropertyCode["NetworkType"] = 55325] = "NetworkType";
    PropertyCode[PropertyCode["Gain"] = 55327] = "Gain";
    PropertyCode[PropertyCode["WlanFrequency"] = 55329] = "WlanFrequency";
    PropertyCode[PropertyCode["CapturedPictures"] = 55330] = "CapturedPictures";
    PropertyCode[PropertyCode["MaxRecordableTime"] = 55331] = "MaxRecordableTime";
    PropertyCode[PropertyCode["Function"] = 55332] = "Function";
    PropertyCode[PropertyCode["TopBottomCorrection"] = 55333] = "TopBottomCorrection";
    PropertyCode[PropertyCode["IsoAutoHighLimit"] = 55334] = "IsoAutoHighLimit";
    PropertyCode[PropertyCode["ImageFormat"] = 55335] = "ImageFormat";
    PropertyCode[PropertyCode["Bitrate"] = 55337] = "Bitrate";
    PropertyCode[PropertyCode["Authentication"] = 55338] = "Authentication";
})(PropertyCode = exports.PropertyCode || (exports.PropertyCode = {}));
var EventCode;
(function (EventCode) {
    EventCode[EventCode["ObjectAdded"] = 16386] = "ObjectAdded";
    EventCode[EventCode["DevicePropChanged"] = 16390] = "DevicePropChanged";
    EventCode[EventCode["DeviceInfoChanged"] = 16392] = "DeviceInfoChanged";
    EventCode[EventCode["StoreFull"] = 16394] = "StoreFull";
    EventCode[EventCode["StorageInfoChanged"] = 16396] = "StorageInfoChanged";
    EventCode[EventCode["CaptureComplete"] = 16397] = "CaptureComplete";
})(EventCode || (EventCode = {}));
//# sourceMappingURL=common.js.map