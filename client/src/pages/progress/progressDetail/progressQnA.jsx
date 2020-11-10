import React from 'react';
import '../../../css/progress/progressDetail/progressQnA.css';

const ProgressQnA = (props) => {
    const questionList = props.questionList;
    const answerList = props.answerList;

    console.log('questionList', questionList)
    console.log('answerList', answerList)
    return (
        <div className='qnaContainer'>
            {questionList.map((item, idx) => {
                return (
                    <div className="qnaWrap">
                        <p className="qst" key={item.AIDX}>{idx + 1}. {item.QUESTION}</p>
                        {answerList.map((item) => {
                            return (
                                <label className="aswBox" key={item.AIDX}>
                                    <input type="radio" className='asw' />{item.ANSWER}
                                </label>
                            );
                        })}
                    </div>
                );
            })}
        </div>
    );

    // const qnaList = props.qnaList;
    // console.log('qnalist', qnaList)
    // return (
    //     <div className='qnaContainer'>
    //         {qnaList.map((item, idx) => {
    //             return (
    //                 <div className="qnaWrap">
    //                     <p className="qst" key={item.QIDX}>{idx + 1}. {item.QUESTION}</p>
    //                     {qnaList.map((item) => {
    //                         return (
    //                             <label className="aswBox" key={item.AIDX}>
    //                                 <input type="radio" className='asw' />{item.ANSWER}
    //                             </label>
    //                         );
    //                     })}
    //                 </div>
    //             );
    //         })}
    //     </div>
    // );
}

export default ProgressQnA;