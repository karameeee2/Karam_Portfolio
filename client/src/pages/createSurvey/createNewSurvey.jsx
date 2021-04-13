import React, { useState } from 'react';
import Select from 'react-select';
import '../../css/common/pageTitle.css';
import '../../css/createSurvey/newSurveyInfoForm.css';
import '../../css/createSurvey/newSurveyQnaForm.css';
import '../../css/createSurvey/newSurveyBtnForm.css';
import radioSelect from '../../assets/icons/radioSelect.svg';
import checkboxSelect from '../../assets/icons/checkboxSelect.svg';
import shortTextSelect from '../../assets/icons/shortTextSelect.svg';
import longTextSelect from '../../assets/icons/longTextSelect.svg';

const CreateNewSurvey = () => {
    const inputOnFocus = (e) => {
        console.log('active');
        e.target.classList.add('infoActiveFocus');
    }

    const inputOnBlur = (e) => {
        console.log('normal');
        e.target.classList.remove('infoActiveFocus');
    }

    // select
    const options = [
        {value: '객관식 질문'},
        {value: '체크박스'},
        {value: '단답형 텍스트'},
        {value: '장문형 텍스트'}
    ]
    const [region, setRegion] = useState(options[0]);
    const [currentOption, setCurentOption] = useState(null);
    const onChangeSelect = (item) => {
        setCurentOption(null);
        setRegion(item);
    };

    return (
        <>
            {/* pageTitle */}
            <div className="pageTitleBox">
                <div className="pageTitleWrap">
                    <h2 className='titleLeft'>종료된 설문</h2>
                </div>
            </div>
            
            {/* createForm */}
            <section className="createSurveyFormSection">    
                {/* <NewSurveyInfoFormComponent /> */}
                <div className='createNewSurveyInfoContainer'>
                    <div className="subTitleWrap">
                        <p className="subTitleLine">
                            <span className="subTitle">설문 정보 입력</span>
                        </p>
                    </div>
                    {/* newSurveyRow = 100% 다 차지, newSurveyHalfRow = 반만 차지 */}
                    <div className="surveyInfoBox">
                        <div className='titleRow'>
                            <input type='text' id='titleInput' placeholder='제목입력' onFocus={inputOnFocus} onBlur={inputOnBlur} />
                        </div>
                        <div className='newSurveyRow'>
                            <textarea rows='2' cols='100' id='contentInput' placeholder='설문조사 참여에 참고할 설문의 목적, 내용 기술' onFocus={inputOnFocus} onBlur={inputOnBlur} />
                        </div>
                        <div className='newSurveyRow'>
                            <input type='text' placeholder='태그 (쉼표로 구분해서 입력 > 태그, 태그, 태그)' onFocus={inputOnFocus} onBlur={inputOnBlur} />
                        </div>
                        <div className='newSurveyHalfRow'>
                            <div className="halfRowLeft">
                                <div className='fileInputBox'>
                                    <input className='fileName' readOnly type='text' placeholder='썸네일 이미지 파일 첨부' onFocus={inputOnFocus} onBlur={inputOnBlur} />
                                    <button><p id="appendIcon" className='infoIcon'></p></button>
                                </div>
                                <div className="commentBox">
                                    <p className='newSurveyComment'>* 썸네일로 사용할 이미지가 첨부되지 않았을 시에는 임의의 이미지로 대체합니다.</p>
                                </div>
                            </div>
                            {/* 추후 datepicker 모듈 사용이 좋아보임 */}
                            {/* 현재는 text로 입력 */}
                            <div className='halfRowRight'>
                                <div className="datePickerBox">
                                    <input className='datePick' readOnly type='text' placeholder='기간' onFocus={inputOnFocus} onBlur={inputOnBlur} />
                                    {/* date picker 사용법 참고 사이트 */}
                                    {/* https://reactnicedates.hernansartorio.com/ */}
                                    <button><p id="calendarIcon" className='infoIcon'></p></button>
                                </div>
                                <div className="commentBox">
                                    <p className='newSurveyComment'>* 기간은 최소1일부터 최대 30일까지 가능합니다.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <NewSurveyQnaFormComponent /> */}
                <div className='createSurveyQnaContainer'>
                    <div className="subTitleWrap">
                        <p className="subTitleLine">
                            <span className="subTitle">질문 입력</span>
                        </p>
                    </div>
                    <div className='surveyForm'>
                        {/* surveyForm = 테두리 스타일링, padding 값 */}
                        <div className='questionTypeWrap'>
                            <div className='questionBox'>
                                <input type="text" placeholder='질문' onFocus={inputOnFocus} onBlur={inputOnBlur} />
                            </div>
                            <div className='typeBox'>
                                <Select
                                    value={region}
                                    onChange={onChangeSelect}
                                    options={options}
                                    getOptionValue={(option) => option.value}
                                    getOptionLabel={(option) => option.value}
                                />
                            </div>
                        </div>
                        {/* 객관식 질문 */}
                        <div className='answerBox selectOne'>
                            <span className="optionBox">
                                <span className="radio">
                                    <p className="radioIcon"></p>
                                </span>
                                <input className='options' type="text" placeholder='옵션1' onFocus={inputOnFocus} onBlur={inputOnBlur} />
                                <button className="deleteOption">
                                    <p className="deleteOptionIcon"></p>
                                </button>
                            </span>
                            <span className="optionBox">
                                <span className="radio">
                                    <p className="radioIcon"></p>
                                </span>
                                <input className='options' type="text" placeholder='옵션2' onFocus={inputOnFocus} onBlur={inputOnBlur} />
                                <button className="deleteOption">
                                    <p className="deleteOptionIcon"></p>
                                </button>
                            </span>
                            <span className="optionBox">
                                <span className="radio">
                                    <p className="radioIcon"></p>
                                </span>
                                <a href='#!' className='addOption'>옵션 추가</a>
                            </span>
                            <span className="optionBox">
                                <span className="radio">
                                    <p className="radioIcon"></p>
                                </span>
                                <a href='#!' className='addTextField'>기타 추가</a>
                            </span>
                        </div>
                        <div className='deleteBox'>
                            <button className='deleteBtn'>
                                <p className="deleteIcon"></p>
                            </button>
                        </div>
                    </div>
                    {/* --------------------------------------------------------------------------------- */}
                    <div className='surveyForm'>
                        {/* surveyForm = 테두리 스타일링, padding 값 */}
                        <div className='questionTypeWrap'>
                            <div className='questionBox'>
                                <input type="text" placeholder='질문' onFocus={inputOnFocus} onBlur={inputOnBlur} />
                            </div>
                            <div className='typeBox'>
                                <Select
                                    value={region}
                                    onChange={onChangeSelect}
                                    options={options}
                                    getOptionValue={(option) => option.value}
                                    getOptionLabel={(option) => option.value}
                                />
                            </div>
                        </div>
                        {/* 체크박스 */}
                        <div className='answerBox selectMulti'>
                            <span className="optionBox">
                                <span className="checkbox">
                                    <p className="checkBoxIcon"></p>
                                </span>
                                <input className='options' type="text" placeholder='옵션1' onFocus={inputOnFocus} onBlur={inputOnBlur} />
                                <button className="deleteOption">
                                    <p className="deleteOptionIcon"></p>
                                </button>
                            </span>
                            <span className="optionBox">
                                <span className="checkbox">
                                    <p className="checkBoxIcon"></p>
                                </span>
                                <input className='options' type="text" placeholder='옵션2' onFocus={inputOnFocus} onBlur={inputOnBlur} />
                                <button className="deleteOption">
                                    <p className="deleteOptionIcon"></p>
                                </button>
                            </span>
                            <span className="optionBox">
                                <span className="checkbox">
                                    <p className="checkBoxIcon"></p>
                                </span>
                                <a href='#!' className='addOption'>옵션 추가</a>
                            </span>
                            <span className="optionBox">
                                <span className="checkbox">
                                    <p className="checkBoxIcon"></p>
                                </span>
                                <a href='#!' className='addTextField'>기타 추가</a>
                            </span>
                        </div>
                        <div className='deleteBox'>
                            <button className='deleteBtn'>
                                <p className="deleteIcon"></p>
                            </button>
                        </div>
                    </div>
                    {/* --------------------------------------------------------------------------------- */}
                    <div className='surveyForm'>
                        {/* surveyForm = 테두리 스타일링, padding 값 */}
                        <div className='questionTypeWrap'>
                            <div className='questionBox'>
                                <input type="text" placeholder='질문 입력'onFocus={inputOnFocus} onBlur={inputOnBlur} />
                            </div>
                            <div className='typeBox'>
                                <Select
                                    value={region}
                                    onChange={onChangeSelect}
                                    options={options}
                                    getOptionValue={(option) => option.value}
                                    getOptionLabel={(option) => option.value}
                                />
                            </div>
                        </div>
                        {/* 단답형 텍스트 */}
                        <div className='answerBox shortText'>
                            <input type="text" placeholder='단답형 텍스트' onFocus={inputOnFocus} onBlur={inputOnBlur} />
                        </div>
                        <div className='deleteBox'>
                            <button className='deleteBtn'>
                                <p className="deleteIcon"></p>
                            </button>
                        </div>
                        
                    </div>
                    {/* --------------------------------------------------------------------------------- */}
                    <div className='surveyForm'>
                        {/* surveyForm = 테두리 스타일링, padding 값 */}
                        <div className='questionTypeWrap'>
                            <div className='questionBox'>
                                <input type="text" placeholder='질문' onFocus={inputOnFocus} onBlur={inputOnBlur} />
                            </div>
                            <div className='typeBox'>
                                <Select
                                    value={region}
                                    onChange={onChangeSelect}
                                    options={options}
                                    getOptionValue={(option) => option.value}
                                    getOptionLabel={(option) => option.value}
                                />
                            </div>
                        </div>
                        {/* 장문형 텍스트 */}
                        <div className='answerBox longText'>
                            <input type="text" placeholder='장문형 텍스트' onFocus={inputOnFocus} onBlur={inputOnBlur} />
                        </div>
                        <div className='deleteBox'>
                            <button className='deleteBtn'>
                                <p className="deleteIcon"></p>
                            </button>
                        </div>
                    </div>
                </div>
                <div className='addWrap'>
                    <div className="addBox">
                        <button className='addQnA'>
                            <p className="addIcon"></p>
                        </button>
                    </div>
                </div>

                {/* <NewSurveyBtnFormComponent /> */}
                <div className='createNewSurveyBtnContainer'>
                    <div className='submitListWrap'>
                        <div className="submitListBtn">
                            <button className='listBtn'>목록</button>
                            <button type='submit' className='submitNewSurvey'>제출</button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default CreateNewSurvey;