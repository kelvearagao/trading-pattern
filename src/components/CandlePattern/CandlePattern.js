import React, { useState } from 'react'
import StockChart from 'components/StockChart'
import Button from 'react-bootstrap/Button'
import { Wrapper, ButtonsWrapper } from './CandlePattern.style'
import { ReactComponent as TrendDownIcon } from 'assets/images/trend-down.svg'
import { ReactComponent as TrendUpIcon } from 'assets/images/trend-up.svg'
import { ReactComponent as MenuIcon } from 'assets/images/menu.svg'
import { patterns } from './candles';

export default () => {
    const [pattern, setPattern] = useState(patterns[Math.floor(Math.random() * patterns.length)])
    // const [pattern, setPattern] = useState(patterns[2])

    const handleTrendClick = (trend) => () => {
        if (trend === pattern.trend) {
            alert('Acertou!!!')

            setPattern(patterns[Math.floor(Math.random() * patterns.length)])
        } else {
            alert('Errou!')
        }
    }

    return <Wrapper 
        // style={{ height: window.innerHeight}}
        >
        <header>
            <MenuIcon />
            <h1>Qual a tendência?</h1>
            <span> </span>
        </header>
        
        <StockChart data={pattern.data} />
        
        <ButtonsWrapper>
            <Button 
                onClick={handleTrendClick(2)}
                size="lg" v
                variant="danger"
            >
                <span><TrendDownIcon /></span>
                <span>Queda</span>
            </Button>
            <Button 
                onClick={handleTrendClick(1)}
                size="lg" 
                variant="success"
            >
                <span><TrendUpIcon /></span>
                <span>Alta</span>
            </Button>
        </ButtonsWrapper>
    </Wrapper>
}