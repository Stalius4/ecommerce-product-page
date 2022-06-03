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
import closeBtn from "../images/icon-close.svg"
import previousBtn from "../images/icon-previous.svg"
import nextBtn from "../images/icon-next.svg"
import '../App.css';

const Gallery = (props) => {

const [number, setNumber] = useState (1)


    return(
    <ImageGallery>
        <ImageBig src={ number === 1 ? image1: number === 2 ? image2 : number ===3 ? image3 :image4 } alt="Image1" onClick={() =>props.setToggle(!props.toggle)} />
        <ImageFlex>
            <ImageSmall src={imageSmall1} alt="image Small" onClick={() =>(setNumber(1))} />
            <ImageSmall src={imageSmall2} alt="image Small" onClick={() =>(setNumber(2))}/>
            <ImageSmall src={imageSmall3} alt="image Small" onClick={() =>(setNumber(3))}/>
            <ImageSmall src={imageSmall4} alt="image Small" onClick={() =>(setNumber(4))}/>
        </ImageFlex> 

   
    </ImageGallery> )
     
}

const FullGallery = (props) => {

    const [number, setNumber] = useState (1)


    const nextImage = () => {
        if (number === 1){
            setNumber(2)
        } else if (number === 2) {
            setNumber(3)
        }else if  (number === 3) {
            setNumber(4)
        }else if (number ===4) {
            setNumber(1)
        }
    }


    const previousImage = () => {
        if (number === 1){
            setNumber(4)
        } else if (number === 2) {
            setNumber(1)
        }else if  (number === 3) {
            setNumber(2)
        }else if (number ===4) {
            setNumber(3)
        }
    }

    return (
      <FullGall>
        <ImageGalleryFull>
            <CloseBtn onClick={() =>props.setToggle(!props.toggle)}></CloseBtn>
            <NextBtn onClick={() =>nextImage()}></NextBtn>
            <PreviousBtn onClick={() =>previousImage()}></PreviousBtn>
          <ImageBigGallery
            src={number === 1 ? image1: number === 2 ? image2: number === 3 ? image3 : image4}alt="Image1" />
          <ImageFlex>
            <ImageSmall
              className="imagess"
              src={imageSmall1}
              alt="image Small"
              onClick={() => setNumber(1)}
            />
            <ImageSmall
              src={imageSmall2}
              alt="image Small"
              onClick={() => setNumber(2)}
            />
            <ImageSmall
              src={imageSmall3}
              alt="image Small"
              onClick={() => setNumber(3)}
            />
            <ImageSmall
              src={imageSmall4}
              alt="image Small"
              onClick={() => setNumber(4)}
            />
          </ImageFlex>
        </ImageGalleryFull>
      </FullGall>
    );



}
 const CloseBtn = styled.div`
 filter: invert(24%) sepia(76%) saturate(6157%) hue-rotate(2deg) brightness(108%) contrast(106%);;
 width: 20px;
 height: 20px;
 background-image:url(${closeBtn});
 background-repeat: no-repeat;
 background-position: center;
margin-left: 470px;
margin-bottom: -15px;
cursor: pointer;
 `
const FullGall = styled.div`
position:absolute;
width: 100vw;
height: 100vh;
background-color: rgba(0, 0, 0, 0.951);
z-index: 1;

`
const NextBtn = styled.button`
position: relative;
position: absolute;
top: 247px;
left: 470px;
width: 35px;
height: 35px;
background-image:url(${nextBtn});
background-repeat: no-repeat;
background-position: center;
border-radius: 50%;
border: none;
cursor: pointer;
`
const PreviousBtn = styled.button`
border: none;
top: 250px;
left:-17px;
position: absolute;
width: 35px;
height: 35px;
background-image:url(${previousBtn});
background-repeat: no-repeat;
background-position: center;
border-radius: 50%;
cursor: pointer;

&:active{
    
}
`


export  {Gallery, FullGallery};


const ImageGalleryFull = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`
const ImageGallery = styled.div`
margin:50px 0px 0px 0px;
`

const ImageSmall = styled.img`
box-sizing: border-box;
border-radius: 15px;
height: 100px;
width: 100px;
border:solid white 3px;
cursor: pointer;
&:active{
    border:solid hsl(26, 100%, 55%) 3px
}
&:hover{
   opacity:0.55;
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
cursor: pointer;
`
const ImageBigGallery  = styled.img`
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