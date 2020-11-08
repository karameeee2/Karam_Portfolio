import React from 'react';
import '../../../css/progress/progressDetail/progressQnA.css';

const ProgressQnA = (props) => {
    const surveyDetail = props.surveyDetail;
    return (
        <div className='qnaContainer'>
            {surveyDetail.map((item, idx) => {
                return (
                    <div className="qnaWrap">
                        <p className="qst" key={idx}>{idx+1}. {item.QUESTION}</p>
                        <label className="aswBox" key={idx}>
                            <input type="radio" className='asw'/>{item.ANSWER}
                        </label>
                        {/* {selectQnA.map((item, idx) => {
                            return (
                                <label className="aswBox" key={idx}>
                                    <input type="radio" className='asw'/>{item.asw}
                                </label>
                            );
                        })} */}
                    </div>
                );
            })}
        </div>
    );
}

export default ProgressQnA;