import userService from "../../services/service";
import { User } from "../../models/user";

export async function save(user: User) : Promise<any> {

    if (user.address === undefined || user.address.trim() === '') {
        alert('Address is required!');
        return;
    }

    if (user.age === undefined || user.age.trim() === '') {
        alert('Age is required!');
        return;
    }

    if (user.email === undefined || user.email.trim() === '') {
        alert('Email is required!');
        return;
    }

    if (user.name === undefined || user.name.trim() === '') {
        alert('Name is required!');
        return;
    }

    if (user.userPassword === undefined || user.userPassword.trim() === '') {
        alert('User Password is required!');
        return;
    }
        
    try {
        const res = await userService.post('/user/customer/add',user);
        return res.data;
    } catch (error) {
        return null;
    }
    
}