import React from 'react';
import { Text, Image, View, Alert, KeyboardAvoidingView } from 'react-native';
import Input from '../../components/InputTextField';
import { useNavigation, useRoute } from '@react-navigation/core';
import { Ionicons } from '@expo/vector-icons';
import { BorderlessButton as Button, TouchableOpacity } from 'react-native-gesture-handler';
import { isEmailValid, validateField } from '../../utils';
import { Auth } from '../../models/auth';
import { authAction } from './actions';

import moment from 'moment';
import 'moment/locale/pt-br';
import styles from './styles';

export default function HomePage() {

    const navigation = useNavigation();
    const route = useRoute();

    const [login, setLogin] = React.useState('');
    const [password, setPassword] = React.useState('');

    React.useEffect(() => {

        navigation.setOptions({
            headerRight: () => (
                <Button style={styles.titleButton} onPress={goCreateUser}>
                    <Ionicons name="person-circle" size={26} />
                </Button>
            )
        });

    }, []);

    async function loginApp(): Promise<any> {

        if (!isEmailValid(login)) {
            Alert.alert(
                'E-mail invalid',
                'This is a invalid e-mail'
            );
            return;
        }

        if (!validateField(password, 'Please fill the password')) {
            return;
        }

        const auth = { login, password } as Auth;

        authAction(auth)
            .then((result) => {
                if (!result) {
                    Alert.alert(
                        'Error',
                        'Invalid E-mail or Password!\nTry again.'
                    );
                    return;
                }

                navigation.navigate('Products' );
            })
            .catch((error) => {
                Alert.alert(
                    'Error',
                    'Authentication error.\nPlease, contact the administrator.'
                );
            });
    }

    function goCreateUser() {
        navigation.navigate('Add User');
    }

    return (
        <KeyboardAvoidingView behavior="position" style={styles.avoidView}>
        <View style={styles.container}>
            <Image
                style={styles.logo}
                source={require('../../../assets/final.gif')}
            />

            <Input label="E-mail" value={login} onChange={setLogin} secure={false}/>
            <Input label="Senha" value={password} onChange={setPassword} secure={true} />

                <View style={styles.container}>
                    <TouchableOpacity
                        style={styles.appButtonContainer}
                        onPress={loginApp}
                    >
                        <Text style={styles.appButtonText}>Login</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.appButtonContainer}
                        onPress={goCreateUser}
                    >
                        <Text style={styles.appButtonText}>Registrar</Text>
                    </TouchableOpacity>
                </View>
        </View>
        </KeyboardAvoidingView>
    );

}