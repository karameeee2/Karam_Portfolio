import React from 'react';
import { Link } from 'react-router-dom';
import '../../css/common/header.css';
import surveyOnLogo from '../../assets/logo/survey_on_logo_2.svg';

const Header = (props) => {
    const gnb = props.gnb;

    return (
        <nav className='headerNav'>
            <div id="navWrap">
                {/* 로고 */}
                <p id="surveyon_logo">
                    <Link to='/'><img src={surveyOnLogo} /></Link>
                </p>
                {/* gnb */}
                <ul id="gnbWrap">
                    {gnb.map((item, idx) => {
                        return (
                            <li key={idx}>
                                <Link to={`/${item.to}`}>{item.title}</Link>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </nav>
    )
}

export default Header;