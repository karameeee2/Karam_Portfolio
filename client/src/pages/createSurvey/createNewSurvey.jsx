import React from 'react';
import Select from 'react-select';
import '../../css/common/pageTitle.css';
import '../../css/createSurvey/newSurveyInfoForm.css';
import '../../css/createSurvey/newSurveyQnaForm.css';
import '../../css/createSurvey/newSurveyBtnForm.css';
import radioSelect from '../../assets/icons/radioSelect.svg';
import checkboxSelect from '../../assets/icons/checkboxSelect.svg';
import shortTextSelect from '../../assets/icons/shortTextSelect.svg';
import longTextSelect from '../../assets/icons/longTextSelect.svg';
import arrowDown from '../../assets/icons/arrowDown.svg'

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
    const styles = {
        // 옵션들에 대한 스타일 정의
        option: (styles, {isFocused, isDisabled}) => {
            return {
                backgroundColor: isFocused ? '#F0F0F0' : '',
                color: isDisabled ? '#C7C7C7' : '',
                cursor: isDisabled ? 'default' : 'cursor',
                padding: '0 24px'
            };
        },
        // styles =>  ...styles는 이 라이브러리가 쓰고있는 기본 스타일을 일단 복사한다는 의미
        // control: 인풋창(select 태그라고 생각하면 됨)
        control: (styles) => (
            {
                ...styles, height: "48px", cursor: "pointer", padding: '0 24px', boxShadow: 'none', 
                border: '1px solid #C7C7C7', borderRadius: '4px'
            }
        ),

        // container: option, control을 감싸고 있는 부모요소 (React-select 컴포넌트 최상위부모컨테이너)
        // 여기서 width 값을 결정하면 됨
        container: (styles) => (
            {
                ...styles, width: "276px", height: "48px"
            }
        ),

        valueContainer: (styles) => (
            {
                ...styles, height: '48px', padding: '0'
            }
        ),
        indicatorSeparator: (styles) => (
            {
                ...styles, display: 'none', 
            }
        ),
        menuList: (styles) => (
            {
                ...styles, lineHeight: '48px', padding: '0'
            }
        ),
        
    }

    // 선택 목록 (option 태그)
    // value는 요소 선택했을 때 넘어오는 값
    // label 은 보여줄 컴포넌트
    const options = [
        {
            value: '1',
            label: (
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <img src={radioSelect} style={{ width: '24px', marginRight: '12px' }} alt='객관식질문아이콘' />{''}객관식 질문
                </div>
            )
        },
        {
            value: '2',
            label: (
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <img src={checkboxSelect} style={{ width: '24px', marginRight: '12px' }} alt='체크박스아이콘' />{''}체크박스
                </div>
            ),
            // isDisabled: true
        },
        {
            value: '3',
            label: (
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <img src={shortTextSelect} style={{ width: '24px', marginRight: '12px' }} alt='단답형텍스트아이콘' />{''}단답형 텍스트
                </div>
            ),
            // isDisabled: true
        },
        {
            value: '4',
            label: (
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <img src={longTextSelect} style={{ width: '24px', marginRight: '12px' }} alt='장문형텍스트아이콘' />{''}장문형 텍스트
                </div>
            ),
            // isDisabled: true
        },
    ]
    
    const onChangeSelect = (item) => {
        let radioSelected = document.getElementsByClassName('selectOne')[0];
        let checkSelected = document.getElementsByClassName('selectMulti')[0];
        let shortSelected = document.getElementsByClassName('shortText')[0];
        let longSelected = document.getElementsByClassName('longText')[0];
        if(item.value === '1') {
            console.log('객관식 질문');
            radioSelected.style.display = 'block';
            checkSelected.style.display = 'none';
            shortSelected.style.display = 'none';
            longSelected.style.display = 'none';
        } else if(item.value === '2') {
            console.log('체크박스');
            radioSelected.style.display = 'none'; 
            checkSelected.style.display = 'block';
            shortSelected.style.display = 'none';
            longSelected.style.display = 'none';
        } else if(item.value === '3') {
            console.log('단답형 텍스트');
            radioSelected.style.display = 'none'; 
            checkSelected.style.display = 'none';
            shortSelected.style.display = 'block';
            longSelected.style.display = 'none';
        } else if(item.value === '4') {
            console.log('장문형 텍스트');
            radioSelected.style.display = 'none'; 
            checkSelected.style.display = 'none';
            shortSelected.style.display = 'none';
            longSelected.style.display = 'block';
        }
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
                                    styles={styles}
                                    options={options}
                                    onChange={onChangeSelect}
                                    isSearchable={false}
                                    defaultValue={options[0]}
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
                        {/* 단답형 텍스트 */}
                        <div className='answerBox shortText'>
                            <input type="text" placeholder='단답형 텍스트' onFocus={inputOnFocus} onBlur={inputOnBlur} />
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