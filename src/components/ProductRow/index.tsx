import React from 'react';
import { Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { BorderlessButton, Swipeable } from 'react-native-gesture-handler';
import moment from 'moment-timezone';

import { formatGmt } from '../../utils';
import { Product } from '../../models/product';
import { Timezone } from '../../models/timezone';

import styles from './styles';

interface Props {
    product: Product;
}

export default function ProductRow(props: Props) {
    const { product } = props;


    function formatTime(timezone: Timezone) {
        const dateMoment = moment(new Date());
        const time = dateMoment.tz(timezone.zoneName);
        return time.format('HH[h]mm');
    }

    return (
        <Swipeable >
            <View style={styles.container}  >
                <Text style={styles.text}>{product.id}</Text>
                <Text style={styles.text}>{product.name}</Text>
                <Text style={styles.text}>{product.price}</Text>
                <Text style={styles.text}>{product.amount}</Text>
            </View>
        </Swipeable>
    );

}