import React from 'react';
import { Link } from 'react-router-dom';
import '../../css/common/header.css';
import surveyOnLogo from '../../assets/logo/survey_on_logo_1.svg';
import userIcon from '../../assets/icons/userIcon.svg';
import searchIcon from '../../assets/icons/searchIcon.svg';

const Header = (props) => {
    const cookie = props.cookie;
    const logout = props.logout;

    console.log(document.cookie);
    return (
        <nav className='headerNav'>
            <div id="navWrap">
                {/* 로고 */}
                {/* <p id="surveyon_logo">
                    <Link to='/'><img src={surveyOnLogo} alt='써베이온 로고' /></Link>
                </p> */}
                {/* gnb */}
                <ul id="gnbWrap">
                        <li id='surveyon_logo'>
                            <Link to='/'><img src={surveyOnLogo} alt='써베이온 로고' /></Link>
                        </li>
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
                            <span className="iconBox">
                                <img src={userIcon} alt='회원' />
                            </span>
                        </li>
                        <li>
                            <span className="iconBox">
                                <img src={searchIcon} alt='검색'/>
                            </span>
                        </li>
                    </ul>
                {/* {cookie ? 
                    <ul id="gnbWrap">
                        <li id='surveyon_logo'>
                            <Link to='/'><img src={surveyOnLogo} alt='써베이온 로고' /></Link>
                        </li>
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
                    </ul>
                : 
                    <ul id="gnbWrap">
                        <li id='surveyon_logo'>
                            <Link to='/'><img src={surveyOnLogo} alt='써베이온 로고' /></Link>
                        </li>
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
                    </ul>
                } */}
            </div>
        </nav>
    )
}

export default Header;