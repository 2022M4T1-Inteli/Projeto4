import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    grid-gap: 1rem;

    div {
        display: flex;
        align-items: center;
        justify-content: space-around;
    }

    p {
        font-size: 1.5rem;
        font-weight: 600;
        color: ${props => props.theme.colors.greyDark1};
    }
`;
