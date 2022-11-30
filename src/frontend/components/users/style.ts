import styled from 'styled-components'
import { CiTrash } from 'react-icons/ci'

export const UsersContainer = styled.div`
    display: flex;
    height: 90%;
`

export const Trash = styled(CiTrash)`
    fill: red;
    width: 2rem;
    height: 2rem;
    cursor: pointer;
    transition: all 0.2s;

    &:hover {
        transform: scale(1.1);
    }
`

export const BtnContainer = styled.div`
    display: flex;
    justify-content: flex-end;
`
