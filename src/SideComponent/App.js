import {useState} from 'react'
import styled from 'styled-components';
import SideNavbar from './SideNavbar';
import Table from './Table';

const App = () => {
  const [closeData, setcloseData] = useState(true);

  const changeView=()=>setcloseData(!closeData);

  return (
      <MainContainer >
      <SideNavbar closeData={closeData} setcloseData={changeView}/>
      <Table closeData={closeData}/>
      </MainContainer>
  )
}

export default App;
const MainContainer =styled.div`
display: flex;
justify-content: center;

`
