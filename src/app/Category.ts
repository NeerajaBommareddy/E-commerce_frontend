export class Category {
    category_id:number;
    name:string;
    description:string;
    available:boolean;
    
    constructor(category_id:number,name:string,description:string,available:boolean,){
        this.category_id=category_id;
        this.name=name;
        this.description=description;
        this.available=available;
    }
}