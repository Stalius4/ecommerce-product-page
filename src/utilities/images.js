import styled from "styled-components"
import React,  {useState}from 'react';
import imageSmall1 from "../images/image-product-1-thumbnail.jpg"
import imageSmall2 from "../images/image-product-2-thumbnail.jpg"
import imageSmall3 from "../images/image-product-3-thumbnail.jpg"
import imageSmall4 from "../images/image-product-4-thumbnail.jpg"
import image1 from "../images/image-product-1.jpg"
import image2 from "../images/image-product-2.jpg"
import image3 from "../images/image-product-3.jpg"
import image4 from "../images/image-product-4.jpg"
import '../App.css';

const Gallery = () => {

const [number, setNumber] = useState (1)


    return(<ImageGallery>
        <ImageBig src={ number === 1 ? image1: number === 2 ? image2 : number ===3 ? image3 :image4 } alt="Image1" />
    <ImageFlex>
        <ImageSmall  className="imagess" src={imageSmall1} alt="image Small" onClick={() =>(setNumber(1))} />
        <ImageSmall src={imageSmall2} alt="image Small" onClick={() =>(setNumber(2))}/>
        <ImageSmall src={imageSmall3} alt="image Small" onClick={() =>(setNumber(3))}/>
        <ImageSmall src={imageSmall4} alt="image Small" onClick={() =>(setNumber(4))}/>

    </ImageFlex> 
    </ImageGallery> )
     
}

export default Gallery;
const ImageGallery = styled.div`
margin:50px 0px 0px 0px;
`

const ImageSmall = styled.img`
box-sizing: border-box;
border-radius: 15px;
height: 100px;
width: 100px;
border:solid white 3px;
&:active{
    border:solid hsl(26, 100%, 55%) 3px
}
&:hover{
   background-image: rgba(255, 255, 255, .8);
}



`

const ImageFlex = styled.div`
display:flex;
gap: 30px;
`

const ImageBig  = styled.img`
height:490px;
border-radius: 15px;
margin: 30px 0px;
`



// const Shoe = styled.div`
// box-sizing: border-box;
// background-image:url(${imageSmall1});
// background-size: 100px;
// height: 97px;
// width: 97px;
// border-radius: 15px;
// border:solid white 3px;
// &:after{
//     content:"";
//     position: absolute;
//     background-image: rgba(255, 255, 255, .8);
//     background-size: 100px;
//     height: 100px;
//     width: 100px;
//     opacity:1;
//     border-radius: 15px;
//     z-index: -1;
//     }
// &:hover{
//    opacity: 0.55;
// }

// &:active{
    
//   filter: opacity(0.25);
//     border:solid hsl(26, 100%, 55%, 1) 3px ;
    
// }
// `