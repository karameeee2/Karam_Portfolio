import React from 'react';
import Header from '../../pages/header/header';
import '../../css/common/header.css';
import Cookie from 'js-cookie';
import Axios from 'axios';

const HeaderComponent = (props) => {

    const cookie = Cookie.get('connect.sid');

    const logout = () => {
        Axios.get(`http://localhost:8080/api/logout`, {
            
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