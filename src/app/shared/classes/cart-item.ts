import { Products } from './product';

// cart items
export interface CartItem {
    product: Products;
    quantity: number;
}