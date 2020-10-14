import React from 'react';
import '../../css/common/pageTitle.css';

const MypageInnerTitle = (props) => {
    const innerTitle = props.innerTitle;

    return (
        <div className="innerTitleWrap">
            <div className="innerTitleBox">
                <h2>{ innerTitle }</h2>
            </div>
        </div>
    );
}

export default MypageInnerTitle;