import React, { useState, useRef } from "react";
import styled from "styled-components";
import Popup from "./Popup";

const Dropdown = () => {
  const [state, setstate] = useState(false);
  const selectRef = useRef();
  // const [assign, setassign] = useState(false)

  
  const handleOpen = (e) => {
    if(e.target.value=='Team_member'){
      setstate(!state);
    }
    // if(e.target.value=='assi....'){
    //   setassign(!state);
    // }
  };

  const handleClose = (e) => {
    setstate(!state);
    selectRef.current.value = "Assign To";

  };

  return (
    <>
      <AssignDropdown>
        <select onChange={(e)=>handleOpen(e)} defaultValue="Assign To" ref={selectRef}>
            <option value="Assign To" disabled>
              Assign To
            </option>
        
            <option value="Automatically" >Automatically</option>
        
            <option value="Team_member">Team member</option>
        
        </select>
      </AssignDropdown>
      <PopCenter>
        {state && <Popup onhandleClose={handleClose} />}
        {/* {assign && <Popup onhandleClose={handleClose} />} */}
      </PopCenter>
    </>
  );
};

export default Dropdown;

const AssignDropdown = styled.div`
  select {
    width: 280px;
    height: 40px;
    background: #f7f7f7 0% 0% no-repeat padding-box;
    border-radius: 4px;
    option {
      width: 280px;
      height: 40px;
    }
  }
`;
const PopCenter = styled.div`
  width: 1366px;
  height: 706px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
