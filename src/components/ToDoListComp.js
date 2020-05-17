import React from 'react';
import {connect} from 'react-redux';
const ToDoListComp = (props)=>{
    return(<div>
{props.ToDoList.map((el,i)=><div key={i}>
    <input type="checkbox"onChange={()=>props.CheckItem(el.id)}/>
    <span className={(el.isChecked)&&"checked"}>{el.item}</span>
    <button onClick={()=>props.EditItem(el.id)}>Edit</button>
    <button onClick={()=>props.DeleteItem(el.id)}>Delete</button>
</div>)}
</div>  );
}

const mapDispatchToProps=(dispatch)=>{
    return{
        EditItem:(id)=>{
            var newItem=prompt('add your new item',"")
            dispatch({type:"EDIT_ITEM",payload:{id:id,NewValue:newItem}})
        },
        DeleteItem:(id)=>dispatch({type:"DELETE_ITEM",payload:id}),
        CheckItem:(id)=>{dispatch({type:"CHECK_ITEM",payload:id})}
    }
}
const mapStateToProps=(state)=>{
    return{
        ToDoList:state.ToDoList,
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(ToDoListComp);