import PharmItem from "./PharmItem"; 
import { TransitionGroup } from 'react-transition-group';
import Collapse from '@mui/material/Collapse';
import List from '@mui/material/List';


function PharmList(props) {
    return (
        <List sx={{ mt: 1 }}>
            <TransitionGroup>
                {props.items?.map((item) => (
                    <Collapse key={item.id}>
                        <PharmItem idx={item.id} item={item} deleteItem={props.deleteItem}/>
                    </Collapse>
                ))}
            </TransitionGroup>
        </List>
    )
}

export default PharmList;
