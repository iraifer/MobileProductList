import React from 'react';
import { Button, View, Alert } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/core';

import * as actions from './actions';
import InputTextField from '../../components/InputTextField';
import styles from './styles';
import { User } from '../../models/user';

export default function UserPage() {

    const navigation = useNavigation();
    const route = useRoute();

    const [ address, setAddress ] = React.useState('');
    const [ age, setAge ] = React.useState('');
    const [ email, setEmail ] = React.useState('');
    const [ name, setName ] = React.useState('');
    const [ userPassword, setuserPassword ] = React.useState('');

    React.useEffect(() => {
        navigation.setOptions({ title: 'New User' });
    }, []);

    async function handleSave() {
        try {
            const user = { address, age, email, name, userPassword } as User;
            actions.save(user)
            .then((result) => {

                if (!result) {
                    Alert.alert(
                        'User Information',
                        'Could not save the data.\n Please,\ncontact the Administrator.'
                    );
                    return;
                }

                Alert.alert(
                    'User Information',
                    'User updated successfully'
                );

                navigation.goBack();
            })
            .catch((error) => {
                Alert.alert(
                    'User Information',
                    'Could not save the data.\n Please,\ncontact the Administrator.'
                );
            });
            
        } catch (error) {
            Alert.alert('Could not save the data, please check thee data!');
        }
    }

    return (
        <View style={styles.container}>
            <InputTextField label="Nome" value={name} onChange={setName} secure={false}/>
            <InputTextField label="Age"  value={age} onChange={setAge} secure={false}/>
            <InputTextField label="Address" value={address} onChange={setAddress} secure={false}/>
            <InputTextField label="Email" value={email} onChange={setEmail} secure={false}/>
            <InputTextField label="User Password" value={userPassword} onChange={setuserPassword} secure={true}/>

            <Button title='Salvar' onPress={handleSave} />
        </View>
    );
}