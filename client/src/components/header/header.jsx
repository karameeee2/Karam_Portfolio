import React from 'react';
import Header from '../../pages/header/header';
import '../../css/common/header.css';
import Cookie from 'js-cookie';
import Axios from 'axios';
import { API_LIST } from '../../constants/api';

const HeaderComponent = (props) => {

    const cookie = Cookie.get('connect.sid');

    const logout = () => {
        let url = API_LIST.LOGOUT;
        Axios.get(url, {
            
        })
        .then(res => {
            Cookie.remove('connect.sid');
            window.location.href = '/';
        })
        .catch(err => {
            console.log('logout error', err, err.res);
        })
    }

    return (
        <Header cookie={ cookie } logout={ logout } />
    )
}

export default HeaderComponent;