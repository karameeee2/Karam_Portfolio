import React from 'react';
import EndPreviewComponent from '../../../components/end/endList/endPreview';
import SearchComponent from '../../../components/search/search';
import PageTitle from '../../pageTitle/pageTitle';
import '../../../css/end/endList/endList.css';

const EndList = () => {
    return (
        <div>
            <SearchComponent />
            <PageTitle pageTitle='종료된 설문' />
            <section className="endPreviewSection">
                <EndPreviewComponent />
            </section>
        </div>
        
    );
}

export default EndList;