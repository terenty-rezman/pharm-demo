import PharmItem from "./PharmItem"; 
import { TransitionGroup } from 'react-transition-group';
import Collapse from '@mui/material/Collapse';
import List from '@mui/material/List';


function PharmList(props) {
    return (
        <List sx={{ mt: 1 }}>
            <TransitionGroup>
                {props.items?.map((item, idx) => (
                    <Collapse key={idx}>
                        <PharmItem idx={idx} item={item} deleteItem={props.deleteItem}/>
                    </Collapse>
                ))}
            </TransitionGroup>
        </List>
    )
}

export default PharmList;
