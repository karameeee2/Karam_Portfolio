import React from 'react';
import '../../../css/progress/progressDetail/progressQnA.css';

const ProgressQnA = (props) => {
    const questionList = props.questionList;

    // console.log('questionList', questionList)
    return (
        <div className='qnaContainer'>
            {questionList.map((item, idx) => {
                return (
                    <div className="qnaWrap" key={item.QIDX}>
                        <p className="qst">{idx + 1}. {item.QUESTION}</p>
                        {item.answerList.map((answer) => {
                            return (
                                <label className="aswBox" key={answer.AIDX}>
                                    <input type="radio" className='asw' />{answer.ANSWER}
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