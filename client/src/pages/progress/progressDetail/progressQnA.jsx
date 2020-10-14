import React from 'react';
import '../../../css/progress/progressDetail/progressQnA.css';

const ProgressQnA = (props) => {
    const progressQ = props.progressQ;
    const progressA = props.progressA;
    return (
        <div className='qnaContainer'>
            {progressQ.map((item, idx) => {
                return (
                    <div className="qnaWrap">
                        <p className="qst" key={idx}>{idx+1}. {item.qst}</p>
                        {progressA.map((item, idx) => {
                            return (
                                <label className="aswBox" key={idx}>
                                    <input type="radio" className='asw'/>{item.asw}
                                </label>
                            );
                        })}
                    </div>
                );
            })}
        </div>
    );
}

export default ProgressQnA;