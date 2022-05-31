import styled from 'styled-components';
import logo from "../images/logo.svg";
import cart from "../images/icon-cart.svg"
import avatar from "../images/image-avatar.png"
import React,  {useState}from 'react';
import image1 from "../images/image-product-1-thumbnail.jpg"
import bin from "../images/icon-delete.svg"
const NavBar = (props) => {

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
        <div className={changeClass ? "basketnone": "basket"}>
            <CartTop>Cart</CartTop>
            {(props.cartQuantity ===0 ?  <CartBottom>Your cart is empty.</CartBottom>  :      <BasketGrid>
                <ShoeImage src={image1} alt="image1"></ShoeImage>
                <Title>Fall Limited Edition Sneakers</Title>
                <ShoePrice>$125.00 x {props.cartQuantity} ${props.cartQuantity * 125}.00</ShoePrice>
                <BinIcon  onClick={() =>props.setCartQuantity(0)} src={bin} alt="image1"></BinIcon>
            </BasketGrid>)}
           
       
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

const BasketGrid = styled.div`
display: grid;
margin: 20px 16px;
grid-template-columns: 60px 160px 20x ;
  grid-template-rows: 1fr 1fr ;
  grid-template-areas:

    "content1 content2 content3 "
    "content1 content4 content3 ";
  grid-gap: 0.2rem;
`

const ShoeImage = styled.img`
height: 50px;
grid-area:content1;
justify-self: center;
align-self: center;
border-radius: 5px;
`

const Title = styled.div`
font-weight: 400;
font-size: 16px;
font-family: 'Kumbh Sans', sans-serif;
opacity: 0.60;
grid-area:content2;
justify-self: start;
align-self: center;
`
const ShoePrice = styled.div`
font-weight: 400;
font-size: 16px;
font-family: 'Kumbh Sans', sans-serif;
opacity: 0.60;
grid-area:content4;
justify-self: start;
align-self: center;
`
const BinIcon = styled.img`
justify-self: center;
align-self: center;
grid-area:content3;
`