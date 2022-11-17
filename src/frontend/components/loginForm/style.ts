import styled from 'styled-components'

export const Container = styled.div`
    position: relative;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Form = styled.form`
    display: flex;
    grid-gap: 2rem;
    flex-direction: column;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 60%;
`
