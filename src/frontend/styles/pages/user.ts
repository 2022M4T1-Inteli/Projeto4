import styled from 'styled-components'

interface Props {
    rows?: number
}

export const Container = styled.div<Props>`
    height: calc(100vh - 8rem);
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 2rem;
    margin-bottom: 4rem;
    grid-template-rows: 1fr;
`
