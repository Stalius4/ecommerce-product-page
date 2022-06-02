import styled from 'styled-components';
import minus from "../images/icon-minus.svg"
import plus from "../images/icon-plus.svg"
import React,  {useState}from 'react';
import cart from "../images/icon-cart.svg"
const Text = (props)  => {



const getQuantity = ()=> {

    if (props.count > 0){
        props.setCount( props.count -1)
    }
}
const submit = ()=> {

    props.setCartQuantity(props.count) 
    console.log(props.CartQuantity)
}

return(
<TextFlex>
        <OrangeTitle>SNEAKER COMPANY</OrangeTitle>
  
        <BlackTitle>Fall Limited Edition Sneakers</BlackTitle>
      
       <Para>These low-profile sneakers are your perfect casual wear companion. Featuring a 
        durable rubber outer sole, they’ll withstand everything the weather can offer.</Para> 
      <PriceFlex>
        <Price>$125.00</Price><Discount> 50%</Discount>
        </PriceFlex>
        <OldPrice>$250.00</OldPrice>
        <QuantityFlex>
      <Minus onClick={() =>getQuantity()}></Minus>
       <Quantity>{props.count}</Quantity> 
      <Plus onClick={() =>props.setCount( props.count +1)}> </Plus> 
       <Add onClick={() =>submit()}>Add to cart</Add>
      </QuantityFlex>
     
        
        </TextFlex>
    )
}

export default Text

const TextFlex = styled.div`

margin-top:180px;
width:430px;

`
const OrangeTitle = styled.div`
color: hsl(26, 100%, 55%);
font-weight: 600;
font-size: 16px;
font-family: 'Kumbh Sans', sans-serif;
`

const BlackTitle= styled.h1`
font-weight: 600;
font-size: 32px;
font-family: 'Kumbh Sans', sans-serif;
`

const Para = styled.p`
font-weight: 700;
font-size: 16px;
font-family: 'Kumbh Sans', sans-serif;
opacity: 0.40;

`

const Price = styled.h1`
font-family: 'Kumbh Sans', sans-serif;
font-weight: 700;
font-size: 28px;
`

const PriceFlex =styled.div`
display: flex;
gap:15px;
align-items:center;
`

const Discount = styled.div`
color: hsl(26, 100%, 55%);
font-family: 'Kumbh Sans', sans-serif;
font-weight: 700;
font-size: 16px;
background-color: hsl(25, 100%, 94%);
border-radius: 5px;
padding: 2px 8px 2px 8px;
`

const OldPrice = styled.div`
font-weight: 700;
font-size: 18px;
font-family: 'Kumbh Sans', sans-serif;
opacity: 0.4;
text-decoration: line-through;


`
const Minus= styled.button`
border: none;
background-image: url(${minus});
background-repeat: no-repeat;
background-position: center;
width: 50px;
height: 60px;
border-radius: 8px 0px 0px 8px;
background-color: hsl(223, 64%, 98%);
cursor: pointer;
`

const Plus= styled.button`
border: none;
background-image: url(${plus});
background-repeat: no-repeat;
background-position: center;
width: 50px;
height: 60px;
border-radius: 0px 8px 8px 0px;
background-color: hsl(223, 64%, 98%);
cursor: pointer;
`

const QuantityFlex= styled.div`
display: flex;
margin-top: 35px;
`
const Quantity= styled.div`
background-color: hsl(223, 64%, 98%);
width: 50px;
height: 60px;
display: flex;
align-items: center;
justify-content: center;
font-weight: 700;
font-size: 18px;
font-family: 'Kumbh Sans', sans-serif;

`

const Add = styled.button`
background-color:orange;
height: 60px;
width: 300px;
border: none;
border-radius: 10px;
font-weight: 700;
font-size: 18px;
font-family: 'Kumbh Sans', sans-serif;
color:white;
margin-left: 15px;
background-image: url(${cart}) ;

background-repeat: no-repeat;
background-position: 55px;
cursor: pointer;

`