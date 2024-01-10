import account from '@/assets/interfaces/account';
import {
    access_token_gmail,
    access_token_role,
    access_token_username,
} from './../constants/cookies';
import { access_token } from '@/constants/cookies';
import Cookies from 'js-cookie';

export function setCookiesUser(acc: account) {
    const expirationDate = new Date();
    expirationDate.setHours(expirationDate.getHours() + 7);
    const optionCookie = {
        expires: expirationDate,
        path: '/',
    };
    Cookies.set(access_token, acc.tenTaiKhoan, optionCookie);
    Cookies.set(access_token_username, acc.tenTaiKhoan, optionCookie);
    Cookies.set(access_token_gmail, acc.gmail, optionCookie);
    Cookies.set(access_token_role, acc.loaiQuyen + '', optionCookie);
}

export function removeCookiesUser() {
    Cookies.remove('access_token');
    Cookies.remove('access_token_username');
    Cookies.remove('access_token_gmail');
    Cookies.remove('access_token_role');
}
