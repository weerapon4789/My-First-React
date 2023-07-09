import { useEffect, useState } from 'react';
import './Form.css';
import { v4 as uuidv4 } from "uuid";

const FormInput = (props) => {

    const [title,setTitle] = useState('')
    const [amount,setAmount] = useState(0)
    const [formValid,setFormvalid] = useState(false)

    const inputTitle = (event) =>{
        setTitle(event.target.value)
    }

    const inputAmount = (event) => {
        setAmount(event.target.value)
    }

    const saveData = (event) => {
        event.preventDefault()
        const itemData = {
            id:uuidv4(),
            title:title,
            amount:Number(amount)
        }
        props.onAdd(itemData)
        setTitle('')
        setAmount(0)
    }

    useEffect(()=>{
        const checkData = title.trim().length>0 && amount!==0
        setFormvalid(checkData)
    },[title,amount])

    return(
        <div>
            <form onSubmit={saveData}>
                <div className="form-control">
                    <label>ชื่อรายการ</label>
                    <input type="text" placeholder="ระบุรายการของคุณ" onChange={inputTitle} value={title}/>
                </div>

                <div className="form-control">
                    <label>จำนวนเงิน</label>
                    <input type="number" placeholder="(+ รายรับ, - รายจ่าย)" onChange={inputAmount} value={amount}/>
                </div>

                <div>
                    <button className='btn' type="submit" disabled={!formValid}>บันทึกรายการ</button>
                </div>
            </form>
        </div>
    )
}

export default FormInput