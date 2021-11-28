import React,{useState} from 'react'
import './index.css'
import Dialog from '../Dialog';
import ChangeDialog from '../ChangeDialog';
import DeleteDialog from '../DeleteDialog';

export default function Item(props) {
    const [showDialog,setShowDialog] = useState(false);
    const {data,changeState,changeData,deleteData} = props;

    const [showChangeDialog,setChaneShowDialog] = useState(false);
    const [showDeleteDialog,setDeleteShowDialog] = useState(false);

    function checkData(){
        setShowDialog(true);
    }
    function closeDialog(){
        setShowDialog(false);
    }

    function openChangeDialog(){
        setChaneShowDialog(true);
    }
    function closeChangeDialog(){
        setChaneShowDialog(false);
    }

    function openDeleteDialog(){
        setDeleteShowDialog(true);
    }
    function closeDeleteDialog(){
        setDeleteShowDialog(false);
    }

    return (
        <div className='Item'>
            {/* {data.id} */}
            <div className='Item_inner'>
                <input className='Item_input' type='checkbox' onClick={()=>{changeState(data.id)}}/>
                <div className='Item_context'>
                    <span >{data.data}</span>
                </div>
                <button onClick={checkData}>查看</button>
                <button onClick={openChangeDialog}>编辑</button>
                <button onClick={openDeleteDialog}>删除</button>
            </div>
            {showDialog?
            <Dialog data={data} closeDialog={closeDialog} />
            :
            ''}

            {showChangeDialog?
                <ChangeDialog data={data}  changeData={changeData} closeChangeDialog={closeChangeDialog}/>
            :
            ''}
        
            {showDeleteDialog?
                <DeleteDialog data={data} closeDeleteDialog={closeDeleteDialog} deleteData={deleteData}/>
            :
            ''}
        </div>
    )
}
