import './App.css';
import List from './components/List';
import Form from './components/Form';
import { useState, useEffect } from 'react';

function App() {
  const [companys, setcompanys] = useState([])

  useEffect(()=>{
    (async()=>{
        const res= await fetch("http://localhost:1000/companys/")
        const data= await res.json()
        console.log(data)
        if(!data.err){
            setcompanys(data)
        }else{
            console.log(data.err)
        }
    })()
  },[])

  return (
    <div className="App">
      <Form companys={companys}/>
      <List companys={companys}/>
    </div>
  );
}

export default App;
