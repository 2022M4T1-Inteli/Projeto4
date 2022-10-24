import styled from 'styled-components'

export const Title = styled.h1`
    font-size: 4.5rem;
    color: ${props => props.theme.colors.greyDark1};
    font-weight: 700;
    text-align: center;

    background: -webkit-linear-gradient(#00b4e3,#00588E);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`

export const Subtitle = styled.h3`
    font-size: 1.8rem;
    color: ${props => props.theme.colors.greyDark2};
    font-weight: 500;
    text-align: center;
`
