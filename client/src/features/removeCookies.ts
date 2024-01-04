import Cookies from 'js-cookie';

export default function removeCookiesUser() {
    Cookies.remove('access_token');
    Cookies.remove('access_token_username');
    Cookies.remove('access_token_gmail');
    Cookies.remove('access_token_role');
}
