import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import '../../../css/common/previewList.css';
import '../../../css/end/endList/endPreview.css';

const EndPreview = (props) => {
    const endPreview = props.endPreview;
    return (
        <div className="previewContainer">
            <ul className="previewWrap">
                {endPreview.map((item) => {
                    return (
                        <li className="prevBox">
                            <img className="prevThumbnail" src={item.thumbnail} />
                            <Link to="/endDetail"><h3 className='prevSubject'>{item.subject}</h3></Link>
                            <p className='prevNickname'>{item.nickname}</p>
                            <p className='prevTerm'>{item.term}</p>
                            <p className="prevTag">{item.total}</p>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default EndPreview;