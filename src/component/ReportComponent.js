import { useContext } from "react";
import DataContext from "../data/DataContext";
import './ReportComponent.css';

const ReportComponent =()=> {

    const {income,expence} = useContext(DataContext)

    return(
      <div>
        <h3>ยอดเงินคงเหลือ(บาท)</h3>
        <h1>{income-expence} บาท</h1>
        <div className="report-container">
            <div>
                <h4>รายรับทั้งหมด</h4>
                <p className="report inc">{income}</p>
            </div>
            <div>
                <h4>รายจ่ายทั้งหมด</h4>
                <p className="report exp">{expence}</p>
            </div>
        </div>
      </div>  
    );
}

export default ReportComponent