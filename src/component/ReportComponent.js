import { useContext } from "react";
import DataContext from "../data/DataContext";
import './ReportComponent.css';

const ReportComponent =()=> {

    const {income,expence} = useContext(DataContext)
    const finalTotal = income-expence
    const statusTotal = finalTotal <0 ? "outF":"inF"
    const formatNumber=(num)=> {
        return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    }

    return(
      <div>
        <h3>ยอดเงินคงเหลือ(บาท)</h3>
        <h1 className={statusTotal}>{formatNumber(income-expence)}<span style={{color: "black"}}> บาท</span></h1> 
        <div className="report-container">
            <div>
                <h4>รายรับทั้งหมด</h4>
                <p className="report inc">{formatNumber(income)}</p>
            </div>
            <div>
                <h4>รายจ่ายทั้งหมด</h4>
                <p className="report exp">{formatNumber(expence)}</p>
            </div>
        </div>
      </div>  
    );
}

export default ReportComponent