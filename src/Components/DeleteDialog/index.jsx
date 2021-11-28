import React from 'react'
import './index.css'

export default function DeleteDialog(props) {

    const {data,closeDeleteDialog,deleteData} = props;
    
    return (
        <div className='DeleteDialog'>
            确定要删除吗？
            <button onClick={()=>{deleteData(data.id)}}>确定</button>
            <button onClick={closeDeleteDialog}>取消</button>
        </div>
    )
}
