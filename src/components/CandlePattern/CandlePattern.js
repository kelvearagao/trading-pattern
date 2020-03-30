import React from 'react'
import StockChart from 'components/StockChart'
import Button from 'react-bootstrap/Button'
import { Wrapper, ButtonsWrapper } from './CandlePattern.style'

export default () => {
    return <Wrapper style={{ height: window.innerHeight}}>
        <h1>Qual a tendência?</h1>
        
        <StockChart />
        
        <ButtonsWrapper>
            <Button size="lg" variant="success">Sobe</Button>
            <Button size="lg" variant="danger">Desce</Button>
        </ButtonsWrapper>
    </Wrapper>
}