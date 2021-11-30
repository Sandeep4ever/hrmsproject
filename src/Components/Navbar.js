import React from 'react'
import styled from 'styled-components';

const Navbar = () => {
  return (
   <>
   <NavbarContainer>
     <Logo>
       <img src="./images/verzeologo.svg" alt="verzeologo" />
     </Logo>
     <Text>
        <Circle>A</Circle>
        <p>Anmol agarwal</p>
        <span><img src="./images/downarrow.svg" alt="" /></span>

     </Text>


   </NavbarContainer>

   </>
  )
}

export default Navbar
  
const NavbarContainer=styled.div`
width: 1366px;
height: 62px;
display: flex;
align-items: center;
justify-content:space-between;
background: #FFFFFF 0% 0% no-repeat padding-box;
box-shadow: 0px 3px 6px #00000029;
opacity: 1;
/* background-color: blueviolet; */
padding-left: 42px;
padding-right: 42px;

`
const Logo =styled.div`
width: 70.56px;
height: 20.93px;

`
const Text =styled.div`
display: flex;
/* background-color: red; */

span{
  width: 20px;
  height: 20px;
  /* background-color: skyblue; */
margin-top:7px ;


  img{
    
 /* background-color: red; */
cursor: pointer;

   }
 }
 p{
   width: 93px;
   height: 17px;
   font-size: 12px;
  font: normal normal medium 12px/18px Poppins;
font-family: 'Poppins', sans-serif;

letter-spacing: 0px;
color: #0B1838;
margin-left:11px;
margin-right: 9px;
margin-top: 7px;
cursor: pointer;
display: flex;
align-items: center;
justify-content: center;

 } 

`
const Circle =styled.div`
width: 30px;
height: 29px;
background: #DE3DA0 0% 0% no-repeat padding-box;
border-radius: 50%;
display: flex;
align-items: center;
justify-content: center;
cursor: pointer;


`


