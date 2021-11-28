import React from 'react'
import './index.css'

export default function Dialog(props) {
    const {data,closeDialog} = props;
    return (
        <div className='Dialog'>
            <ul>
                <li>代办事件内容：{data.data}</li>
                <li>代办创建时间：{data.id}</li>
                <li>代办完成状态：{data.isFinish ? '已完成' : '未完成'}</li>
            </ul>
            <button onClick={closeDialog}>关闭</button>
        </div>
    )
}
