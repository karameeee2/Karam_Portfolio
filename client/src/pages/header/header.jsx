import React from 'react';
import { Link } from 'react-router-dom';
import '../../css/common/header.css';
import surveyOnLogo from '../../assets/logo/survey_on_logo_1.svg';

const Header = (props) => {
    const gnb = props.gnb;
    const gnb2 = props.gnb2;
    const cookie = props.cookie;

    return (
        <nav className='headerNav'>
            <div id="navWrap">
                {/* 로고 */}
                <p id="surveyon_logo">
                    <Link to='/'><img src={surveyOnLogo} alt='써베이온 로고' /></Link>
                </p>
                {/* gnb */}
                {cookie != null &&
                    <ul id="gnbWrap">
                        {gnb2.map((item, idx) => {
                            return (
                                <li key={idx}>
                                    <Link to={`/${item.to}`}>{item.title}</Link>
                                </li>
                            )
                        })}
                    </ul>
                }
                {cookie == null &&
                    <ul id="gnbWrap">
                        {gnb.map((item, idx) => {
                            return (
                                <li key={idx}>
                                    <Link to={`/${item.to}`}>{item.title}</Link>
                                </li>
                            )
                        })}
                    </ul>
                }

            </div>
        </nav>
    )
}

export default Header;