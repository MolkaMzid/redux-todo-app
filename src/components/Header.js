import React ,{Component}from 'react';


import {connect} from 'react-redux';
const Header =(props)=>{
    return(<div className='box-add'>
        <div className='Dailytodo'>Daily ToDo Lists</div>
<div className='Addtodo'>
<input className='input-add'placeholder='Add your ToDo' onChange={(e)=>props.SetInput(e.target.value)}/>
<button className='buttonadd' onClick={()=>props.AjoutItem(props.InputValue)}> Add</button>
</div>
    </div>);
}
const mapDispatchToProps=(dispatch)=>{
    return{
        SetInput:(input)=>dispatch({type:"SET_INPUT",payload:input}),
        AjoutItem:(a)=>dispatch({type:"ADD_ITEM",payload:{item:a,id:Math.random(),isChecked:false}})
    }
}


const mapStateToProps=(state)=>{
    return{
       InputValue:state.InputValue,
    }
}
export default connect(mapStateToProps,mapDispatchToProps) (Header);