import React, { useState, useEffect } from 'react';
import Header from '../../pages/header/header';
import '../../css/common/header.css';
import Cookie from 'js-cookie';
import Axios from 'axios';
import { API_LIST } from '../../constants/api';

const HeaderComponent = () => {
    const [userModalOn, setUserModalOn] = useState(false);
    const [nickname, setNickname] = useState('');
    /*
     * @param {*} flag : control value
     * @returns 
    */
    const handleUserModal = (flag) => () => {
        setUserModalOn(flag);
    }
    const cookie = Cookie.get('connect.sid');
    
    useEffect(() => {
        getNickname();
    },[])


    const getNickname = () => {
        let url = API_LIST.NICKNAME;
        Axios.post(url,{
            
        },{ withCredentials: true })
        .then(res => {
            setNickname(res.data[0].NICKNAME)
        })
        .catch(err => {
            console.log('nickname error', err, err.res);
        })
    }

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
        <Header cookie={ cookie } logout={ logout } userModalOn={userModalOn} handleUserModal={handleUserModal}
        nickname={nickname} />
    )
}

export default HeaderComponent;