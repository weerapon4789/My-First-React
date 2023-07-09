import { useState } from 'react';
import './App.css';
import FormInput from './component/Form';
import Transaction from './component/Transaction';
import DataContext from './data/DataContext';
import ReportComponent from './component/ReportComponent';

function App() {
  const design = {color:"red", textAlign:"center", fontSize:'2.2rem'}

  const [items,setItems] = useState([])
  const onAdd = (newItem) =>{
    setItems((toTop) => {
      return [newItem,...toTop]
    }) 
  }

  return (
  <DataContext.Provider value="Test Pan">
        <div className='container'>
          <h1 style={design}>โปรแกรมบันทึก รายรับ-รายจ่าย</h1>
          <ReportComponent/>
          <FormInput onAdd = {onAdd}/>
          <Transaction item = {items}/>
        </div>
  </DataContext.Provider>
  );
}

export default App;
 