import styled from 'styled-components'

export const Container = styled.div`
    display: grid;
    grid-gap: 1rem;
`

interface ItemProps {
    padding: boolean
}

export const Item = styled.div<ItemProps>`
    display: flex;
    grid-gap: 2rem;
    align-items: center;
    font-size: 1.6rem;
    justify-content: space-between;
    color: ${props => props.theme.colors.greyDark1};
    text-align: center;

    ${props => props.padding && `padding: 0 2rem;`}


    p {
        font-weight: 600;
    }
`
