import { useEffect, useState } from 'react'
import './App.css'
import PharmList from './components/PharmList'
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import SendIcon from '@mui/icons-material/Send';
import Divider from '@mui/material/Divider';

const myTheme = createTheme({
    palette: {
        background: {
            // default: "#f6f7f880"
            default: "#fff"
        },
  },
});

function App() {
  const [items, setItems] = useState([])

  function deleteItem(id) {
    const newList = items.filter((itemd, idx) => id !== idx)
    setItems(newList)
  }

  function addItem(item) {
    const newList = items.concat(item);
    setItems(newList);
  }

  const text = "item"
  const secondary_text = "secondary text"

  useEffect(() => { setItems([{text}, {text, secondary_text}, {text, secondary_text}])}, [])

  return (
    // <ThemeProvider theme={myTheme}>
        // <CssBaseline />
            <Container maxWidth="sm">
                <Card sx={{ minWidth: 275, mt: 2 }}>
                    <CardContent>
                        <Typography variant="h4" component="h2">
                            Item's list
                        </Typography>
                        <PharmList items={items} deleteItem={deleteItem} />
                        <Button 
                            variant="outlined" 
                            startIcon={<AddIcon />}
                            onClick={() => addItem({text})}
                        >
                            add item
                        </Button>
                        <Divider sx={{ p: 2 }} />
                        <Box sx={{ mt: 2, textAlign: "center"}}>
                            <Button variant="contained" endIcon={<SendIcon />}>
                                Submit
                            </Button>
                        </Box>
                    </CardContent>
                </Card>
            </Container>
    // </ThemeProvider>
  )
}

export default App
