import PharmItem from "./PharmItem"; 

function PharmList(props) {
    return (
        <ul>
            {props.items?.map((item, idx) => (<PharmItem key={idx} idx={idx} item={item} deleteItem={props.deleteItem}/>))}
        </ul>
    )
}

export default PharmList;
