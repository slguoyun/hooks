import React,{useState} from 'react'
import Header from './Components/Header'
import Container from './Components/Container'

import './App.css'

export default function App(){

  const [data,setData] = useState([]);
  const [isShowInput, setShowInput] = useState(false);

  function addData(d){
    setData([...data,{id:Date(),data:d,isFinish:false}])
    setShowInput(!isShowInput)
  }
  
  // function changeState(id){
  //   setData((data)=>{data.map((e)=>{
  //     if(e.id === id){
  //       e.isFinish = !e.isFinish;
  //     }
  //     return e;
  //   })

  //   })
  // }

  function changeState(id){
    setData(data.map((e)=>{
      if(e.id === id){
        e.isFinish = !e.isFinish;
      }
      return e;
    }))
  }

  function changeData(id,newData){
    setData(data.map((e)=>{
      if(e.id === id){
        e.data = newData;
      }
      return e;
    }))  
  }

  function deleteData(id){
    // alert(id)
    setData(data.filter((item) => item.id !== id)) 
  }
  
  return (
    <div className='App'>
      <Header openInput={()=>{setShowInput(!isShowInput)}}/>
        <Container isShowInput={isShowInput} data={data} addData={addData} changeState={changeState} changeData={changeData} deleteData={deleteData}/>
      
    </div>
  )
}
