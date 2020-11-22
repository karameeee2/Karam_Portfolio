import React from 'react';
import { gnb, gnb2 } from '../../constants/const';
import Header from '../../pages/header/header';
import '../../css/common/header.css';
import cookie from 'react-cookie';

const HeaderComponent = (props) => {
    const cookie = props;
    

    return (
        <Header gnb={gnb} gnb2={gnb2} cookie={cookie} />
    )
}

export default HeaderComponent;