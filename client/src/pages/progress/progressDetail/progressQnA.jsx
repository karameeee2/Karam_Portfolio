import React, { useState } from 'react';
import ProgressDetailBtnComponent from '../../../components/progress/progressDetail/progressDetailBtn';
import '../../../css/progress/progressDetail/progressQnA.css';

const ProgressQnA = (props) => {
    const questionList = props.questionList;
    const {sidx, isJoin, mySurveyAnswer} = props;

    console.log(sidx, mySurveyAnswer);
    const [checkedList, setCheckedList] = useState({});
    const _setCheckedList = (key, value) => {
        setCheckedList({...checkedList, [key] : value})
    }

    return (
        <>
            <div className='qnaContainer'>
                {questionList.map((item, idx) => {
                    return (
                        <div className="qnaWrap" key={item.QIDX}>
                            <p className="qst">{idx + 1}. {item.QUESTION}</p>
                            {item.answerList.map((answer) => {
                                console.log(answer,);
                                // mySurveyAnswer[idx].AIDX === answer.AIDX
                                return (
                                    <label className="aswBox" key={answer.AIDX} >
                                        <input type="radio" name={item.QIDX} className='asw' checked={mySurveyAnswer[idx] && mySurveyAnswer[idx].AIDX === answer.AIDX}
                                        // disabled={mySurveyAnswer[idx] !== undefined}
                                        disabled={isJoin}
                                        onClick={() => _setCheckedList(idx, {aidx: answer.AIDX, qidx: item.QIDX })} />{answer.ANSWER}
                                    </label>
                                );
                            })}
                        </div>
                    );
                })}
            </div>
            <ProgressDetailBtnComponent sidx={sidx} isJoin={isJoin} checkedList={checkedList} />
        </>
    );
}

export default ProgressQnA;