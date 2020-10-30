import React from 'react';
import CreateBtnComponent from '../../../components/progress/progressList/createBtn';
import ProgressPreviewComponent from '../../../components/progress/progressList/progressPreview';
import SearchComponent from '../../../components/search/search';
import PageTitle from '../../pageTitle/pageTitle';

const ProgressList = (props) => {

    return (
        <div>
            <SearchComponent />
            <PageTitle pageTitle='진행중인 설문' />
            {/* List */}
            <section className="progressPreviewSection">
                <div className="progressPrevWrap">
                <CreateBtnComponent />
                <ProgressPreviewComponent surveyList={props.surveyList} />
                </div>
            </section>
        </div>
    )
}

export default ProgressList;