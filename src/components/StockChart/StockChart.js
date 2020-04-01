import React, { useEffect, useState } from 'react'
import { getData, chartProps } from "./utils"

import { scaleTime } from "d3-scale";
import { utcMinute, timeInterval, timeHour } from "d3-time";
import { discontinuousTimeScaleProvider } from "react-stockcharts/lib/scale";


import { ChartCanvas, Chart } from "react-stockcharts";
import { CandlestickSeries } from "react-stockcharts/lib/series";
import { XAxis, YAxis } from "react-stockcharts/lib/axes";
import { fitWidth } from "react-stockcharts/lib/helper";
import { last, timeIntervalBarWidth } from "react-stockcharts/lib/utils";


class CandleStickChart extends React.Component {
    constructor(props) {
        super(props);
        this.divRef = React.createRef();
    }

	render() {
        const { type, width, data, ratio } = this.props;

        data["columns"] = ["date", "open", "high", "low", "close"]


        const xAccessor = d => d.date;
        
		const xExtents = [
			new Date('2020-01-10T02:00Z'),
			new Date('2020-01-10T02:04Z')
        ];

        // const xScaleProvider = discontinuousTimeScaleProvider
		// 	.inputDateAccessor(d => d.date);

        // const {
		// 	data,
		// 	xScale,
		// 	xAccessor,
		// 	displayXAccessor,
        // } = xScaleProvider(initialData);
        
		return (
            <div 
                style={{ 
                width: width,
                margin: '0 auto',
                // borderBottom: '1px solid white'
                borderRadius: '3px',
                // backgroundColor: 'rgb(35, 66, 90, 0.3)'
                // border: '1px solid black'
            }}>
                <ChartCanvas 
                    {...chartProps}
                    height={400}
                    ratio={ratio}
                    width={width - 24}
                    margin={{ left: 32, right: 32, top: 24, bottom: 24 }}
                    type={type}
                    seriesName="MSFT_1"
                    data={data}
                    xScale={scaleTime()}
                    xExtents={xExtents}
                    //yExtents={[0, 20]}
                    xAccessor={xAccessor}
                    //displayXAccessor={displayXAccessor}
                >
                    <Chart id={1} yExtents={d => [d.high, d.low]}>
                        {/* <XAxis 
                            axisAt="bottom" 
                            orient="bottom" 
                            ticks={5} 
                            tickStroke="#FFFFFF"
                            stroke="#FFFFFF"
                        /> */}
                        {/* <YAxis 
                            axisAt="right" 
                            orient="right" 
                            ticks={5} 
                            tickStroke="#FFFFFF"
                            stroke="#FFFFFF"
                        /> */}
                        
                        <CandlestickSeries
                            stroke={d => d.close > d.open ? "#6BA583" : "#DB0000"}
                            wickStroke={d => d.close > d.open ? "#6BA583" : "#DB0000"}
                            fill={d => d.close > d.open ? "#6BA583" : "#DB0000"} 
                            width={timeIntervalBarWidth(utcMinute)}
                        />
                    </Chart>
                </ChartCanvas>
            </div>
		);
	}
}

CandleStickChart = fitWidth(CandleStickChart);

export default ({ data }) => {
    //const [data, setData] = useState([])

    useEffect(() => {
        // getData().then(data => {
        //     setData(data)
        // })
    }, [])

    return <div>
        { data.length > 0 && (
            <CandleStickChart data={data} width={window.innerWidth > 400 ? 400 : window.innerWidth} />
        )}
    </div>
}