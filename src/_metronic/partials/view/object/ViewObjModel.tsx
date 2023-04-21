import { TypeData } from "../../../enum/type-data";

export interface ViewObjModel {
    title?: string,
    data: Array<ObjDataModel>
}

export interface ObjDataModel {
    type : TypeData,
    value : string 
}