import React, { useEffect, useState } from 'react'
import StockChart from 'components/StockChart'
import Button from 'react-bootstrap/Button'
import { Wrapper, ButtonsWrapper } from './CandlePattern.style'
import { patterns } from './candles';

export default () => {
    const [pattern, setPattern] = useState(patterns[Math.floor(Math.random() * patterns.length)])

    const handleTrendClick = (trend) => () => {
        if (trend === pattern.trend) {
            alert('Acertou!')

            setPattern(patterns[Math.floor(Math.random() * patterns.length)])
        } else {
            alert('Errou!')
        }
    }

    return <Wrapper style={{ height: window.innerHeight}}>
        <h1>Qual a tendência?</h1>
        
        <StockChart data={pattern.data} />
        
        <ButtonsWrapper>
            <Button 
                onClick={handleTrendClick(1)}
                size="lg" 
                variant="success"
            >
                Sobe
            </Button>

            <Button 
                onClick={handleTrendClick(2)}
                size="lg" v
                variant="danger"
            >
                Desce
            </Button>
        </ButtonsWrapper>
    </Wrapper>
}