import productService from '../../services/service';
import { Product } from "../../models/product";

export async function fetchProducts() {
    const { data } = await productService.get('/product/list');
    
    const products: Product[] = data;

    return products;
}

