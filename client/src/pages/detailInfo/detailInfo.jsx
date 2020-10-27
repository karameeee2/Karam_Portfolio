import React from 'react';
import '../../css/common/detailInfo.css';

const DetailInfo = (props) => {
    const DetailInfo = props.detailInfo;

    return (
        <div className='detailInfoContainer'>
            <div className="detailInfoBox">
                <img className="infoThumbnail" src={DetailInfo.thumbnail} alt='설문조사 대표이미지' />
                <div className="detailInfoWrap">
                    <h3 className="infoSubject">{DetailInfo.subject}</h3>
                    <p className="infoContent">{DetailInfo.content}</p>
                    <p className="infoSpanWrap">
                        <span className="infoNickname">{DetailInfo.nickname}</span>
                        <span className='verLine'>|</span>
                        <span className="infoTerm">{DetailInfo.term}</span>
                        <span className='verLine'>|</span>
                        <span className="infoTag">{DetailInfo.tag}</span>
                    </p>
                </div>
            </div>

        </div>
    );
}

export default DetailInfo;