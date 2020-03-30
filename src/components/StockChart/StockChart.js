import React, { useEffect, useState } from 'react'
import { getData } from "./utils"

import { scaleTime } from "d3-scale";
import { utcDay } from "d3-time";

import { ChartCanvas, Chart } from "react-stockcharts";
import { CandlestickSeries } from "react-stockcharts/lib/series";
import { XAxis, YAxis } from "react-stockcharts/lib/axes";
import { fitWidth } from "react-stockcharts/lib/helper";
import { last, timeIntervalBarWidth } from "react-stockcharts/lib/utils";

//CandleStickChart = fitWidth(CandleStickChart);

// const CandleStickChart = fitWidth(({ data }) => {
//     const { type, width, ratio } = {
//         type: 'svg',
//         //width: 400,
//         ratio: 1
//     }
//     const xAccessor = d => d.date;
//     const xExtents = [
//         xAccessor(last(data)),
//         xAccessor(data[data.length - 100])
//     ];

//     return (
//             <ChartCanvas height={400}
//                 ratio={ratio}
//                 width={width}
//                 // margin={{ left: 'auto', right: 'auto', top: 0, bottom: 0 }}
//                 type={type}
//                 seriesName="MSFT"
//                 data={data}
//                 xAccessor={xAccessor}
//                 xScale={scaleTime()}
//                 xExtents={xExtents}>

//                 <Chart id={1} yExtents={d => [d.high, d.low]}>
//                     <XAxis axisAt="bottom" orient="bottom" ticks={6}/>
//                     <YAxis axisAt="left" orient="left" ticks={5} />
//                     <CandlestickSeries width={timeIntervalBarWidth(utcDay)}/>
//                 </Chart>
//             </ChartCanvas>
//     )
// })

class CandleStickChart extends React.Component {
	render() {
		const { type, width, data, ratio } = this.props;
		const xAccessor = d => d.date;
		const xExtents = [
			xAccessor(last(data)),
			xAccessor(data[data.length - 100])
        ];
        
		return (
            <div style={{ width: width, margin: '0 auto', border: '1px solid black'}}>
                <ChartCanvas height={400}
                        ratio={ratio}
                        width={width}
                        margin={{ left: 48, right: 0, top: 24, bottom: 24 }}
                        type={type}
                        seriesName="MSFT"
                        data={data}
                        xAccessor={xAccessor}
                        xScale={scaleTime()}
                        xExtents={xExtents}>

                    <Chart id={1} yExtents={d => [d.high, d.low]}>
                        <XAxis axisAt="bottom" orient="bottom" ticks={6}/>
                        <YAxis axisAt="left" orient="left" ticks={5} />
                        <CandlestickSeries width={timeIntervalBarWidth(utcDay)}/>
                    </Chart>
                </ChartCanvas>
            </div>
		);
	}
}

CandleStickChart = fitWidth(CandleStickChart);

export default () => {
    const [data, setData] = useState([])

    useEffect(() => {
        getData().then(data => {
            setData(data)
        })
    }, [])

    console.log(data)

    return <div>
        { data.length > 0 && (
            <CandleStickChart data={data} width={window.innerWidth} />
        )}
    </div>
}