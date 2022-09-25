export class Foods{     //exclamation mark is for not defining constructor for data type name(id) created
    id!:number;
    price!:number;
    name!:string;
    favorite:boolean=false;
    star:number=0;
    tags?:string[];
    imageUrl!:string;
    cooktime!:string;
    origins!:string[];

}