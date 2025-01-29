import { useEffect, useState } from "react";
import "./App.css";
import PharmList from "./components/PharmList";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import SendIcon from "@mui/icons-material/Send";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid2";
import NewItemPage from "./components/NewItemPage";

const myTheme = createTheme({
  palette: {
    background: {
      // default: "#f6f7f880"
      default: "#fff",
    },
  },
});

let id = 0;

function App() {
  const [items, setItems] = useState([]);
  const [newItemPageOpen, setNewItemPageOpen] = useState(false);

  function deleteItem(id) {
    const newList = items.filter((item) => id !== item.id);
    setItems(newList);
  }

  function addItem(item) {
    const newList = items.concat({ id, ...item });
    setItems(newList)
    id += 1;
  }

  const closeNewItemPage = () => {
    setNewItemPageOpen(false);
  };

  const text = "item";
  const secondary_text = "secondary text";

  useEffect(() => {
    addItem({ brandName: text, amount: 1 });
  }, []);

  return (
    // <ThemeProvider theme={myTheme}>
    // <CssBaseline />
    <Container maxWidth="sm" sx={{ padding: 1 }}>
      {/* <Card sx={{ mt: 2, boxShadow: 1, padding: 0 }}>
                    <CardContent> */}
      <Box>
        <Typography variant="h4" component="h2">
          Item's list
        </Typography>
        <PharmList items={items} deleteItem={deleteItem} />
        <Button
          fullWidth
          size="large"
          variant="outlined"
          startIcon={<AddIcon />}
          onClick={() => setNewItemPageOpen(true)}
        >
          add item
        </Button>
        <Divider sx={{ p: 2 }} />
        <Box sx={{ mt: 2, textAlign: "center" }}>
          <Button
            variant="contained"
            size="large"
            endIcon={<SendIcon />}
          >
            Submit
          </Button>
        </Box>
        {/* </CardContent>
                </Card> */}
      </Box>
      <NewItemPage open={newItemPageOpen} handleClose={closeNewItemPage} addItem={addItem} />
    </Container>
    // </ThemeProvider>
  );
}

export default App;
