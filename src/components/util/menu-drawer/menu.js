import React from 'react';
import { bool } from 'prop-types';
import { StyledMenu } from './menu.style';

const Menu = ({open}) => {
  return (
    <StyledMenu open={open} >
      {/* <a href="/">
        <span role="img" aria-label="about us">&#x1f481;&#x1f3fb;&#x200d;&#x2642;&#xfe0f;</span>
        About us
      </a>
      <a href="/">
        <span role="img" aria-label="price">&#x1f4b8;</span>
        Pricing
        </a>
      <a href="/">
        <span role="img" aria-label="contact">&#x1f4e9;</span>
        Contact
        </a> */}
        <a href="index.html#weddingInfo" className="nav-element">
        WEDDING INFO
        </a>
        <a href="" className="nav-element">
        TRAVELING INFO
        </a>
        <a href="" className="nav-element">
        ENGAGEMENT PHOTOS
        </a>
        <a href="" className="nav-element">
        FAQ
        </a>
    </StyledMenu>
  )
}
//Why set strict prop type? would it break without this? 
Menu.propTypes = {
    open: bool.isRequired,
  }
export default Menu;