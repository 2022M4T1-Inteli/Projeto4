import styled from 'styled-components'

export const Button = styled.div`
    border: none;
    outline: none;

    width: 100%;
    text-align: center;
    font-size: 1.6rem;
    padding: 1.4rem 0;
    cursor: pointer;
    border-radius: ${props => props.theme.sizes.borderRadius};
    transition: all 0.2s;

    &:hover {
        transform: translateY(-0.1rem);
    }
`

export const LoginBtn = styled(Button)`
    background: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.white};
`
