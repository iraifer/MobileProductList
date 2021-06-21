import storage from '@react-native-async-storage/async-storage';
import { Product } from '../models/product';

class ProductRepository {

    private readonly document = '@products';
    private readonly repository = storage;

    public async list(): Promise<Product[]> {
        let jsonArray = await this.repository.getItem(this.document);
        if (!jsonArray) jsonArray = '[]';
        return JSON.parse(jsonArray);
    }

    private async store(list: Product[]) {
        await this.repository.setItem(this.document, JSON.stringify(list));
    }

}

export default new ProductRepository();