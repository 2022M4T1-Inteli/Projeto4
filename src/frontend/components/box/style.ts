import styled from 'styled-components'

export const Container = styled.div`
    padding: 2rem;
    box-shadow: 0px 4px 25px 10px rgba(204, 204, 204, 0.4);
    border-radius: 1rem;
`

export const Title = styled.h4`
    font-size: 2rem;
    font-weight: 400;
    color: ${props => props.theme.colors.greyDark1};
    margin-bottom: 2rem;
`

export const Content = styled.div`
    font-size: 1.4rem;
`
