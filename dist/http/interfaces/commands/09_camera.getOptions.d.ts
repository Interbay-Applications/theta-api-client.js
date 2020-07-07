import { ICommonReq, ICommonResDone } from './common';
export interface ICameraGetOptionsReq extends ICommonReq {
    name: 'camera.getOptions';
    parameters: ICameraGetOptionsReqParam;
}
export interface ICameraGetOptionsReqParam {
    optionNames: string[];
}
export interface ICameraGetOptionsResDone extends ICommonResDone {
    name: 'camera.getOptions';
    results: ICameraGetOptionsResDoneParam;
}
export interface ICameraGetOptionsResDoneParam {
    options: object;
}
