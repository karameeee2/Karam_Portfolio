import React from 'react';
import '../../css/common/topBtn.css';

const TopBtn = (props) => {
    // const topBtn = props.topBtn;
    const scrollTop = props.onClick;


    return (
        <div id="topBtnWrap">
            {/* topBtn */}

            <a className='topBtn' onClick={() => scrollTop()}>
                TOP
            </a>
        </div>
    )
}

export default TopBtn;