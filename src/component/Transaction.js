import { useContext } from "react";
import DataContext from "../data/DataContext";
import Item from "./Item";
import './Transaction.css';

const Transaction = (props)=> {

    const {item} = props
    const total = useContext(DataContext)
    return(
        <div>
                    <ul className="item-list">
            {item.map((element) =>{
                return <Item {...element} key = {element.id}/>
            })}
        </ul>
        {total}
        </div>
    );
}

export default Transaction