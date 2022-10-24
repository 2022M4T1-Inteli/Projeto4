import styled from 'styled-components'

export const PageContainer = styled.div`
    display: flex;

    min-height: 100vh;
`

export const Left = styled.div`
    flex: 0 1 50%;
    max-width: 50%;
    background-color: ${props => props.theme.colors.primaryDark};
`

export const Right = styled.div`
    flex: 1 0 50%;
`
