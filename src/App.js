import { useEffect , useState } from 'react';
import './App.css';
import FormInput from './component/Form';
import Transaction from './component/Transaction';
import DataContext from './data/DataContext';
import ReportComponent from './component/ReportComponent';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";


function App() {
  const design = {color:"red", textAlign:"center", fontSize:'2.2rem'}

  // const initData =[
  //   {id:1,title:"เงินเดือน",amount:10000},
  //   {id:2,title:"ค่ารถ",amount:-5000},
  //   {id:3,title:"ขายเสื้อ",amount:10000},
  //   {id:4,title:"ค่าบ้าน",amount:-8000}
  // ]

  const [items,setItems] = useState([])

  const [reportIncome,setReportIn] = useState(0)
  const [reportExprence,setReportEx] = useState(0)

  const onAdd = (newItem) =>{
    setItems((toTop) => {
      return [newItem,...toTop]
    }) 
  }

  useEffect(()=>{
    const amounts = items.map(items=>items.amount)
    const income = amounts.filter(element=>element>0).reduce((total,element)=>total+=element,0)
    const expence = (amounts.filter(element=>element<0).reduce((total,element)=>total+=element,0))*-1
    setReportIn(income)
    setReportEx(expence)

  },[items,reportIncome,reportExprence])

  return (
    <DataContext.Provider value={{income:reportIncome,expence:reportExprence}}>
        <div className='container'>
          <h1 style={design}>โปรแกรมบันทึก รายรับ-รายจ่าย</h1>
          <Router>
            <div>
              <ul className='menu'>
                <li>
                  <Link to="/">ข้อมูลบัญชี</Link>
                </li>
                <li>
                  <Link to="/insert">บันทึกข้อมูล</Link>
                </li>
              </ul>
              <Routes>

               <Route path="/" element={<ReportComponent/>} />
               <Route path='/insert' element={
                <div>
                  <FormInput onAdd = {onAdd}/>
                  <Transaction item = {items}/>
                </div>} />

              </Routes>

            </div>
          </Router>

        </div>
    </DataContext.Provider>    


  );
}

export default App;
 