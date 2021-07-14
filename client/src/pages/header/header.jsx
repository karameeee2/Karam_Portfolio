import React, { useEffect, useRef, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../../css/common/header.css';
import surveyOnLogo from '../../assets/logo/survey_on_logo_1.svg';

const Header = (props) => {
    const cookie = props.cookie;
    const logout = props.logout;
    const userModalOn = props.userModalOn;
    const handleUserModal = props.handleUserModal;

    const showSearch = () => {
        let search = document.getElementById('search');
        let typeSearch = document.getElementById('typeSearch');

        search.style.display = 'block';
        typeSearch.focus();
    }

    return (
        <>
            <nav className='headerNav'>
                <div id="navWrap">
                    <ul id="gnbWrap">
                        <li id='surveyon_logo'>
                            <NavLink exact to='/' className='item'><img src={surveyOnLogo} alt='써베이온 로고' /></NavLink>
                        </li>
                        <li>
                            <NavLink to='/progressList' className='item' activeClassName='nowPage'>진행중인 설문</NavLink>
                        </li>
                        <li>
                            <NavLink to='/endList' className='item' activeClassName='nowPage'>종료된 설문</NavLink>
                        </li>
                        <li>
                            <NavLink to='/noticeList' className='item' activeClassName='nowPage'>공지사항</NavLink>
                        </li>
                        <li>
                            <span className="iconBox userIcon" onClick={handleUserModal(true)}>
                                <p id="userIcon" className='navIcon'></p>
                                {userModalOn &&
                                    <p className="polygon"></p>
                                }
                            </span>
                        </li>
                        <li>
                            <span className="iconBox" onClick={showSearch}>
                                <p id="searchIcon" className='navIcon'></p>
                            </span>
                        </li>
                    </ul>
                </div>
                {userModalOn && (
                    <div className="dimmer" onClick={handleUserModal(false)}>
                        <aside className="userView" onClick={(e) => e.stopPropagation()}>
                            <div className="userViewWrap">
                                {cookie ?
                                    <div className="userViewBox">
                                        <div className="helloBox">
                                            <p className="hello">안녕하세요!</p>
                                            <p className="nickName">회원님</p>
                                        </div>
                                        {/* <p className="myPageLine line22">
                                            <Link to='/mypage'>마이페이지</Link>
                                        </p> */}
                                        <p className="logoutLine line22">
                                            <a href='#!' onClick = { e => {
                                                e.stopPropagation();
                                                e.preventDefault();
                                                handleUserModal(false);
                                                logout();
                                            }}>로그아웃</a>
                                        </p>
                                    </div>
                                :
                                    <div className="userViewBox">
                                        <p className="loginLine line22">
                                            <Link to='/login' onClick={handleUserModal(false)}>로그인</Link>
                                        </p>
                                    </div>
                                }
                            </div>
                        </aside>
                    </div>
                )}
            </nav>
        </>
    )
}

export default Header;