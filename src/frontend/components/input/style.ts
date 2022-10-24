import styled from 'styled-components'

export const Input = styled.input`
    display: block;
    padding: 1.2rem 1rem;

    width: 100%;
    background: transparent;

    font-size: 1.6rem;
    color: ${props => props.theme.colors.greyDark1};

    border-radius: 3px;
    outline: none;
    border: 1px solid ${props => props.theme.colors.greyLight4};
    transition: all .4s;

    &:focus {
        border: 1px solid ${props => props.theme.colors.primary};

    }
`

export const Label = styled.label`
    font-size: 1.5rem;
    display: block;
    margin-bottom: 0.5rem;
    color: ${props => props.theme.colors.greyDark1};
    font-weight: 400;
`

export const Error = styled.span`
    display: block !important;
    color: red !important;
    margin-top: 1rem !important;
    font-size: 1.4rem !important;
`
