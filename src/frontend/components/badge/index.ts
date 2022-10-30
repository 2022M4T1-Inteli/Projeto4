import styled from 'styled-components'

export const Badge = styled.div`
    padding: 1.4rem;
    background-color: ${props => props.theme.colors.primary};
    border-radius: 1rem;
    display: inline-block;
    font-size: 1.4rem;
    font-weight: 500;
    color: ${props => props.theme.colors.white};
`
