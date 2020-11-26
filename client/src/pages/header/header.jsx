import React from 'react';
import { Link } from 'react-router-dom';
import '../../css/common/header.css';
import surveyOnLogo from '../../assets/logo/survey_on_logo_1.svg';

const Header = (props) => {
    const cookies = props.cookies;
    const logout = props.logout;

    return (
        <nav className='headerNav'>
            <div id="navWrap">
                {/* 로고 */}
                <p id="surveyon_logo">
                    <Link to='/'><img src={surveyOnLogo} alt='써베이온 로고' /></Link>
                </p>
                {/* gnb */}
                {document.cookie != null &&
                    <ul id="gnbWrap">
                        <li>
                            <Link to='/progressList'>진행중인 설문</Link>
                        </li>
                        <li>
                            <Link to='/endList'>종료된 설문</Link>
                        </li>
                        <li>
                            <Link to='/noticeList'>공지사항</Link>
                        </li>
                        <li>
                            <Link to='/mypage'>마이페이지</Link>
                        </li>
                        <li>
                            <a onClick = { e => {
                                e.stopPropagation();
                                e.preventDefault();
                                logout();
                            }}>로그아웃</a>
                        </li>
                        {/* {gnb2.map((item, idx) => {
                            return (
                                <li key={idx}>
                                    <Link to={`/${item.to}`}>{item.title}</Link>
                                </li>
                            )
                        })} */}
                    </ul>
                }
                {document.cookie == null &&
                    <ul id="gnbWrap">
                        <li>
                            <Link to='/progressList'>진행중인 설문</Link>
                        </li>
                        <li>
                            <Link to='/endList'>종료된 설문</Link>
                        </li>
                        <li>
                            <Link to='/noticeList'>공지사항</Link>
                        </li>
                        <li>
                            <Link to='/register'>회원가입</Link>
                        </li>
                        <li>
                            <Link to='/login'>로그인</Link>
                        </li>
                        {/* {gnb.map((item, idx) => {
                            return (
                                <li key={idx}>
                                    <Link to={`/${item.to}`}>{item.title}</Link>
                                </li>
                            )
                        })} */}
                    </ul>
                }

            </div>
        </nav>
    )
}

export default Header;