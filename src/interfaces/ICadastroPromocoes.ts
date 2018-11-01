export interface ICadastroPromocoes{
    id?: number;
    promotion_id?:number;
    promotion_name:string;
    promotion_startdate:string;
    promotion_finaldate:string;
    promotion_descriptive:string;
    promotion_promotionimage:string;
    promotion_logocompany:string;
    user_id?: number;
    date?:string;
    created_at?:string;
    updated_at?:string;
}