import styled from 'styled-components'

export const Wrapper = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex-wrap: nowrap;
    --border: 1px solid yellow;

    header {
        --border: 1px solid red;
        padding: 12px;
        display: flex;
        justify-content: space-between;
        align-items: center;

        --background-color: black;

        svg {
            --border: 1px solid red;
            width: 32px;
            height: 32px;
            path {
                fill: white;
            }
        }
    }

    h1 {
        margin: 0;
        font-size: 24px;
        --padding: 24px;
        --background-color: #04233c;
    }
`

export const ButtonsWrapper = styled.div`
    display: flex;
    padding: 12px;
    width: 100%;
    max-width: 500px;
    align-self: center;
    --border: 1px solid yellow;

    button {
        border-radius: 0;
        padding: 24px 12px 24px 12px;
        width: 50%;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        font-weight: 600;
        font-size: 24px;

        svg {
            display: block;
            width: 42px;
            path {
                fill: white;
            }
        }

        :first-child {
            margin-right: 6px;
        }

        :last-child {
            margin-left: 6px;
        }
    }
`