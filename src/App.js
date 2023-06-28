import './App.css';
import Transaction from './component/Transaction';

function App() {
  const design = {color:"red", textAlign:"center", fontSize:'2rem'}
  return (
    <div className='container'>
          <h1 style={design}>โปรแกรมบันทึก รายรับ-รายจ่าย</h1>
          <Transaction/>
    </div>
  );
}

export default App;
 