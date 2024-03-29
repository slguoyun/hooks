import React from 'react'
import './index.css'

export default function Header(props) {

    const {openInput} = props;
    return (
        <div className='Header'>
            <span>圣泷TodoList</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span onClick={openInput} className='icon'>
            <svg  width="24" height="24" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="48" height="48" fill="white" fill-opacity="0.01"/><path d="M30 4H18V18H4V30H18V44H30V30H44V18H30V4Z" fill="none" stroke="#333" stroke-width="4" stroke-linejoin="round"/></svg>
            </span>
        </div>
    )
}
