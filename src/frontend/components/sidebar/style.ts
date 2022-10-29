import styled from 'styled-components'

export const Container = styled.div`
    flex: 0 0 7.2rem;
    background: ${props => props.theme.colors.primary};
    min-height: 100%;
    border-radius: 1rem;
    padding: 3rem 0;

    display: flex;
    flex-direction: column;
    /* align-items: center; */
    grid-gap: 2rem;

    text-align: center;
    /* vertical-align: center; */

    box-shadow: 0px 0px 25px 4px #c0c0cb;
`
export const LogoContainer = styled.div`
    font-size: 2rem;
    color: ${props => props.theme.colors.white};
    font-weight: 700;
    margin-bottom: 4rem;
`

interface ItemProps {
    active?: boolean
}

export const Item = styled.div<ItemProps>`
    font-size: 2.6rem;
    color: ${props => props.theme.colors.white};
    cursor: pointer;

    display: flex;
    padding: 0.5rem 0;
    align-items: center;
    justify-content: center;

    svg {
        transition: all 0.2s;

        ${props =>
        props.active &&
        `

            margin-left: -.6rem;
    `}
    }

    svg:hover {
        transform: scale(1.1);
    }

    ${props =>
        props.active &&
        `

            border-left: .4rem solid ${props.theme.colors.white};
    `}
`

