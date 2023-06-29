import { useState } from 'react';
import './App.css';
import FormInput from './component/Form';
import Transaction from './component/Transaction';

function App() {
  const design = {color:"red", textAlign:"center", fontSize:'2rem'}

  const [items,setItems] = useState([])
  const onAdd = (newItem) =>{
    setItems((toTop) => {
      return [newItem,...toTop]
    }) 
  }

  return (
    <div className='container'>
          <h1 style={design}>โปรแกรมบันทึก รายรับ-รายจ่าย</h1>
          <FormInput onAdd = {onAdd}/>
          <Transaction item = {items}/>
    </div>
  );
}

export default App;
 