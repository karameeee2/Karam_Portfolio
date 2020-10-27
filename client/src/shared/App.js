import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import HeaderComponent from '../components/header/header';
import FooterComponent from '../components/footer/footer';
import TopBtnComponent from '../components/topBtn/topBtn';
import { Switch } from 'react-router-dom/cjs/react-router-dom.min';
import LandingComponent from '../components/landing/landing';
import ProgressListComponent from '../components/progress/progressList/progressList';
import ProgressDetailComponent from '../components/progress/progressDetail/progressDetail';
import CreateNewSurveyFormComponent from '../components/createSurvey/createNewSurvey';
import EndListComponent from '../components/end/endList/endList';
import EndDetailComponent from '../components/end/endDetail/endDetail';
import NoticeListComponent from '../components/notice/noticeList/noticeList';
import NoticeDetailComponent from '../components/notice/noticeDetail/noticeDetail';
import LoginFormComponent from '../components/login/loginForm';
import RegisterFormComponent from '../components/register/registerForm';
import RegisterCompleteComponent from '../components/register/registerComplete';
import SearchResultComponent from '../components/search/searchResult';
import MypageComponent from '../components/mypage/mypage';
import Axios from 'axios';


class App extends Component {
    // componentDidMount(){} 를 요청이 필요한 곳에 작성해서 데이터 요청 해야함
    componentDidMount(){
        const requestUrl = 'http://localhost:8080/'
        
        Axios.get(requestUrl).then(res => {
            console.log('res', res)
        }).catch(err => {
            console.log('err', err.response)
        })
    }
    render() {
        return (
            <div>
            {/* <div style={{position: 'relative', height: '100%'}}> */}
                <HeaderComponent />
                <Switch>
                    <Route exact path="/" component={ LandingComponent } />
                    {/* 진행중인 설문 */}
                    <Route exact path="/progressList" component={ ProgressListComponent } />
                    <Route exact path="/progressDetail" component={ ProgressDetailComponent } />
                    <Route exact path="/createSurvey" component={ CreateNewSurveyFormComponent } />
                    {/* 종료된 설문 */}
                    <Route exact path="/endList" component={ EndListComponent } />
                    <Route exact path="/endDetail" component={ EndDetailComponent } />
                    {/* 공지사항 */}
                    <Route exact path="/noticeList" component={ NoticeListComponent } />
                    <Route exact path='/noticeDetail' component={ NoticeDetailComponent } />
                    {/* 회원가입 */}
                    <Route exact path='/register' component={ RegisterFormComponent } />
                    <Route exact path='/registerComplete' component={ RegisterCompleteComponent } />
                    {/* 로그인 */}
                    <Route exact path='/login' component={ LoginFormComponent } />
                    {/* 검색결과 */}
                    <Route exact path='/searchResult' component={ SearchResultComponent } />
                    {/* 마이페이지 */}
                    <Route path='/mypage' component={ MypageComponent } />
                </Switch>
                <FooterComponent />
                <TopBtnComponent />
            </div>
        );
    }
}

export default App;