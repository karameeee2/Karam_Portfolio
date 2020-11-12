import React from 'react';
import '../../../css/progress/progressDetail/progressQnA.css';

const ProgressQnA = (props) => {
    const questionList = props.questionList;
    // const answerList = props.answerList;

    console.log('questionList', questionList)
    // console.log('answerList', answerList)
    return (
        <div className='qnaContainer'>
            {questionList.map((item, idx) => {
                return (
                    <div className="qnaWrap">
                        <p className="qst" key={item.AIDX}>{idx + 1}. {item.QUESTION}</p>
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