import authService from '../../services/service';
import { Auth } from '../../models/auth';

export async function authAction(auth: Auth) : Promise<any> {

    if (auth.login === undefined || auth.login.trim() === '') {
        alert('User is required!');
        return;
    }

    if (auth.password === undefined || auth.password.trim() === '') {
        alert('Password is required!');
        return;
    }
        
    try {
        const res = await authService.post('/user/login', auth);
        return res.data;
    } catch (error) {
        console.error('Error during authentication: ', error);
        return null;
    }
    
}