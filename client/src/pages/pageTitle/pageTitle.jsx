import React from 'react';
import '../../css/common/pageTitle.css';

const PageTitle = (props) => {
    const pageTitle = props.pageTitle;

    return (
        <div className="pageTitleBox">
            <div className="pageTitleWrap">
                <h2>{pageTitle}</h2>
            </div>
        </div>
    )
}

export default PageTitle;