import React from 'react'
import PopBox from '../../Components/PopBox'
import Item from '../../Components/Item'
import './index.css'

export default function Container(props) {
    const {isShowInput,data,addData,changeState,changeData,deleteData} = props;
    return (
        <div className='Container'>
            {isShowInput ?
            <PopBox addData={addData}/>
            :
            ''
            }
            {
                data.map((e)=>{
                    console.log(e);
                if(e == undefined)
                    return ''
                return <Item key={e.id} data={e} changeState={changeState} changeData={changeData} deleteData={deleteData}/>
                })
            }
        </div>
    )
}
