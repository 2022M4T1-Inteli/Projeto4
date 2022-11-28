import styled from 'styled-components'
import { AiOutlineEye } from 'react-icons/ai'
import { CiTrash } from 'react-icons/ci'
import { TfiPencil } from 'react-icons/tfi'
import { CgNametag } from 'react-icons/cg'

export const DevicesContainer = styled.div`
    display: flex;
    height: 100%;
`

export const Device = styled.div`
    font-size: 1.6rem;
`

export const EyeIcon = styled(AiOutlineEye)`
    fill: ${props => props.theme.colors.primary};
    width: 2rem;
    height: 2rem;
    margin-right: 1.5rem;
    cursor: pointer;
    transition: all 0.2s;

    &:hover {
        transform: scale(1.1);
    }
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

export const Edit = styled(TfiPencil)`
    fill: #f5ce42;
    width: 2rem;
    height: 2rem;
    cursor: pointer;
    transition: all 0.2s;

    &:hover {
        transform: scale(1.1);
    }
`

export const EditName = styled(CgNametag)`
    fill: black;
    width: 2rem;
    height: 2rem;
    cursor: pointer;
    transition: all 0.2s;
    margin-right: 1rem;

    &:hover {
        transform: scale(1.1);
    }
`

export const Form = styled.form`
    display: flex;
    grid-gap: 2rem;
    align-items: flex-end;

    & > div {
        flex: 1 1 70%;
    }

    & > button {
        flex: 0 1 30%;
    }
`
