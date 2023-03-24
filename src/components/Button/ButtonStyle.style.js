import styled from 'styled-components';
import StyledButton from './StyledButton';

export const MyButton = styled.button`
  border: 1px solid ${props => props.border};
  font-size: 18px;
  text-transform: capitalize;
  padding: 8px 16px;
  cursor: pointer;
  color: ${props => props.color};
  background-color: ${(props) => props.backgroundColor};
  &:hover{
    background-color: transparent;
    color: ${(props) => props.backgroundColor};

    & p{
      font-weight: 700;
    }
  }
`;

export const DynamicButton = styled(StyledButton)`
  border: 1px solid ${props => props.border};
  font-size: 18px;
  text-transform: capitalize;
  padding: 8px 16px;
  cursor: pointer;
  color: ${props => props.color};
  background-color: ${(props) => props.backgroundColor};
  &:hover{
    background-color: transparent;
    color: ${(props) => props.backgroundColor};

    & p{
      font-weight: 700;
    }
  }

  @media screen and (max-width: 767px) {
    color: green;
  }
`;

export const ButtonLabel = styled.p`
  font-size: 22px;
  text-transform: uppercase;
`;