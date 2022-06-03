import styled from "styled-components";
import logo from "../images/logo.svg";
import cart from "../images/icon-cart.svg";
import avatar from "../images/image-avatar.png";
import React, { useState } from "react";
import image1 from "../images/image-product-1-thumbnail.jpg";
import bin from "../images/icon-delete.svg";
const NavBar = (props) => {
  const [changeClass, setChangeClass] = useState(true);

  return (
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
        <Cart onClick={() => setChangeClass(!changeClass)}>{(props.cartQuantity === 0 ? "" :<CartNr>{props.cartQuantity}</CartNr> )}</Cart>
        
          
        
        <Avatar src={avatar} alt="Logo" />
      </NavFlex>
      <div className={changeClass ? "basketnone" : "basket"}>
        <CartTop>Cart</CartTop>
        {props.cartQuantity === 0 ? (
          <CartBottom>Your cart is empty.</CartBottom>
        ) : (
          <BasketGrid>
            <ShoeImage src={image1} alt="image1"></ShoeImage>
            <Title>Fall Limited Edition Sneakers</Title>
            <ShoePrice>
              $125.00 x {props.cartQuantity}{" "}
              <b>${props.cartQuantity * 125}.00</b>{" "}
            </ShoePrice>
            <BinIcon
              onClick={() => props.setCartQuantity(0)}
              src={bin}
              alt="image1"
            ></BinIcon>
            <CheckoutBtn>Checkout</CheckoutBtn>
          </BasketGrid>
          
        )}
      </div>
    </div>
  );
};

export default NavBar;

const NavFlex = styled.div`
  align-items: baseline;
  margin: auto;

  display: flex;
  padding-bottom: 32px;
  border-bottom: #9495965f 1px solid;
  width: 70vw;
  gap: 30px;
`;
const NavList = styled.ul`
  display: flex;
  gap: 30px;
  flex-grow: 4;
`;

const NavItem = styled.li`
  color: hsl(0, 0%, 0%);
  opacity: 0.75;
  font-weight: 400;
  font-family: "Kumbh Sans", sans-serif;
  font-size: 16px;
  list-style-type: none;
  cursor: pointer;
  &:hover {
    opacity: 1;

    &::after {
      content: "";
      border-bottom: solid 4px hsl(26, 100%, 55%);
      position: absolute;
      display: flex;
      height: 40px;
      width: ${(props) => props.width};
    }
  }
`;

const Logo = styled.img`
  height: 30px;
`;
const Cart = styled.div`
background-image:url(${cart});
background-repeat: no-repeat;
  height: 22px;
  width: 22px;
  padding-bottom: 8px;
  cursor: pointer;
  display: flex;
  justify-content:flex-end;
  align-items:flex-start;
`;
const Avatar = styled.img`
  cursor: pointer;
  height: 50px;
  width: auto;
  padding-top: 2px;
  border: solid white 3px;
  &:hover {
    border: solid hsl(26, 100%, 55%) 3px;
    border-radius: 50%  ;
   
    
  }
`;
const CartTop = styled.div`
  border-bottom: #9495965f 1px solid;

  font-weight: 700;
  font-family: "Kumbh Sans", sans-serif;
  font-size: 16px;
  padding: 25px;
`;
const CartBottom = styled.div`
  display: flex;
  justify-content: center;
  font-weight: 700;
  font-family: "Kumbh Sans", sans-serif;
  font-size: 16px;
  align-items: center;
  width: 100%;
  height: 50%;
  opacity: 0.55;
`;

const BasketGrid = styled.div`
  display: grid;
  margin: 20px 16px;
  grid-template-columns: 60px 230px 20px;
  grid-template-rows: 1fr 1fr 2.5fr;
  grid-template-areas:
    "content1 content2 content3 "
    "content1 content4 content3 "
    "content5 content5 content5";
  grid-gap: 0.2rem;
`;

const ShoeImage = styled.img`
  height: 50px;
  grid-area: content1;
  justify-self: start;
  align-self: center;
  border-radius: 5px;
`;

const Title = styled.div`
  font-weight: 400;
  font-size: 16px;
  font-family: "Kumbh Sans", sans-serif;
  opacity: 0.6;
  grid-area: content2;
  justify-self: start;
  align-self: center;
`;
const ShoePrice = styled.div`
  font-weight: 400;
  font-size: 16px;
  font-family: "Kumbh Sans", sans-serif;
  opacity: 0.6;
  grid-area: content4;
  justify-self: start;
  align-self: center;
`;
const BinIcon = styled.img`
  justify-self: center;
  align-self: center;
  grid-area: content3;
`;

const CheckoutBtn = styled.button`
  font-weight: 400;
  font-family: "Kumbh Sans", sans-serif;
  font-size: 16px;
  grid-area: content5;
  justify-self: stretch;
  align-self: stretch;
  margin-top: 15px;
  border: none;
border-radius: 10px;
font-weight: 700;
font-size: 18px;
font-family: 'Kumbh Sans', sans-serif;
color:white;
background-color: hsl(26, 100%, 55%);
`;

const CartNr = styled.div`
width: 20px;
height: 12px;
background-color: hsl(26, 100%, 55%);
position:absolute;
border-radius: 15px 15px  15px 15px;
margin-top: -7px;
margin-right: -4px;
font-weight: 400;
font-size: 9px;
font-family: 'Kumbh Sans', sans-serif;
color:white;
text-align: center;

`