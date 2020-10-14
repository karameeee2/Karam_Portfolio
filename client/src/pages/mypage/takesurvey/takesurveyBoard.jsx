import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import '../../../css/mypage/mypageSurveyBoard.css';

const TakesurveyBoard = (props) => {
    const takesurveyList = props.takesurveyList;
    
    return (
        <div className="takesurveyBoardContainer">
            <table className="takesurveyBoardWrap">
                <tr className="tableRowWrap">
                    <th className='rowLarge'>제목</th>
                    <th className='rowSmall'>등록일</th>
                </tr>
                {takesurveyList.map((item, idx) => {
                    return (
                        <tr className="tablecontentWrap" key={idx}>
                            <Link to='/endDetail'><td className='subject rowLarge'>{item.subject}</td></Link>
                            <td className='regdate rowSmall'>{item.regdate}</td>
                        </tr>
                    );
                })}     
            </table>
        </div>
    );
}

export default TakesurveyBoard;