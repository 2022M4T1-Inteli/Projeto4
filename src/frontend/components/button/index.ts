import styled from 'styled-components'

export const Button = styled.button`
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

export const PlaySoundButton = styled(Button)`
    background: linear-gradient(
        to right bottom,
        ${props => props.theme.colors.primary},
        ${props => props.theme.colors.greyDark1}
    );
    color: ${props => props.theme.colors.primary};
    width: 14rem;
    padding: 1.5rem 0;
    transition: all 0.4s;
    font-weight: 700;
    color: ${props => props.theme.colors.white};
    display: block;
    text-align: center;
    box-shadow: 1rem 1.5rem 2.4rem rgba(0,0,0,.2);

    &:hover {
        transform: scale(1.03);
    }
`
