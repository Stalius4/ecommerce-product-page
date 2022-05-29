import styled from 'styled-components';
import logo from "../images/logo.svg";
import cart from "../images/icon-cart.svg"
import avatar from "../images/image-avatar.png"
import React,  {useState}from 'react';

const NavBar = () => {

    const [changeClass, setChangeClass]= useState(true)

    return(
    <div>
        <NavFlex>
            <Logo src={logo} alt="Logo" />
            <NavList>
                <NavItem width="85px">Collections</NavItem>
                <NavItem width="37px">Men</NavItem>
                <NavItem width="62px">Women</NavItem>
                <NavItem width="52px">About</NavItem>
                <NavItem width="62px">Contact</NavItem>
            </NavList>
            <Cart src={cart} alt="Logo" onClick={() =>setChangeClass(!changeClass)}/>
            <Avatar src={avatar} alt="Logo" />
        </NavFlex>
        <div className={changeClass ? "basket": "basketnone"}>
            <CartTop>Cart</CartTop>
            <CartBottom>Your cart is empty.</CartBottom> 
        </div>
            
    </div>
    )
}

export default NavBar

const NavFlex = styled.div`
align-items:baseline;
margin:auto;
margin-top: 2%;
display: flex;
padding-bottom: 32px;
border-bottom: #9495965f 1px solid;
width: 70vw;
gap: 30px;


`
const NavList = styled.ul`
    display: flex;
    gap:30px;
    flex-grow: 4;
  
`

    
    
  
  const NavItem = styled.li`
  color: hsl(0, 0%, 0%);
  opacity:0.75;
  font-weight: 400;
  font-family: 'Kumbh Sans', sans-serif;
font-size: 16px;
list-style-type: none;
cursor: pointer;
&:hover{
    opacity:1;


    &::after{
        content: "";
        border-bottom: solid 4px hsl(26, 100%, 55%);
    position: absolute;
    display: flex;
    height: 40px;
    width:  ${(props) => props.width};

  
    }
}

  `


  const Logo = styled.img`
  height:30px;
  
  `
const Cart = styled.img`
height:22px;
padding-bottom: 8px;
cursor: pointer;
    
`
const Avatar = styled.img`
cursor: pointer;
height:50px;
width: auto;
padding-top: 2px;
border: solid white 3px;
&:hover{
    border: solid hsl(26, 100%, 55%) 3px;
    border-radius: 70%;
}
`
const CartTop = styled.div`
border-bottom: #9495965f 1px solid;

font-weight: 700;
font-family: 'Kumbh Sans', sans-serif;
font-size: 16px;
padding: 25px;

`
const CartBottom = styled.div`
display: flex;
  justify-content: center;
  font-weight: 700;
font-family: 'Kumbh Sans', sans-serif;
font-size: 16px;
  align-items: center;
  width: 100%;
  height: 50%;
  opacity: 0.55;
`