export class Order_item {
    order_item_id:number;
    cart_id:number;
    order_status:string;
    shipment_address:string;
    order_date:Date;    
    constructor( order_item_id:number,cart_id:number,order_status:string,shipment_address:string,order_date:Date){
        this.order_item_id=order_item_id
        this.cart_id=cart_id;
        this.order_status=order_status;
        this.shipment_address=shipment_address;
        this.order_date=order_date;
    }
}