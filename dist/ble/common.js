"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ServiceName;
(function (ServiceName) {
    ServiceName["CameraInformation"] = "9A5ED1C5-74CC-4C50-B5B6-66A48E7CCFF1";
    ServiceName["CameraStatusCommand"] = "8AF982B1-F1FF-4D49-83F0-A56DB4C431A7";
    ServiceName["CameraControlCommand"] = "32886D39-BA23-425C-BCAE-9C1DB0066922";
    ServiceName["ShootingStatusCommand"] = "9AD04FDF-E62B-43E4-8593-7631FCD29874";
    ServiceName["ShootingControlCommand"] = "1D0F3602-8DFB-4340-9045-513040DAD991";
    ServiceName["ShootingControlCommandv2"] = "38EF1533-B0CC-4722-B6B6-8B23C27ECE5C";
    ServiceName["GPSControlCommand"] = "84A0DD62-E8AA-4D0F-91DB-819B6724C69E";
    ServiceName["WLANControlCommand"] = "F37F568F-9071-445D-A938-5441F2E82399";
    ServiceName["BluetoothControlCommand"] = "0F291746-0C80-4726-87A7-3C501FD3B4B6";
})(ServiceName = exports.ServiceName || (exports.ServiceName = {}));
var Characteristic_CameraInformation;
(function (Characteristic_CameraInformation) {
    Characteristic_CameraInformation["FirmwareRevisionString"] = "B4EB8905-7411-40A6-A367-2834C2157EA7";
    Characteristic_CameraInformation["ManufacturerNameString"] = "F5666A48-6A74-40AE-A817-3C9B3EFB59A6";
    Characteristic_CameraInformation["ModelNumberString"] = "35FE6272-6AA5-44D9-88E1-F09427F51A71";
    Characteristic_CameraInformation["SerialNumberString"] = "0D2FC4D5-5CB3-4CDE-B519-445E599957D8";
    Characteristic_CameraInformation["WlanMacAddressString"] = "1C5C6C55-8E57-4B32-AD80-B124AE229DEC";
    Characteristic_CameraInformation["BluetoothMACAddressString"] = "97E34DA2-2E1A-405B-B80D-F8F0AA9CC51C";
})(Characteristic_CameraInformation = exports.Characteristic_CameraInformation || (exports.Characteristic_CameraInformation = {}));
var Characteristic_CameraStatusCommand;
(function (Characteristic_CameraStatusCommand) {
    Characteristic_CameraStatusCommand["BatteryLevel"] = "875FC41D-4980-434C-A653-FD4A4D4410C4";
    Characteristic_CameraStatusCommand["BatteryStatus"] = "5429B6A0-66D6-491B-B906-902737D5442F";
    Characteristic_CameraStatusCommand["CameraPower"] = "B58CE84C-0666-4DE9-BEC8-2D27B27B3211";
    Characteristic_CameraStatusCommand["CommandErrorDescription"] = "4B03D05E-02D2-412B-A20B-578AE82B9C01";
    Characteristic_CameraStatusCommand["PluginControl"] = "A88732D5-6786-4312-9364-B9A4514DC123";
})(Characteristic_CameraStatusCommand = exports.Characteristic_CameraStatusCommand || (exports.Characteristic_CameraStatusCommand = {}));
var Characteristic_CameraControlCommand;
(function (Characteristic_CameraControlCommand) {
    Characteristic_CameraControlCommand["DateTimeZone"] = "5D485AC4-FF08-40C9-B920-8FC20196E40C";
    Characteristic_CameraControlCommand["OffDelay"] = "29BE3F95-F2FE-4BE9-8655-75ECA7B89682";
    Characteristic_CameraControlCommand["SleepDelay"] = "9938C673-8D8F-4850-A2E2-A5B043887DDB";
    Characteristic_CameraControlCommand["Volume"] = "7A929CFA-8159-424B-8EBB-2CF0DB39068C";
    Characteristic_CameraControlCommand["PluginList"] = "E83264B2-C52D-454E-95BD-6485DE912430";
    Characteristic_CameraControlCommand["SelectedPlugin"] = "FB971557-1C48-44EE-B3C4-880212C87A84";
    Characteristic_CameraControlCommand["PluginInformation"] = "E7FFAD40-8049-4028-AFC0-FDD8DE8F67DE";
    Characteristic_CameraControlCommand["PluginOrders"] = "8F710EDC-6F9B-45D4-A5F7-E6EDA304E790";
})(Characteristic_CameraControlCommand = exports.Characteristic_CameraControlCommand || (exports.Characteristic_CameraControlCommand = {}));
var Characteristic_ShootingStatusCommand;
(function (Characteristic_ShootingStatusCommand) {
    Characteristic_ShootingStatusCommand["CameraError"] = "C9434C4A-37DE-44D2-ACAF-19CC3E8E34E5";
    Characteristic_ShootingStatusCommand["CapturedPictures"] = "8C5A0BFD-DD33-41BB-BE82-67F88040C231";
    Characteristic_ShootingStatusCommand["RecordableTime"] = "D7E2196A-4B9B-4AD2-BB76-8A714FCC7047";
    Characteristic_ShootingStatusCommand["RecordedTime"] = "626D6CD0-3036-4AC2-902D-B65E95543F79";
    Characteristic_ShootingStatusCommand["RemainingPictures"] = "10A3781B-18B6-47F9-83DC-6785022DBC8E";
    Characteristic_ShootingStatusCommand["RemainingVideoSeconds"] = "275B4B77-EA0F-4B58-BB8E-D33D5B2D8992";
    Characteristic_ShootingStatusCommand["CompositeShootingElapsedTime"] = "3D2AA9B3-F23E-4223-A1EC-D030FEAF2160";
})(Characteristic_ShootingStatusCommand = exports.Characteristic_ShootingStatusCommand || (exports.Characteristic_ShootingStatusCommand = {}));
var Characteristic_ShootingControlCommand;
(function (Characteristic_ShootingControlCommand) {
    Characteristic_ShootingControlCommand["AutoBracket"] = "0387F5A3-26F5-4A67-B3C7-A78BBF17DFF7";
    Characteristic_ShootingControlCommand["CaptureInterval"] = "47F4047F-55D3-4B77-B120-27A89F00C15D";
    Characteristic_ShootingControlCommand["CaptureMode"] = "78009238-AC3D-4370-9B6F-C9CE2F4E3CA8";
    Characteristic_ShootingControlCommand["CaptureNumber"] = "41BBDE51-E112-4652-B3D6-E8233732C3E6";
    Characteristic_ShootingControlCommand["ColorTemperature"] = "6C3F1C61-249A-4D9A-ACE8-5F0E4FC77581";
    Characteristic_ShootingControlCommand["ContinuousShooting"] = "E33B80DC-4661-458F-B873-AC5270F8AB5C";
    Characteristic_ShootingControlCommand["CountdownStatus"] = "F399C66A-1D8E-49BF-9420-94AC17D8C20B";
    Characteristic_ShootingControlCommand["ExposureCompensation"] = "30BCC8EB-725D-4048-A832-E76AE26A57E9";
    Characteristic_ShootingControlCommand["ExposureDelay"] = "D22B7C92-556E-4038-A5EF-A9AD56899B40";
    Characteristic_ShootingControlCommand["ExposureProgram"] = "96302827-37D9-4719-A2E3-9234C4F34292";
    Characteristic_ShootingControlCommand["FileFormat"] = "E8F0EDD1-6C0F-494A-95C3-3244AE0B9A01";
    Characteristic_ShootingControlCommand["Filter"] = "246231F9-176B-48F2-A675-B946D6A46999";
    Characteristic_ShootingControlCommand["Gain"] = "1A0DE4A8-D322-4EA4-8CB8-5C7B8B2133F6";
    Characteristic_ShootingControlCommand["ISO"] = "ABB94D51-189F-455B-951D-ABE9B0333080";
    Characteristic_ShootingControlCommand["LatestEnabledExposureDelayTime"] = "B9B020E1-6F04-4D5B-B6F8-A5C827641A4A";
    Characteristic_ShootingControlCommand["MaxRecordableTime"] = "6EABAB73-7F2B-4061-BE7C-1D71D143CB7D";
    Characteristic_ShootingControlCommand["Microphone"] = "4A4B485B-3BFA-40A0-8DAF-5E1B68BB64DA";
    Characteristic_ShootingControlCommand["MicrophoneChannel"] = "926C1871-E56B-4C24-9D4B-BD89E10C25A2";
    Characteristic_ShootingControlCommand["ShotOptions"] = "25EE1173-0196-4DA0-AD4E-474D7E704E01";
    Characteristic_ShootingControlCommand["ShutterSpeed"] = "D3CE2AED-10FA-4648-833D-CD74C6F35905";
    Characteristic_ShootingControlCommand["TakePicture"] = "FEC1805C-8905-4477-B862-BA5E447528A5";
    Characteristic_ShootingControlCommand["VideoStitching"] = "2DFD2BA2-6B70-482A-A382-2501C9EE8D1B";
    Characteristic_ShootingControlCommand["WhiteBalance"] = "2361F4FF-2C7E-4FC5-876B-F9B0EFBC06FD";
    Characteristic_ShootingControlCommand["MySetting"] = "41B93C9D-C5C3-46CB-AA4E-484B57EF5EDB";
    Characteristic_ShootingControlCommand["MySettingCaptureMode"] = "FD89EFE2-E693-4369-BDFB-D2B1EE6C6D3C";
    Characteristic_ShootingControlCommand["BitrateMode"] = "C94DD895-6FFA-42AC-8454-1315ED21FAAD";
})(Characteristic_ShootingControlCommand = exports.Characteristic_ShootingControlCommand || (exports.Characteristic_ShootingControlCommand = {}));
var Characteristic_ShootingControlCommandv2;
(function (Characteristic_ShootingControlCommandv2) {
    Characteristic_ShootingControlCommandv2["Aperture"] = "8C2D174F-6D49-4733-86D2-614CFBE84383";
    Characteristic_ShootingControlCommandv2["CompositeShootingOutputInterval"] = "684975E6-BF17-48AF-99A4-3E0EE7C6E6C8";
    Characteristic_ShootingControlCommandv2["CompositeShootingTime"] = "667920CC-FA27-4FD3-B1B5-9211F6843230";
    Characteristic_ShootingControlCommandv2["DeleteMySetting"] = "4A3ED66B-79C4-4C32-8539-1B5E153CA814";
    Characteristic_ShootingControlCommandv2["Function"] = "321FFCDE-C0E6-4BE9-AEC8-EFEFDB7922B2";
    Characteristic_ShootingControlCommandv2["IsoAutoHighLimit"] = "13FCA2C0-DA25-47B8-A926-9B6B0D5B64FE";
    Characteristic_ShootingControlCommandv2["ShootingMethod"] = "8FBDFAD4-CE9B-4A10-9F2D-DEE7929ED14E";
    Characteristic_ShootingControlCommandv2["TopBottomCorrection"] = "FD2F10FC-22A2-42C9-B5EF-325228D02D69";
})(Characteristic_ShootingControlCommandv2 = exports.Characteristic_ShootingControlCommandv2 || (exports.Characteristic_ShootingControlCommandv2 = {}));
var Characteristic_GPSControlCommand;
(function (Characteristic_GPSControlCommand) {
    Characteristic_GPSControlCommand["GPSInformation"] = "97B06384-E704-4907-A5D1-22349D12EE6B";
})(Characteristic_GPSControlCommand = exports.Characteristic_GPSControlCommand || (exports.Characteristic_GPSControlCommand = {}));
var Characteristic_WLANControlCommand;
(function (Characteristic_WLANControlCommand) {
    Characteristic_WLANControlCommand["NetworkType"] = "9111CDD0-9F01-45C4-A2D4-E09E8FB0424D";
    Characteristic_WLANControlCommand["WlanFrequency"] = "C4B7DFC0-80FD-4223-B132-B7D25A59CF85";
    Characteristic_WLANControlCommand["AccessPointList"] = "84127A8A-E56A-40C1-9458-33E70057512E";
    Characteristic_WLANControlCommand["SelectedAccessPoint"] = "AAFBAC03-6A97-4980-A391-EE536E7102EB";
    Characteristic_WLANControlCommand["AccessPointInformation"] = "474478B8-3A86-4DAB-AF4E-F0E2C69AFA33";
})(Characteristic_WLANControlCommand = exports.Characteristic_WLANControlCommand || (exports.Characteristic_WLANControlCommand = {}));
var Characteristic_BluetoothControlCommand;
(function (Characteristic_BluetoothControlCommand) {
    Characteristic_BluetoothControlCommand["AuthBluetoothDevice"] = "EBAFB2F0-0E0F-40A2-A84F-E2F098DC13C3";
    Characteristic_BluetoothControlCommand["BluetoothPowerStatus"] = "1FBCBBFE-063D-411C-A1BD-67D758E804ED";
})(Characteristic_BluetoothControlCommand = exports.Characteristic_BluetoothControlCommand || (exports.Characteristic_BluetoothControlCommand = {}));
//# sourceMappingURL=common.js.map