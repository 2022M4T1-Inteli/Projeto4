import styled from 'styled-components'

export const Badge = styled.div`
    padding: 1.4rem;
    background-color: ${props => props.theme.colors.primary};
    border-radius: 1rem;
    display: inline-block;
    font-size: 1.4rem;
    font-weight: 500;
    color: ${props => props.theme.colors.white};
    text-align: center;
`

export const InlineBadge = styled.div`
    padding: 0.6rem 1.4rem;
    border-radius: ${props => props.theme.sizes.borderRadius};
    display: inline-block;
    font-size: 1.2rem;
`

export const BlueInlineBadge = styled(InlineBadge)`
    color: ${props => props.theme.colors.white};
    background: ${props => props.theme.colors.primary};
`

export const GreenInlineBadge = styled(InlineBadge)`
    color: ${props => props.theme.colors.white};
    background: green;
`
