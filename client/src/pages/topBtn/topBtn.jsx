import React from 'react';
import topIcon from '../../assets/icons/topIcon.svg';
import '../../css/common/topBtn.css';

const TopBtn = (props) => {
    const scrollTop = props.onClick;

    return (
        <div id="topBtnWrap">
            {/* topBtn */}
            <a href='#!' className='topBtn' onClick={() => scrollTop()}>
                <img src={topIcon} alt="맨위로"/>
            </a>
        </div>
    )
}

export default TopBtn;