export interface IUsuario{
    id?: number;
    name?: string;
    email:string;
    password?:string;
    password_confirmation?:string;
    city?:string;
    uf?:string;
    gender?:string;
    datebirth?:string;
    profileimage?:string;
    token?:string;
}