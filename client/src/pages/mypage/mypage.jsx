import React from 'react';
import { Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import ModifyUserInfoComponent from '../../components/mypage/modify/modifyUerInfo';
import MypageCategoryComponent from '../../components/mypage/mypageCategory';
import MysurveyListComponent from '../../components/mypage/mysurvey/mysurveyList';
import TakesurveyListComponent from '../../components/mypage/takesurvey/takesurveyList';
import WithdrawComponent from '../../components/mypage/withdraw/withdraw';
import '../../css/mypage/mypage.css';
import PageTitle from '../pageTitle/pageTitle';

const Mypage = () => {    
    return (
        <div>
            <PageTitle pageTitle='마이페이지' />
            <section className="mypageSection">
                <div className="mypageContainer">
                    <MypageCategoryComponent />
                    <Switch>
                        <Route exact path={'/mypage'} component={ ModifyUserInfoComponent } />
                        <Route exact path={'/mypage/mysurvey'} component={ MysurveyListComponent } />
                        <Route exact path={'/mypage/takesurvey'} component={ TakesurveyListComponent } />
                        <Route exact path={'/mypage/withdraw'} component={ WithdrawComponent } />
                    </Switch>
                </div>
                
            </section>
        </div>
    );
}
export default Mypage;