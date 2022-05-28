import styled from 'styled-components';
import logo from "../images/logo.svg"
const NavBar = () => {

    return(<NavBar>
        <img src={logo} alt="Logo" />

    <NavList>
        <NavItem>Collections</NavItem>
        <NavItem>Men</NavItem>
        <NavItem>Women</NavItem>
        <NavItem>About</NavItem>
        <NavItem>Contact</NavItem>
    </NavList>
        
        
    </NavBar>
        
        
    )
}


export default NavBar

const NavList = styled.ul`
    display: flex;
    gap:30px;

    
    `
  ;
  const NavItem = styled.li`
  color: hsl(0, 0%, 0%);
  opacity:0.75;
  font-weight: 400;
  font-family: 'Kumbh Sans', sans-serif;
font-size: 16px;
list-style-type: none;
cursor: pointer;

&:hover{
padding-bottom: 25px;
    border-bottom: 6px solid hsl(26, 100%, 55%);
    opacity:1;
}
  `