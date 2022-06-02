import styled from "styled-components"
import './App.css';
import NavBar  from "./utilities/navBar";
import React,  {useState}from 'react';
import {FullGallery, Gallery}  from "./utilities/images";
import Text  from "./utilities/text";



function App() {
  const [count, setCount] = useState (0)
 const [cartQuantity, setCartQuantity] = useState(0)
 const [toggle, setToggle] = useState (true)
  return (
    <div>
 {toggle ? "" :<FullGallery toggle = {toggle} setToggle={setToggle}></FullGallery>}
<NavBar count={count} cartQuantity={cartQuantity} setCartQuantity={setCartQuantity}></NavBar> 
<TextGalleryFlex>
  <Gallery toggle = {toggle} setToggle={setToggle}></Gallery>
  <Text count={count} setCount={setCount} setCartQuantity={setCartQuantity} cartQuantity={cartQuantity}></Text>
</TextGalleryFlex>

    </div>
  );
}

export default App;

const TextGalleryFlex = styled.div`

display:flex;
justify-content:center;
gap: 100px;
`
