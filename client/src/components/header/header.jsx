import React from 'react';
import Header from '../../pages/header/header';
import '../../css/common/header.css';
import Cookie from 'js-cookie';
import Axios from 'axios';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

const HeaderComponent = (props) => {
    // const history = useHistory();
    // console.log('history', history);

    const cookie = Cookie.get('connect.sid');

    const logout = () => {
        Axios.get(`http://localhost:8080/logout`, {
            
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