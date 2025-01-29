import DeleteIcon from '@mui/icons-material/Clear';
import IconButton from '@mui/material/IconButton';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import FolderIcon from '@mui/icons-material/Folder';
import { pink } from '@mui/material/colors';
import Typography from '@mui/material/Typography';
import Grid from "@mui/material/Grid2";


function PharmItem(props) {
  return (
    // <ListItem sx={{pl: 0, pr: 0}}  
    // // <ListItem   
    //     secondaryAction={
    //         <IconButton edge="end" aria-label="delete"
    //             onClick={() => props.deleteItem(props.idx)}
    //         >
    //             <DeleteIcon />
    //         </IconButton>
    //     }
    // >
        /* <ListItemAvatar>
            <Avatar {...stringAvatar(props.item.brandName)} />
        </ListItemAvatar>
        <ListItemText
            primaryTypographyProps={{fontSize: '1.5rem'}}
            primary={props.item.brandName}
            secondary={props.item.dosage + " гм"}
        /> */

        <Grid container spacing={2} sx={{justifyContent: "space-between", alignItems: "center", mb: 1}}>
            <Grid container spacing={2} sx={{justifyContent: "space-between", alignItems: "center"}}>
                <Avatar {...stringAvatar(props.item.brandName)} />
                <Typography variant="body1" color="textSecondary" sx={{fontSize: "1.2rem"}}>{props.item.brandName}</Typography>
            </Grid>
            <Grid container spacing={2} sx={{justifyContent: "space-between", alignItems: "center"}}>
             <Typography variant="body1" color="textSecondary" sx={{fontSize: "1.2rem"}}>{props.item.amount} шт</Typography>
                <IconButton aria-label="delete"
                    onClick={() => props.deleteItem(props.idx)}
                >
                    <DeleteIcon />
                </IconButton>
             </Grid>

        </Grid>


    // </ListItem>
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
