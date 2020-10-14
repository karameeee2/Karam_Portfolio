import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import '../../../css/mypage/mypageSurveyBoard.css';

const MysurveyBoard = (props) => {
    const mysurveyList = props.mysurveyList;
    
    return (
        <div className="mysurveyBoardContainer">
            <table className="mysurveyBoardWrap">
                <tr className="tableRowWrap">
                    <th className='rowLarge'>제목</th>
                    <th className='rowSmall'>등록일</th>
                </tr>
                {mysurveyList.map((item, idx) => {
                    return (
                        <tr className="tablecontentWrap" key={idx}>
                            <Link to='/progressDetail'><td className='subject rowLarge'>{item.subject}</td></Link>
                            <td className='regdate rowSmall'>{item.regdate}</td>
                        </tr>
                    );
                })}     
            </table>
        </div>
    );
}

export default MysurveyBoard;