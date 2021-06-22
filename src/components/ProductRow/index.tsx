import React from 'react';
import { Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { BorderlessButton, Swipeable } from 'react-native-gesture-handler';
import moment from 'moment-timezone';

import { formatGmt } from '../../utils';
import { Product } from '../../models/product';

import styles from './styles';

interface Props {
    product: Product;
}

export default function ProductRow(props: Props) {
    const { product } = props;


    return (
        <Swipeable >
            <View style={styles.container}  >
                <Text style={styles.text}>{product.id}</Text>
                <Text style={styles.text}>{product.name}</Text>
                <Text style={styles.text}>R$ {product.price.toFixed(2).replace('.', ',')}</Text>
                <Text style={styles.text}>{product.amount}</Text>
            </View>
        </Swipeable>
    );

}