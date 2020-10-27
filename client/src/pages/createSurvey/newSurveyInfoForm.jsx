import React from 'react';
import '../../css/createSurvey/newSurveyInfoForm.css';
const NewSurveyInfoForm = () => {

    return (
        <div className='createNewSurveyInfoContainer'>
            {/* newSurveyRow = 100% 다 차지, newSurveyHalfRow = 반만 차지 */}
            <div className='newSurveyRow'>
                <input type='text' placeholder='제목입력' />
            </div>
            <div className='newSurveyRow'>
                <textarea rows='2' cols='100' placeholder='설문조사 참여에 참고할 설문의 목적, 내용 기술' />
            </div>
            <div className='newSurveyRow'>
                <input type='text' placeholder='태그 (쉼표로 구분해서 입력 > 태그, 태그, 태그)' />
            </div>
            <div className='newSurveyHalfRow'>
                <div className="halfRowLeft">
                    <div className='fileInputBox'>
                        <input className='fileName' readOnly type='text' placeholder='썸네일 이미지 파일 첨부' />
                        <button>파일 첨부</button>
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
                        <button>기간 선택</button>
                    </div>
                    <div className="commentBox">
                        <p className='newSurveyComment'>* 기간은 최소1일부터 최대 30일까지 가능합니다.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NewSurveyInfoForm;