const SetListReducer =(state=[],action)=> {
    if(action.type==="ADD_ITEM"){
        return [...state,action.payload]
    }else if(action.type==="EDIT_ITEM"){
        return state.map(el=>(el.id===action.payload.id)?{id:el.id,item:action.payload.NewValue,isChecked:el.isChecked}:el)
    }else if(action.type==="DELETE_ITEM"){
        return state.filter(el=>(el.id!==action.payload))
    }else if(action.type==='CHECK_ITEM'){
        return state.map(el=>(el.id===action.payload)?{id:el.id,item:el.item,isChecked:!el.isChecked}:el)
    }
    else return state
}
export default SetListReducer;