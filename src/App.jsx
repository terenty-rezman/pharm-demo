import { useEffect, useState } from "react";
import "./App.css";
import PharmList from "./components/PharmList";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import SendIcon from "@mui/icons-material/ArrowForward";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid2";
import NewItemPage from "./components/NewItemPage";
import { ThemeProvider, useTheme } from '@mui/material/styles';

import customTheme from "./CustomTheme";

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

  const outerTheme = useTheme();

  return (
    <ThemeProvider theme={customTheme(outerTheme)}>
    <CssBaseline />
    <Container maxWidth="sm" sx={{ padding: 1 }}>
      {/* <Card sx={{ mt: 2, boxShadow: 1, padding: 0 }}>
                    <CardContent> */}
      <Box>
        <Typography variant="h4" component="h2" sx={{ mb: 3 }}>
          Item's list
        </Typography>
        <PharmList items={items} deleteItem={deleteItem} />
        <Button
          fullWidth
          size="large"
          variant="text"
          startIcon={<AddIcon />}
          onClick={() => setNewItemPageOpen(true)}
        >
          add item
        </Button>
        <Divider sx={{ p: 2 }} />
        <Box sx={{ mt: 3, textAlign: "right" }}>
          <Button
            variant="contained"
            size="large"
            disableElevation
            endIcon={<SendIcon />}
            sx={{ borderRadius: "24px" }}
          >
            Submit
          </Button>
        </Box>
        {/* </CardContent>
                </Card> */}
      </Box>
      <NewItemPage open={newItemPageOpen} handleClose={closeNewItemPage} addItem={addItem} />
    </Container>
    </ThemeProvider>
  );
}

export default App;
