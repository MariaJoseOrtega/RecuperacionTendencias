import { RoleModel } from "./role.model";

export interface userModel {
    id:number;
    nombre:string;
    cedula:number;
    telefono:string;
    fechaNacimiento:number;
    Residencia:string;
    role:RoleModel;

   }
   export interface CreateUser extends Omit <userModel, 'id' |'role'>{
  
    roleId:number;
  
  }
  export interface UpdateUser extends Partial<userModel>{
    
    roleId:number;
  
  }