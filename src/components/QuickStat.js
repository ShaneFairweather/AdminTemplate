import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const QuickStat = (props) => {
    const { number, text, data } = props;
    return (
        <div className="card quick-stat">
            <div className="quick-stat__info">
                <div className="quick-stat__number">
                    {props.number}
                </div>
                <div className="quick-stat__text">
                    {props.text}
                </div>
            </div>
            <div className="quick-stat__chart">
                <BarChart width={65} height={44} data={data}>
                    <Bar dataKey='uv' fill='#ffffff'/>
                </BarChart>
            </div>
        </div>
    )
};

export default QuickStat;