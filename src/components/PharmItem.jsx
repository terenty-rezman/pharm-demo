import DeleteIcon from '@mui/icons-material/Clear';
import IconButton from '@mui/material/IconButton';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import FolderIcon from '@mui/icons-material/Folder';
import { pink } from '@mui/material/colors';


function PharmItem(props) {
  return (
    <ListItem  
        secondaryAction={
            <IconButton edge="end" aria-label="delete"
                onClick={() => props.deleteItem(props.idx)}
            >
                <DeleteIcon />
            </IconButton>
        }
    >
        <ListItemAvatar>
            <Avatar {...stringAvatar(props.item.text)} />
        </ListItemAvatar>
        <ListItemText
            primaryTypographyProps={{fontSize: '1.5rem'}}
            primary={props.item.text}
            secondary={props.item.secondary_text}
        />
    </ListItem>
  );
}

function stringToColor(string) {
    let color = pink[500]
    return color;
}

function stringAvatar(name) {
  const letter = name[0] 

  return {
    sx: {
      bgcolor: stringToColor(name),
    },
    children: `${letter}`,
  };
}

export default PharmItem;
