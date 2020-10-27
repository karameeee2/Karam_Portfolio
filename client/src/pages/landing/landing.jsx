import React from 'react';
import SearchComponent from '../../components/search/search';
import '../../css/mainSection/landing.css';

const Landing = (props) => {
    const landing = props.landing;

    return (
        <>
            <SearchComponent />
            <div id="landingBox">
                <div className="landingImg">
                    {landing.map((item, idx) => {
                        return (
                            <img src={item.imageSrc} key={idx} alt='사이트 소개 이미지' />
                        )
                    })}
                </div>
            </div>
        </>
    );
}

export default Landing;