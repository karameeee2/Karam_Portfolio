import React, { useEffect, useState } from 'react';
import { css } from '@emotion/react';
import Select from 'react-select';
import '../../css/common/pageTitle.css';
import '../../css/createSurvey/newSurveyInfoForm.css';
import '../../css/createSurvey/newSurveyQnaForm.css';
import '../../css/createSurvey/newSurveyBtnForm.css';
import 'react-datepicker/dist/react-datepicker.css';
import radioSelect from '../../assets/icons/radioSelect.svg';
import checkboxSelect from '../../assets/icons/checkboxSelect.svg';
import shortTextSelect from '../../assets/icons/shortTextSelect.svg';
import longTextSelect from '../../assets/icons/longTextSelect.svg';
import DatePicker from 'react-datepicker';
import ko from 'date-fns/locale/ko';
import addDays from 'date-fns/addDays';
import ScaleLoader from 'react-spinners/ScaleLoader';

const CreateNewSurvey = (props) => {
    const { setSsubject, setScontent, setSdate, setEdate, sdate, edate, setTag, setImg, insertSurveySubmit, setQuestion, setAnswer, question, answer, loading,
    img } = props;

    const _setQuestion = (index) => (e) => {
        let obj = { ...question }
        obj[index] = e.target.value
        setQuestion(obj)
    }

    const _setAnswer = (index, idx) => (e) => {
        let arr = [...answer]
        let obj = { ...arr[index] }
        obj[idx] = e.target.value
        arr[index] = obj
        setAnswer(arr)
    }

    // select
    const styles = {
        // 옵션들에 대한 스타일 정의
        option: (styles, { isFocused, isDisabled }) => {
            return {
                backgroundColor: isFocused ? '#F0F0F0' : '',
                // color: isDisabled ? '#C7C7C7' : '',
                cursor: isDisabled ? 'default' : 'pointer',
                padding: '0 24px',
                filter: isDisabled ? 'opacity(0.3)' : ''
            };
        },
        // styles =>  ...styles는 이 라이브러리가 쓰고있는 기본 스타일을 일단 복사한다는 의미
        // control: 인풋창(select 태그라고 생각하면 됨)
        control: (styles) => (
            {
                ...styles, height: "48px", cursor: "pointer", padding: '0 24px', boxShadow: 'none',
                border: '1px solid #C7C7C7 !important', borderRadius: '4px'
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
            value: 'selectOne',
            label: (
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <img src={radioSelect} style={{ width: '24px', marginRight: '12px' }} alt='객관식질문아이콘' />{''}객관식 질문
                </div>
            )
        },
        {
            value: 'selectMulti',
            label: (
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <img src={checkboxSelect} style={{ width: '24px', marginRight: '12px' }} alt='체크박스아이콘' />{''}체크박스
                </div>
            ),
            isDisabled: true
        },
        {
            value: 'shortText',
            label: (
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <img src={shortTextSelect} style={{ width: '24px', marginRight: '12px' }} alt='단답형텍스트아이콘' />{''}단답형 텍스트
                </div>
            ),
            // isDisabled: true
        },
        {
            value: 'longText',
            label: (
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <img src={longTextSelect} style={{ width: '24px', marginRight: '12px' }} alt='장문형텍스트아이콘' />{''}장문형 텍스트
                </div>
            ),
            // isDisabled: true
        },
    ]


    // 폼 초기값
    const initialForm = {
        _id: 0,
        answer_type: 'selectOne',
        answer: undefined
    };

    // 폼 배열
    const [surveyForm, setSurveyForm] = useState([{ ...initialForm }]);

    // 입력 폼 추가
    const addForm = () => {
        if (!surveyForm || surveyForm.length <= 0) {
            setSurveyForm([...surveyForm, initialForm]);
            return;
        }
        // 객체의 불변성 때문에 객체복사 필요
        const obj = { ...initialForm };
        obj._id = surveyForm[surveyForm.length - 1]._id + 1;
        setSurveyForm([...surveyForm, obj]);
    };
    const popForm = (idx) => (e) => {
        // 폼이 비었다면 동작하지 않음
        if (!surveyForm || surveyForm.length <= 0) {
            return;
        }

        let copy_form = [...surveyForm];
        copy_form.splice(idx, 1);
        setSurveyForm(copy_form);
    }


    // 옵션 초기값
    const initialOption = {
        _id: 0
    }
    // 옵션 배열
    const [optionForm, setOptionForm] = useState([{ ...initialOption }]);
    // 옵션 추가
    const addOption = () => {
        if (!optionForm || optionForm.length <= 0) {
            setOptionForm([...optionForm, initialOption]);
            return;
        }
        const obj = { ...initialOption };
        obj._id = optionForm[optionForm.length - 1]._id + 1;
        setOptionForm([...optionForm, obj]);
    }
    // 옵션 삭제
    const popOption = (idx) => (e) => {
        if (!optionForm || optionForm.length <= 0) {
            return;
        }

        let copy_form = [...optionForm];
        copy_form.splice(idx, 1);
        setOptionForm(copy_form);
    }


    // 답변 형태 선택
    const setAnswerType = (idx) => (e) => {
        // 객체의 불변성 때문에 객체 복사 필요
        let copy_form = [...surveyForm];
        let obj = { ...copy_form[idx] };

        obj.answer_type = e.value;
        copy_form[idx] = obj;
        setSurveyForm(copy_form);
    }

    const renderAnswerInputType = (survey, index) => {
        let result = <></>;

        switch (survey.answer_type) {
            case 'selectOne':
                result = (
                    <div className='answerBox selectOne' onChange={handleOneAnswer(index)} value={undefined}>
                        {optionForm && optionForm.map((item, idx) => {
                            return (
                                <span className="optionBox" key={idx}>
                                    <span className="radio">
                                        <p className="radioIcon"></p>
                                    </span>
                                    <input className='options' type="text" placeholder={'옵션' + (idx + 1)} onChange={_setAnswer(index, idx)} />
                                    <button className="deleteOption" onClick={popOption(idx)}>
                                        <p className="deleteOptionIcon"></p>
                                    </button>
                                </span>
                            )
                        })}
                        <span className="optionBox">
                            <span className="radio">
                                <p className="radioIcon"></p>
                            </span>
                            <a href='#!' className='addOption' onClick={addOption} >옵션 추가</a>
                        </span>
                        {/* <span className="optionBox">
                            <span className="radio">
                                <p className="radioIcon"></p>
                            </span>
                            <a href='#!' className='addTextField'>기타 추가</a>
                        </span> */}
                    </div>
                );
                break;
            // case 'selectMulti':
            //     console.log('multi');
            //     result = (
            //         <div className='answerBox selectMulti' onChange={ handleMultiAnswer(idx, 1) }>
            //             {optionForm.map((item, idx) => {
            //                 return (
            //                     <span className="optionBox" key={idx}>
            //                         <span className="checkbox">
            //                             <p className="checkBoxIcon"></p>
            //                         </span>
            //                         <input className='options' type="text" placeholder={'옵션' + (idx + 1)} onChange={_setAnswer(index,idx)} />
            //                         <button className="deleteOption" onClick={popOption(idx)}>
            //                             <p className="deleteOptionIcon"></p>
            //                         </button>
            //                     </span>
            //                 )
            //             })}
            //             <span className="optionBox">
            //                 <span className="checkbox">
            //                     <p className="checkBoxIcon"></p>
            //                 </span>
            //                 <a href='#!' className='addOption'>옵션 추가</a>
            //             </span>
            //             {/* <span className="optionBox">
            //                 <span className="checkbox">
            //                     <p className="checkBoxIcon"></p>
            //                 </span>
            //                 <a href='#!' className='addTextField'>기타 추가</a>
            //             </span> */}
            //         </div>
            //     );
            //     break;
            case 'shortText':
                result = (
                    <div className='answerBox shortText' onChange={handleStringAnswer(index)}>
                        <input type="text" placeholder='단답형 텍스트' readOnly />
                    </div>
                );
                break;
            case 'longText':
                result = (
                    <div className='answerBox longText' onChange={handleStringAnswer(index)}>
                        <input type="text" placeholder='장문형 텍스트' readOnly />
                    </div>
                );
                break;
            default:
                break;
        }

        return result;
    }
    // selectOne
    const handleOneAnswer = (idx) => (e) => {
        let copy_form = [...surveyForm];
        let obj = { ...copy_form[idx] };

        obj.answer = e.target.value;
        copy_form[idx] = obj;
        setSurveyForm(copy_form);
    }

    // selectMulti
    const handleMultiAnswer = (idx, num) => (e) => {
        let copy_form = [...surveyForm];
        let obj = { ...copy_form[idx] };

        // 없다면 객체형태의 answer를 만들어줌
        if (obj.answer === undefined)
            obj.answer = {};
        else
            obj.answer = { ...obj.answer };

        obj.answer[num] = e.target.checked;
        copy_form[idx] = obj;
        setSurveyForm(copy_form);
    }

    // shortText, longText
    const handleStringAnswer = (idx) => (e) => {
        let copy_form = [...surveyForm];
        let obj = { ...copy_form[idx] };

        obj.answer = e.target.value;
        copy_form[idx] = obj;
        setSurveyForm(copy_form);
    }

    // 최종값 확인
    // const onFormSubmit = () => {
    //     console.log('최종값', surveyForm);
    // }


    //fileUpload
    // const [imgFile, setImgFIle] = useState('');

    const handleFile = (e) => {
        const pathPoint = e.target.value.indexOf('.');
        const filePoint = e.target.value.substr(pathPoint + 1, e.length);
        const fileType = filePoint.toLowerCase();
        if (fileType == 'jpg' || fileType == 'jpeg' || fileType == 'png') {

        } else {
            alert('이미지파일만 선택가능합니다.')
            return false;
        }
        // console.log(typeof e.target.files[0]);
        setImg(e.target.files[0]);
    }

    // 설문 제목 글자수 제한
    const onhandleSubject = (e) => {
        if (e.target.value.length > 100) {
            return alert('최대 100글자까지 입력가능합니다.');
        }

        setSsubject(e.target.value)
    }

    const onhandleContent = (e) => {
        if (e.target.value.length > 200) {
            return alert('최대 200글자까지 입력가능합니다.');
        }
        setScontent(e.target.value);
    }

    // loading-spinner
    const [color, setColor] = useState('#5E00FF');

    const override = css`
        display: block,
        margin: 0 auto,
    `;

    return (
        <>
            {/* pageTitle */}
            <div className="pageTitleBox">
                <div className="pageTitleWrap">
                    <h2 className='titleLeft'>새 설문 등록</h2>
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
                            <input type='text' id='titleInput' placeholder='설문 제목 입력' maxLength='100' onChange={onhandleSubject} />
                        </div>
                        <div className='newSurveyRow'>
                            <textarea rows='2' cols='100' id='contentInput' placeholder='설문 설명 입력' maxLength='200' onChange={onhandleContent} />
                        </div>
                        <div className='newSurveyRow'>
                            <input type='text' placeholder='태그 입력 (쉼표로 구분해서 입력)' maxLength='50' onChange={e => { setTag(e.target.value); }} />
                        </div>
                        <div className='newSurveyHalfRow'>
                            <div className="halfRowLeft">
                                <div className='fileInputBox'>
                                    <input className='fileName' readOnly type='text' placeholder='썸네일 이미지 파일 첨부' maxLength='200' 
                                    value={img && img.name || ''} />
                                    <label htmlFor="file">
                                        <p id="appendIcon" className='infoIcon'></p>
                                    </label>
                                    <input type="file" id='file' accept='image/jpg, image/jpeg, image/png' onChange={handleFile} style={{ display: 'none' }} />
                                </div>
                                <div className="commentBox">
                                    <p className='newSurveyComment'>* 썸네일로 사용할 이미지가 첨부되지 않았을 시에는 임의의 이미지로 대체합니다.</p>
                                </div>
                            </div>
                            <div className='halfRowRight'>
                                <div className="datePickerBox">
                                    <DatePicker
                                        selected={sdate}
                                        onChange={date => setSdate(date)}
                                        dateFormat='yyyy/MM/dd'
                                        placeholderText={sdate}
                                        locale={ko}
                                        readOnly
                                    />
                                    <span className='inputCenter'> ~ </span>
                                    <DatePicker
                                        selected={edate}
                                        onChange={date => { setEdate(date) }}
                                        selectsEnd
                                        startDate={sdate}
                                        endDate={edate}
                                        minDate={sdate}
                                        maxDate={addDays(new Date(), 30)}
                                        dateFormat='yyyy/MM/dd'
                                        placeholderText='종료 날짜'
                                        locale={ko}
                                    />
                                    <button>
                                        <p id="calendarIcon" className='infoIcon'></p>
                                    </button>
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
                    {surveyForm.map((item, idx) => {
                        return (
                            <div className='surveyEach' key={idx}>
                                {/* surveyForm = 테두리 스타일링, padding 값 */}
                                <div className='questionTypeWrap'>
                                    <div className='questionBox'>
                                        <input type="text" placeholder='질문' onChange={_setQuestion(idx)} />
                                    </div>
                                    <div className='typeBox'>
                                        <Select
                                            styles={styles}
                                            options={options}
                                            onChange={setAnswerType(idx)}
                                            isSearchable={false}
                                            defaultValue={options[0]}
                                        />
                                    </div>
                                </div>
                                <div>{renderAnswerInputType(item, idx)}</div>

                                <div className='deleteBox'>
                                    <button className='deleteBtn' onClick={popForm(idx)}>
                                        <p className="deleteIcon"></p>
                                    </button>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div className='addWrap'>
                    <div className="addBox">
                        <button className='addQnA' onClick={addForm}>
                            <p className="addIcon"></p>
                        </button>
                    </div>
                </div>

                {/* <NewSurveyBtnFormComponent /> */}
                <div className='createNewSurveyBtnContainer'>
                    <div className='submitListWrap'>
                        <div className="submitListBtn">
                            <button className='listBtn'>목록</button>
                            <button type='submit' className='submitNewSurvey' onClick={insertSurveySubmit}>
                                제출
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            {loading ?
                <div className="spinnerContainer">
                    <ScaleLoader color={color} loading={true} css={override} size={150} />
                </div>
                :
                false
            }
        </>
    )
}

export default CreateNewSurvey;