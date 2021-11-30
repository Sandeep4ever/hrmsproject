import React, { useState} from "react";
import styled from "styled-components";
import img from "./Images/Images";
import data from "./data";

const MainNavContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  overflow-y: hidden;
`;

const Logo = styled.header``;
const Contant = styled.section`
  height: 416px;
  margin-top: 57px;
  display: flex;
  flex-direction: column;
  div {
    display: flex;
    padding-bottom: 36px;
  }
  p {
    padding-left: 13px;
    color: white;
  }
`;
const LogoutSec = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  margin-top: 160px;
  div {
    display: flex;
    padding-top: 19px;
    p {
      color: #cacaca;
    }
  }
`;
const Line = styled.div``;
const Circleimg = styled.div`
  margin-top: 360px;
  img {
    margin-left: -20px;
  }
`;

const SidebarContainer = styled.div`
width: ${({closeData})=>closeData ? "338px" : "100px"};
display: flex;
flex-direction: column;
align-items: center;
padding-top: 30px;
background-color: #0c2342;
transition: width .3s;
`

const SideNavbar = ({closeData,setcloseData}) => {

  // const [showLogo, setShowLogo] = useState(true);

  return (
    <>
      <MainNavContainer>
        {
          <SidebarContainer closeData={closeData}>
            <Logo>
              <img src={closeData ? img.verzeo_new_logo:img.seclogo} alt="img" />
            </Logo>
            <Contant>
              {data.map((items) => {
                return (
                  <div>
                    <img src={items.img} alt="img" />
                    <p style={{display: `${closeData ? "inherit" : "none"}`}} >{items.title}</p>
                  </div>
                );
              })}
            </Contant>
            <LogoutSec>
              <Line>
                <img src={img.Line} alt="" />
              </Line>
              <div>
                <img src={img.logout} alt="" />
                <p>Logout</p>
              </div>
            </LogoutSec>
          </SidebarContainer>
        }

        <Circleimg>
          <img
            onClick={()=>setcloseData()}
            style={
              closeData === true
                ? { transform: "rotate(180deg)", transition: ".2s ease" }
                : { transition: ".2s ease" }
            }
            src={img.circle_arrow}
            alt="img"
          />
        </Circleimg>
      </MainNavContainer>
    </>
  );
};
export default SideNavbar;

