import React from 'react';
import '../../css/mainSection/landing.css';

const Landing = (props) => {
    const landing = props.landing;

    return (
        <>
            {/* <SearchComponent/> */}
            <div id="landingContainer">
                <div className="landingBox">
                    <div className="landingWrap">
                        <div className="wave _one"></div>
                        <div className="wave _two"></div>
                        <div className="contentBox">   
                            <div className="contentWrap">
                                <div className="textBox halfBox">
                                    <p className="largeText">
                                        설문을 통해 데이터를 쉽고 빠르게 얻으세요!
                                    </p>
                                    <p className="smallText">
                                        필요한 데이터에 대한 설문을 검색하고, 새로운 설문을 등록해 나에게 꼭 필요한 정보와 데이터 및 통계를 얻어보세요.
                                    </p>
                                    <button className="freeStart">
                                        무료로 시작하기
                                    </button>
                                </div>
                                <div className="imageBox halfBox">
                                    <div className="changeImage">
                                        {landing.map((item, idx) => {
                                            return (
                                                <img className='landingImg' src={item.imageSrc} key={idx} alt="사이트 미리보기 이미지" />
                                            )
                                        })}
                                    </div>    
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </>
    );
}

export default Landing;