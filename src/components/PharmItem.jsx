function PharmItem(props) {
  return (
    <li className="">
      <span className="">
        {props.item}
      </span>
        <button 
            onClick={() => props.deleteItem(props.idx)}
        >
        delete
        </button>
    </li>
  );
}

export default PharmItem;
