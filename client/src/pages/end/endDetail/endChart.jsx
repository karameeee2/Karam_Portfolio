import React from 'react';
import '../../../css/end/endDetail/endChart.css';

const EndChart = (props) => {
    const endQ = props.endQ;
    const endA = props.endA;
    return(
        <div className='endChartContainer'>
            {endQ.map((item, idx) => {
                return(
                    <div className="chartWrap">
                        <p className="qst" key={idx}>{idx+1}. {item.qst}</p>
                        {endA.map((item, idx) => {
                            return(
                                <p className="aswBox" key={idx}>
                                    <div className="chartBox">
                                        <span className="age">{item.asw}</span>
                                        <ul className="chartBar">
                                            <li className='answer01' style={{width: '33%'}}></li>
                                            <li className='answer02' style={{width: '24%'}}></li>
                                            <li className='answer03' style={{width: '19%'}}></li>
                                            <li className='answer04' style={{width: '15%'}}></li>
                                            <li className='answer05' style={{width: '9%'}}></li>
                                        </ul>
                                    </div>
                                    
                                </p>
                            );
                        })}
                        <ul className="categoryBox">
                            <li className='category'>
                                <span className="categoryColor color01" />
                                <span className="categoryName">선택1</span>
                            </li>
                            <li className='category'>
                                <span className="categoryColor color02" />
                                <span className="categoryName">선택2</span>
                            </li>
                            <li className='category'>
                                <span className="categoryColor color03" />
                                <span className="categoryName">선택3</span>
                            </li>
                            <li className='category'>
                                <span className="categoryColor color04" />
                                <span className="categoryName">선택4</span>
                            </li>
                            <li className='category'>
                                <span className="categoryColor color05" />
                                <span className="categoryName">선택5</span>
                            </li>
                        </ul>
                    </div>
                );
            })}
        </div>
    );
}

export default EndChart;