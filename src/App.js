import styled from "styled-components"
import './App.css';
import NavBar  from "./utilities/navBar";
import React,  {useState}from 'react';
import Gallery  from "./utilities/images";
import Text  from "./utilities/text";
function App() {

  return (
    <div>

<NavBar></NavBar> 
<TextGalleryFlex>
  <Gallery></Gallery>
  <Text></Text>
</TextGalleryFlex>
    </div>
  );
}

export default App;

const TextGalleryFlex = styled.div`

display:flex`
