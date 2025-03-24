import { Request } from "express";
export interface UserRole {
    id: number;
    role_name: string;
    decription: string;
    created_at?: Date;
    updated_at?: Date;
}


export interface RoleRequest  extends Request{
    user?:{
        user_id:string
        name:string
        email:string
        role_id:number
        role_name:string
        created_at?:Date
        updated_at?:Date
    }
}