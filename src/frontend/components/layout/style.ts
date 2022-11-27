import styled from 'styled-components'

export const PageContainer = styled.div`
    min-height: 100vh;
    display: flex;
    padding: 4rem;
    grid-gap: 4rem;
    position: relative;
`

export const Container = styled.div`
    flex: 1 1;
    position: absolute;
    left: 8vw;
    width: calc(100vw - 8vw - 6rem)
`
