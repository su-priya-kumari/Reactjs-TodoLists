const todoLists = (props) => {
    
    return(
        <li><button type="button" className="delete_btn" onClick={()=>props.onSelect(props.id)}>X</button>{props.text}</li>
    )
}
export default todoLists;