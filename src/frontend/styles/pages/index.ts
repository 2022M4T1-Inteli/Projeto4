import styled from 'styled-components'

export const PageContainer = styled.div`
    display: flex;
    grid-gap: 4rem;
    min-height: 100vh;
`

export const Left = styled.div`
    flex: 0 0 50%;
    background-color: ${props => props.theme.colors.primaryDark};
`

export const Right = styled.div`
    flex: 1;
`
