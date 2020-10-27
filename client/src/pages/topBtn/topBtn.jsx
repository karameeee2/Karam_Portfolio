import React from 'react';
import '../../css/common/topBtn.css';

const TopBtn = (props) => {
    const scrollTop = props.onClick;

    return (
        <div id="topBtnWrap">
            {/* topBtn */}

            <a href='#!' className='topBtn' onClick={() => scrollTop()}>
                TOP
            </a>
        </div>
    )
}

export default TopBtn;