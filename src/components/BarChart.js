import React, { useEffect, useState } from 'react'
import Chart from './Chart';

const datas = [
    [10, 30, 50, 60, 80],
    [20, 30, 60, 70, 90],
    [10, 20, 50, 80, 90]
]
var i = 0;

const BarChart = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        changeData();
    }, []);

    const changeData = () => {
        setData(datas[i++]);
        if (i === datas.length) i = 0;
    }

    return (
        <div className="chart">
            <Chart width={300} height={400} data={data} />
            <button onClick={changeData}>Change Data</button>
        </div>
    );
}

export default BarChart