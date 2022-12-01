import styled from 'styled-components';
// background: ${({  open }) => open ? black : theme.primaryLight}; took out, could use if I did theme right
export const StyledBurger = styled.button`
  position: absolute;
  top: 1%;
  left: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 1.5rem;
  height: 1.5rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;
  
  &:focus {
    outline: none;
  }
  
  div {
    width: 2rem;
    height: 0.2rem;
    background: black;
    border-radius: 10px;
    transition: all 0.1s linear;
    position: relative;
    transform-origin: 5px;

    :first-child {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }

    :nth-child(2) {
      opacity: ${({ open }) => open ? '0' : '1'};
      transform: ${({ open }) => open ? 'translateX(5px)' : 'translateX(0)'};
    }

    :nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`;