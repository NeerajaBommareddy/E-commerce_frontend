export class Cart {
    cart_id:number;
    product_id:number;
    user_id:number;
    quantity:number;
    cost:number;
    
    constructor( cart_id:number,product_id:number,user_id:number,quantity:number,cost:number){
        this.cart_id=cart_id;
        this.product_id=product_id;
        this.user_id=user_id
        this.quantity=quantity;
        this.cost=cost;
        
    }
}