import React from 'react';
import { Text, View, FlatList } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/core';
import ProductRow from '../../components/ProductRow';
import * as actions from './actions';
import { Product } from '../../models/product';
import styles from './styles';

export default function ProductPage() {

    const navigation = useNavigation();
    const route = useRoute();

    const [ products, setProducts ] = React.useState<Product[]>();

    const [ id, setId ] = React.useState(0);
    const [ name, setName ] = React.useState('');
    const [ price, setPrice ] = React.useState(0);
    const [ amount, setAmount ] = React.useState(0);

    React.useEffect(() => {
        
        actions.fetchProducts().then(list => setProducts(list));

        if (route.params) {
            const { product } = route.params as any;
            setId(product.id);
            setName(product.name);
            setPrice(product.price);
            setAmount(product.amount);

        } else {
            navigation.setOptions({ title: 'Products' });
        }
    }, []);

    return (
        <View style={styles.container}>

            <Text style={styles.title}>Lista de Produtos</Text>
            <View style={styles.containerHeader}  >
                <Text style={styles.text}>ID</Text>
                <Text style={styles.text}>Name</Text>
                <Text style={styles.text}>Price</Text>
                <Text style={styles.text}>Amount</Text>
            </View>
            <FlatList
                data={products}
                style={styles.list}
                keyExtractor={item => item.name}
            
                renderItem={({ item }) => (
                    <ProductRow product={item} />
                )}
            />

        </View>
    );

}