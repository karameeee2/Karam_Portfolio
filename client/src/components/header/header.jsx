import React, { useState } from 'react';
import Header from '../../pages/header/header';
import '../../css/common/header.css';
import Cookie from 'js-cookie';
import Axios from 'axios';
import { API_LIST } from '../../constants/api';

const HeaderComponent = () => {
    const [userModalOn, setUserModalOn] = useState(false);
    /*
     * @param {*} flag : control value
     * @returns 
    */
    const handleUserModal = (flag) => () => {
        setUserModalOn(flag);
    }

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
        <Header cookie={ cookie } logout={ logout } userModalOn={userModalOn} handleUserModal={handleUserModal} />
    )
}

export default HeaderComponent;