import styled, { css } from 'styled-components'

const Scroll = css`
    padding-right: 3rem;

    /* width */
    ::-webkit-scrollbar {
        width: 3px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
        box-shadow: inset 0 0 0.5rem grey;
        border-radius: 1rem;
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
        background: ${props => props.theme.colors.primaryLight};
        border-radius: 1rem;
    }
`

interface ContainerProps {
    noMinHeight?: boolean
    noMaxHeight?: boolean
}

export const Container = styled.div<ContainerProps>`
    padding: 2rem;
    box-shadow: 0px 4px 25px 10px rgba(204, 204, 204, 0.4);
    border-radius: 1rem;
    display: flex;
    flex-direction: column;

    overflow: auto;

    ${props =>
        props.noMinHeight
            ? `min-height: auto;`
            : `min-height: calc(50vh - 5rem);`}
${props =>
        props.noMaxHeight
            ? `max-height: auto;`
            : `max-height: 50vh;`}


    ${Scroll}
`

interface TitleProps {
    titleMarginBottom?: boolean
}

export const Title = styled.h4<TitleProps>`
    font-size: 2rem;
    font-weight: 400;
    color: ${props => props.theme.colors.greyDark1};

    ${props =>
        props.titleMarginBottom &&
        css`
            margin-bottom: 2rem;
        `}
`

export const Content = styled.div`
    font-size: 1.4rem;
    height: 100%;
`
