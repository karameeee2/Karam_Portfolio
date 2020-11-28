import React from 'react';
import Header from '../../pages/header/header';
import '../../css/common/header.css';
import Cookie from 'js-cookie';
import Axios from 'axios';

const HeaderComponent = (props) => {
    const cookie = Cookie.get('connect.sid');

    console.log(document.cookie);

    const logout = () => {
        Axios.get(`http://localhost:8080/logout`, {
            
        })
        .then(res => {
            console.log('logout success', res);
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