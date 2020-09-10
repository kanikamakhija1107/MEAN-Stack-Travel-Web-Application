export class Cart {
    userId: String;
    productname: string;
    quantity: number;
    price: number;
    constructor(userId: String, productname: string, quantity: number, price: number) {
        this.userId = userId;
        this.productname = productname;
        this.quantity = quantity;
        this.price = price;
    }
}
 