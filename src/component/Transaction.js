import Item from "./Item";
import './Transaction.css';
import { v4 as uuidv4 } from "uuid";


const Transaction = ()=> {
    const data = [
        {title:"ค่าเช่ารถ",amount:"1200"},
        {title:"ค่าโรงแรม",amount:"650"},
        {title:"ค่าอาหาร",amount:"200"},
        {title:"ค่าตั๋วเข้าชม",amount:"200"}
    ]

    return(
        <ul className="item-list">
            {data.map((element) =>{
                return <Item {...element} key = {uuidv4()}/>
            })}
        </ul>
    );
}

export default Transaction