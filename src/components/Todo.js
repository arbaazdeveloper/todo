import React, { useEffect, useState } from 'react'

const Todo = () => {
    //taking variabls
    const [id,setId]=useState(0)
    const [input,setInput]=useState()
    const [list,setList]=useState([])

    const [delModal,setDelModal]=useState(false)
    const [deleteId,setDeleteId]=useState()

    const[editModel,setEditModel]=useState(false)
    const [editNote,setEditNote]=useState()

    const onClickHandler=(e)=>{
        e.preventDefault()
        setId(id+1)
        const myList={
            id:id,
            description:input,
            status:false
        }
        setList([...list,myList])
    }
   
  const setDelModalStatus=(id)=>{
     setDelModal(true)
     setDeleteId(id)
  }

  const del=()=>{
  setList(list.filter((item)=>item.id !==deleteId))
 setDelModal(false)
}
const setcancel=()=>{
    setDelModal(false)
}

const [editIndex,setEditIndex]=useState('')

const edit=(index)=>{
setEditIndex(index)
setEditModel(true)
}
const update=(e)=>{
 e.preventDefault()
const newData=[...list]
newData[editIndex].description=editNote
setList(newData)
setEditModel(false)
}
const statusUpdate=(index)=>{
const newData=[...list]
newData[editIndex].status=true
setList(newData)

}
  return (
    <div>
        <div>
    {
       !editModel?<></>:<div className='modal-edit'>
    <form>
   <input value={editNote} onChange={(e)=>setEditNote(e.target.value)} ></input>
    <button className='btn' onClick={update}>update</button>
    </form>
</div>
    }

</div>
        <div>
    {
   
        !delModal?<div></div>:<div className='delete-Modal'>
        <p>Are You Sure you want to delete ?</p>
        <button className='btn' onClick={del}>delete</button>
        <button className='btn' onClick={setcancel}>Cancel</button>
        </div>
    }

</div>
        <form>
            <input type='text' value={input} onChange={(e)=>setInput(e.target.value)}></input>
            <button className='btn' onClick={onClickHandler}>Add</button>
        </form>
        <div>
            {list.map((item,index)=>{
                return <div className='list-item' onClick={()=>statusUpdate(index)}>
                    <input type='checkbox'></input>
               <h3>{item.id}</h3> 
               <p>{item.description}</p>
               <button className='btn' onClick={()=>setDelModalStatus(item.id)}>Delete</button>
               <button className='btn'onClick={()=>edit(index)}>Edit</button>
                </div>
            })}
        </div>





    </div>
  )
}

export default Todo