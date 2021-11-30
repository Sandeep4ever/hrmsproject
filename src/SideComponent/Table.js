import {useState,useEffect} from 'react';
import styled from 'styled-components';

const MainTableContainer=styled.div`

table{
    font-family: arial, sans-serif;
  border-collapse: collapse;
  width: ${({wid})=>wid ? '70vw':'90vw'};
  transition: all 0.3s;
  overflow-y: hidden;
}
th{
 background-color: black;
 color: white;
}
td, th{
    border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}
tr:nth-child(even) {
  background-color: #dddddd;
}
`
const SearchContainer=styled.div`
margin: 20px;

span{
  cursor: pointer;
}

`

const Table = ({closeData}) => {
    const [response, setResponse] = useState([]);
    const [error, setError] = useState({});
const [searchText,setsearchText]=useState('');
const [output,setoutput]=useState([]);
let storedata =[];

// console.log(output)

    
    useEffect(() => {
        const fetchData = async() => {
          try {
            const res = await fetch("https://jsonplaceholder.typicode.com/users");
            let son = await res.json();
                
            setResponse(son);
          } catch (error) {
            console.log(error)
            setError(error);
          }
        };
          fetchData();
      },[]);



      const SearchHandle=(e)=>{
    //  console.log(e.target.value)
     setsearchText(e.target.value);
    //  searchFun(e.target.value)

  let optmize =debounce(searchFun(e.target.value), 400);
  console.log(optmize)
      
      }
      const searchFun=(value)=>{
       const filterArr=[];
       let newvalue = new RegExp(`${value}`, 'gi')
       response.forEach((el)=>{
        if(newvalue.test(el.name) || newvalue.test(el.email) || newvalue.test(el.phone) || newvalue.test(el.website)){
          filterArr.push(el);
         }
       })
       setoutput(filterArr);
      }

const debounce=(searchFun,delay)=>{

  let timerId;
  return function optWorkfun(){
    clearTimeout(timerId)
   timerId= setTimeout(()=>{
     
      searchFun()
      console.log("hello")
    },delay)

  }
}



      storedata= output.length > 0 ? output: response;
    return (
        <>
<MainTableContainer wid={closeData}>
  <SearchContainer>
    <input type="text" value={searchText} onChange={SearchHandle} placeholder='Search...'  /> 
  </SearchContainer>

     <table>
            <tr>
                <th>Name</th>
                <th>Phone No.</th>
                <th>Email</th>
                <th>Website</th>
            </tr>

  {storedata.map((data,index)=><tr key={index}>
    <td>{(data.name)}</td>
    <td>{data.phone}</td>
    <td>{data.email}</td>
    <td>{data.website}</td>
</tr>)}

   </table>
   </MainTableContainer>
        </>
    )
}

export default Table
