import React,{ useRef} from 'react'
import './index.css'

export default function PopBox(props) {
    const inputEl = useRef(null)
    const {addData} = props;

    function addDataFun(){
        const a = inputEl.current.value.trim()
        if(a !== ''){
            addData(a)
        }
    }
    
    return (
        <div className='PopBox'>
            <span>请输入代办事项：</span>
            <input ref={inputEl} type="text"/>
            <button onClick={addDataFun}>添加</button>
        </div>
    )
}
