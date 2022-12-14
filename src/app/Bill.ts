export class Bill {
    bill_id:number;
    order_item_id:number;
    amount:number;
    
    constructor( bill_id:number,order_item_id:number,amount:number){
        this.bill_id=bill_id;
        this.order_item_id=order_item_id;
        this.amount=amount;
    }
}