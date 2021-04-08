import React from 'react';
import '../../css/common/pageTitle.css';
import '../../css/createSurvey/newSurveyInfoForm.css';
import '../../css/createSurvey/newSurveyQnaForm.css';
import '../../css/createSurvey/newSurveyBtnForm.css';
import appendIcon from '../../assets/icons/appendIcon.svg';
import calendarIcon from '../../assets/icons/calendarIcon.svg';

const CreateNewSurvey = () => {
    const inputActive = () => {
        console.log('active');
        let titleInput = document.getElementById('titleInput');
        let contentInput = document.getElementById('contentInput');
        // if(this == 'titleInput') {
        //     titleInput.classList.add('infoActiveFocus');
        // } else if(this == contentInput) {
        //     contentInput.classList.add('infoActiveFocus');
        // }
    }

    const inputNormal = () => {
        console.log('normal');
        let titleInput = document.getElementById('titleInput');
        titleInput.classList.remove('infoActiveFocus');
    }

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
                            <input type='text' id='titleInput' placeholder='제목입력' onFocus={inputActive} onBlur={inputNormal} />
                        </div>
                        <div className='newSurveyRow'>
                            <textarea rows='2' cols='100' id='contentInput' placeholder='설문조사 참여에 참고할 설문의 목적, 내용 기술' />
                        </div>
                        <div className='newSurveyRow'>
                            <input type='text' placeholder='태그 (쉼표로 구분해서 입력 > 태그, 태그, 태그)' />
                        </div>
                        <div className='newSurveyHalfRow'>
                            <div className="halfRowLeft">
                                <div className='fileInputBox'>
                                    <input className='fileName' readOnly type='text' placeholder='썸네일 이미지 파일 첨부' />
                                    <button><img src={appendIcon} alt="첨부아이콘"/></button>
                                </div>
                                <div className="commentBox">
                                    <p className='newSurveyComment'>* 썸네일로 사용할 이미지가 첨부되지 않았을 시에는 임의의 이미지로 대체합니다.</p>
                                </div>
                            </div>
                            {/* 추후 datepicker 모듈 사용이 좋아보임 */}
                            {/* 현재는 text로 입력 */}
                            <div className='halfRowRight'>
                                <div className="datePickerBox">
                                    <input className='datePick' readOnly type='text' placeholder='기간' />
                                    {/* date picker 사용법 참고 사이트 */}
                                    {/* https://reactnicedates.hernansartorio.com/ */}
                                    <button><img src={calendarIcon} alt="달력아이콘"/></button>
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

                {/* <NewSurveyBtnFormComponent /> */}
                <div className='createNewSurveyBtnContainer'>
                    <div className='newSurveyRow'>
                        <div className="submitCancelBtn">
                            <button className='cancelBtn'>목록</button>
                            <button type='submit' className='submitNewSurvey'>제출</button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default CreateNewSurvey;