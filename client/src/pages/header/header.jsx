import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../../css/common/header.css';
import surveyOnLogo from '../../assets/logo/survey_on_logo_1.svg';

const Header = (props) => {
    const cookie = props.cookie;
    const logout = props.logout;

    console.log(props);

    const onClickBlock = () => {
        let polygon = document.getElementsByClassName('polygon')[0];
        let userView = document.getElementsByClassName('userView')[0];
        
        userView.classList.toggle('none');
        polygon.classList.toggle('none');
        userView.classList.toggle('block');
        polygon.classList.toggle('block');
    }

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
                            <span className="iconBox userIcon" onClick={onClickBlock}>
                                <p id="userIcon" className='navIcon'></p>
                                <p className="polygon none"></p>
                            </span>
                        </li>
                        <li>
                            <span className="iconBox" onClick={showSearch}>
                                <p id="searchIcon" className='navIcon'></p>
                            </span>
                        </li>
                    </ul>
                </div>
            </nav>
            <aside className="userView none">
                <div className="userViewWrap">
                    {cookie ?
                        <div className="userViewBox">
                            <div className="helloBox">
                                <p className="hello">안녕하세요!</p>
                                <p className="nickName">{cookie.nickName}님</p>
                            </div>
                            <p className="myPageLine line22">
                                <Link to='/mypage'>마이페이지</Link>
                            </p>
                            <p className="logoutLine line22">
                                <a href='#!' onClick = { e => {
                                    e.stopPropagation();
                                    e.preventDefault();
                                    logout();
                                }}>로그아웃</a>
                            </p>
                        </div>
                    :
                        <div className="userViewBox">
                            <p className="loginLine line22">
                                <Link to='/login'>로그인</Link>
                            </p>
                        </div>
                    }
                </div>
            </aside>
        </>
    )
}

export default Header;