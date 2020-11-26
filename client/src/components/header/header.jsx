import React from 'react';
import { gnb, gnb2 } from '../../constants/const';
import Header from '../../pages/header/header';
import '../../css/common/header.css';
import { cookie } from 'react-cookie';
import Axios from 'axios';

const HeaderComponent = (props) => {
    const cookies = props.cookie;
    const logout = () => {
        Axios.get(`http://localhost:8080/logout`, {
        
        })
        .then(res => {
            console.log('logout success', res);
        })
        .catch(err => {
            console.log('logout error', err, err.res);
        })
    }

    return (
        <Header cookies={cookies} onClick={ logout } />
    )
}

export default HeaderComponent;