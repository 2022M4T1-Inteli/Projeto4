import styled from 'styled-components'

export const Title = styled.h2`
    font-size: 3.4rem;
    margin-bottom: 2rem;
    font-weight: 300;
    color: ${props => props.theme.colors.greyDark1};
`

export const Container = styled.div`
    height: calc(100vh - 8rem - 3.4rem - 2.8rem);
    display: grid;
    grid-template-columns: repeat(3, 1fr) 30%;
    grid-template-rows: repeat(4, 1fr);
    grid-gap: 2rem;
    margin-bottom: 4rem;
`

export const BatteryBoxContainer = styled.div`
    width: 7.2rem;
    height: 7.2rem;
    margin: 0 auto;
`

export const PlaySoundContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 80%;
`

export const LastLocationContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 80%;

`

export const LocationContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    grid-gap: 1rem;
    margin-top: 2rem;
    font-size: 1.6rem;
    color: ${props => props.theme.colors.greyDark1};

    svg {
        width: 4rem;
        height: 4rem;
        fill: ${props => props.theme.colors.primary};
    }
`

export const NoBatteryInfo = styled.p`
    font-size: 1.8rem;
    text-align: center;
`
