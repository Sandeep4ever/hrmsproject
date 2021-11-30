import React,{useState} from 'react';
import styled from 'styled-components';
import  '.././index.css';



const Popup = ({onhandleClose}) => {

const [data, setData] = useState();
const optionvalue =(e)=>{
  setData(e.target.value);
}
const datafind=(e)=>{
  e.preventDefault();
  console.log('optionvalue: ',data);
  onhandleClose();
}


  return (
    <>
     <Popupoverlay>
      <PopupContainer>
        <Crossbtn>
          <img onClick={onhandleClose} src="./images/close.svg" alt="" />
        </Crossbtn>
        <Team>
          Assign to team member
        </Team>
        <Selector>
    <form  onSubmit={datafind}>
  <label htmlFor="member">Select member</label>
   <br />
  <select   onChange={(e)=> optionvalue(e)}  name="team" >
    <option value="Tech">Select....</option>
    <option value="amogh">amogh</option>
    <option value="Sandeep">Sandeep</option>
    <option value="Himanshu">Himanshu</option>
  </select>
  <br />
  <button type='submit'>Create</button>
</form>
       
    
        </Selector>

      </PopupContainer>
    </Popupoverlay>  
    </>
  ) 
  }

export default Popup

const Popupoverlay=styled.div`
background-color: rgba(0,0,0,0.2);

width: 100%;
height: 100%;
position: absolute;
top: 0;
bottom: 0;
left: 0;
right: 0;
display: flex;
align-items: center;
justify-content:center;



`

const PopupContainer =styled.div`
width: 548px;
height: 277px;
background: #FFFFFF 0% 0% no-repeat padding-box;
box-shadow: 0px 3px 6px #00000029;
border-radius: 6px;

position: relative;
  transition: all 5s ease-in-out;

`
const Crossbtn =styled.div`
width:12.31px;
height:12.31px;
color:#020202;
float: right;
padding-top:16px;
padding-right:30px;
cursor: pointer;



`
const Team =styled.div`
/* width:199px; */
height:23px;
/* font: normal normal medium 16px/15px Poppins; */
font-family: 'Poppins', sans-serif;
font: normal normal medium 16px/15px Poppins;
letter-spacing: 0.15px;
/* letter-spacing: 0.15px; */
color: #000000;
font-size: 16px;
font-weight:bold;
padding-left: 53px;
padding-top: 25px;
opacity: 0.8;

`

const Selector =styled.div` 

form{
  padding-left: 53px;
  padding-top:40px;

  label{
font-family: 'Poppins', sans-serif;
opacity: 0.8;

letter-spacing: 0.1px;
font-size: 11px;
color: #000000
  }
  select{
   width:447px;
   height:48px;
   background: #0000000B 0% 0% no-repeat padding-box;
border-radius: 4px;
opacity: 1;
margin-top: 9px;
cursor: pointer;
opacity: 0.6;



  }
  button{
     width:302px;
     height:49px;
     margin-top: 49px;
     margin-left:70px;
     border: 2px solid #767676;
border-radius: 4px;
font: normal normal medium 13px/20px Poppins;
font-family: 'Poppins', sans-serif;
letter-spacing: 0px;
color: #414141;
opacity: 1;
cursor: pointer;
background-color: #ffffff;

  }
}

`
