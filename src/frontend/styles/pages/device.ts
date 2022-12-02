import styled from 'styled-components'

export const Container = styled.div`
    height: calc(100vh - 8rem);
    display: grid;
    grid-template-columns: repeat(3, 1fr) 30%;
    grid-template-rows: repeat(4, 1fr);
    grid-gap: 2rem;
`

export const BatteryBoxContainer = styled.div`
    width: 10rem;
    height: 10rem;
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
    grid-gap: 2rem;
    font-size: 2rem;
    margin-top: 2rem;

    svg {
        width: 4rem;
        height: 4rem;
        fill: ${props => props.theme.colors.primary};
    }
`

export const NoBatteryInfo = styled.p`
  font-size: 1.8rem;
  text-align: center;
`;
