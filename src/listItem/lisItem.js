import "./styleSt3.css"
function ListItem(props){
    return(

<div className="listItem">
  <p className="nameItem">{props.name}</p>
  <p className="numberItem">{props.number}</p>
</div>

    );}
    export default ListItem