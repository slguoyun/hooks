import React ,{useRef}from 'react'
import './index.css'

export default function ChangeDialog(props) {
    const {data,changeData,closeChangeDialog} = props;
    const input1 = useRef(null);
    function changeNew(){
        const newData = input1.current.value.trim();
        if(newData !== ''){
            changeData(data.id,newData);
            closeChangeDialog();
            // alert('修改成功！')
        }
        else{
            alert('输入值为空，修改失败！')
            closeChangeDialog();
        }
    }
    return (
        <div class='ChangeDialog'>
            <span>请输入要修改的内容：</span>
            <input type="text" ref={input1}/>
            <button onClick={changeNew}>提交</button>
        </div>
    )
}
