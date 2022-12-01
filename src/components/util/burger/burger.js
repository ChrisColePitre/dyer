import React from 'react';
import { StyledBurger } from './burger.style';
import { bool, func } from 'prop-types';

//this and menu built following instructions on https://css-tricks.com/hamburger-menu-with-a-side-of-react-hooks-and-styled-components/
const Burger = ({open,setOpen}) => {
  return (
    <StyledBurger open={open} onClick={() => setOpen(!open)}>
      <div />
      <div />
      <div />
    </StyledBurger>
  )
}
//Wat dis? 
Burger.propTypes = {
  open: bool.isRequired,
  setOpen: func.isRequired,
};

export default Burger;