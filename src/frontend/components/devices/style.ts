import styled from 'styled-components';
import { AiOutlineEye } from 'react-icons/ai';

export const DevicesContainer = styled.div`
    display: flex;
    height: 100%;
`;

export const Device = styled.div`
    font-size: 1.6rem;
`;

export const EyeIcon = styled(AiOutlineEye)`
  fill: ${props => props.theme.colors.primary};
  width: 2rem;
   height: 2rem;
   cursor: pointer;
    transition: all .2s;

   &:hover {
    transform: scale(1.1);
   }
`;
