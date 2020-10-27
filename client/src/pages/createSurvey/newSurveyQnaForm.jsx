import React from 'react';
import '../../css/createSurvey/newSurveyQnaForm.css';

const NewSurveyQnaForm = () => {
    return (
        <div className='createSurveyQnaContainer'>
            <div className='newSurveyRow surveyForm'>
                {/* surveyForm = 테두리 스타일링, padding 값 */}
                <div className='questionTypeWrap'>
                    <div className='questionBox'>
                        <input type="text" placeholder='질문' />
                    </div>
                    <div className='typeBox'>
                        <select defaultValue={1}>
                            {/* value 값은 임의로 숫자로해놨어욘 */}
                            <option value={1}>주관식</option>
                            <option value={2}>객관식(1개 선택)</option>
                            <option value={3}>객관식(중복 선택 가능)</option>
                        </select>
                    </div>
                </div>
                <div className='answerDeleteWrap'>
                    {/* 주관식 옵션 */}
                    <div className='answerBox' id='shortAnswer'>
                        <input type="text" placeholder='주관식 텍스트' />
                    </div>
                    <div className='deleteBox'>
                        <button>삭제</button>
                    </div>
                </div>
            </div>
            {/* --------------------------------------------------------------------------------- */}
            <div className='newSurveyRow surveyForm'>
                {/* surveyForm = 테두리 스타일링, padding 값 */}
                <div className='questionTypeWrap'>
                    <div className='questionBox'>
                        <input type="text" placeholder='질문' />
                    </div>
                    <div className='typeBox'>
                        <select defaultValue={2}>
                            {/* value 값은 임의로 숫자로해놨어욘 */}
                            <option value={1}>주관식</option>
                            <option value={2}>객관식(1개 선택)</option>
                            <option value={3}>객관식(중복 선택 가능)</option>
                        </select>
                    </div>
                </div>
                <div className='answerDeleteWrap'>
                    {/* 한개 선택 옵션 */}
                    <div className='answerBox' id='selectOne'>
                        <span className="optionBox">
                            <span className="radio">○</span>
                            <input className='optionsActive' type="text" placeholder='옵션1' />
                            <button className="deleteOption">Ⅹ</button>
                        </span>
                        <span className="optionBox">
                            <span className="radio">○</span>
                            <input className='options' type="text" placeholder='옵션2' />
                            <span className="deleteOption">Ⅹ</span>
                        </span>
                        <span className="optionBox">
                            <span className="radio">○</span>
                            <a href='#!' className='addOption'>옵션 추가</a>
                        </span>
                        <span className="optionBox">
                            <span className="radio">○</span>
                            <a href='#!' className='addTextField'>기타 추가</a>
                        </span>
                    </div>
                    <div className='deleteBox'>
                        <button>삭제</button>
                    </div>
                </div>
            </div>
            {/* --------------------------------------------------------------------------------- */}
            <div className='newSurveyRow surveyForm'>
                {/* surveyForm = 테두리 스타일링, padding 값 */}
                <div className='questionTypeWrap'>
                    <div className='questionBox'>
                        <input type="text" placeholder='질문' />
                    </div>
                    <div className='typeBox'>
                        <select defaultValue={3}>
                            {/* value 값은 임의로 숫자로해놨어욘 */}
                            <option value={1}>주관식</option>
                            <option value={2}>객관식(1개 선택)</option>
                            <option value={3}>객관식(중복 선택 가능)</option>
                        </select>
                    </div>
                </div>
                <div className='answerDeleteWrap'>
                    {/* 여러개 선택 옵션 */}
                    <div className='answerBox' id='selectMulti'>
                        <span className="optionBox">
                            <span className="checkbox">□</span>
                            <input className='optionsActive' type="text" placeholder='옵션1' />
                            <button className="deleteOption">X</button>
                        </span>
                        <span className="optionBox">
                            <span className="checkbox">□</span>
                            <input className='options' type="text" placeholder='옵션2' />
                            <button className="deleteOption">X</button>
                        </span>
                        <span className="optionBox">
                            <span className="checkbox">□</span>
                            <a href='#!' className='addOption'>옵션 추가</a>
                        </span>
                        <span className="optionBox">
                            <span className="checkbox">□</span>
                            <a href='#!' className='addTextField'>기타 추가</a>
                        </span>
                    </div>
                    <div className='deleteBox'>
                        <button>삭제</button>
                    </div>
                </div>
            </div>
            <div className='newSurveyRow'>
                <div className="addBox">
                    <button className='addQnA'>+</button>
                </div>
            </div>
        </div>
    );
}

export default NewSurveyQnaForm;