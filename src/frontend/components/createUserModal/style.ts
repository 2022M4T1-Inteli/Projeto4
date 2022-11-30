import styled from 'styled-components';
export const Form = styled.form`
    display: flex;
    grid-gap: 1.6rem;
    flex-direction: column;

    & > div {
        flex: 1 1 70%;
    }

    & > button {
        flex: 0 1 30%;
    }
`
