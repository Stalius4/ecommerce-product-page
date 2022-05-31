import styled from 'styled-components';



const Text = ()  => {




    return(
<TextFlex>
        <OrangeTitle>SNEAKER COMPANY</OrangeTitle>
  
        <BlackTitle>Fall Limited Edition Sneakers</BlackTitle>
      
       <Para>These low-profile sneakers are your perfect casual wear companion. Featuring a 
        durable rubber outer sole, they’ll withstand everything the weather can offer.</Para> 
      
        $125.00
        50%
        $250.00
      
        0
        Add to cart
        
        </TextFlex>
    )
}

export default Text

const TextFlex = styled.div`

margin-top:180px;
width:430px;

`
const OrangeTitle = styled.div`
color: orange;
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
font-weight: 400;
font-size: 16px;
font-family: 'Kumbh Sans', sans-serif;
opacity: 0.60;

`