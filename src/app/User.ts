
export class User{
    user_id:number;
    first_name:string;
    last_name:string;
    email:string;
    password:string;
    role:string;
    contact_number:string;
    constructor(user_id:number,first_name:string,last_name:string,email:string,password:string,role:string,contact_number:string){
        this.user_id=user_id;
        this.first_name=first_name;
        this.last_name=last_name;
        this.email=email;
        this.password=password;
        this.role=role;
        this.contact_number=contact_number;
    }
}