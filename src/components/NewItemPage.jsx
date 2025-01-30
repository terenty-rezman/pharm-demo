import { useEffect, useState, forwardRef } from "react";
import Dialog from "@mui/material/Dialog";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";

import TextField from '@mui/material/TextField';
import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete';
import Slide from '@mui/material/Zoom';

import Counter from "./Counter2";

function NewItemPage(props) {
  const [brandValue, setBrandValue] = useState();
  const [amount, setAmount] = useState(1);

  return (
    <>
      <Dialog
        fullScreen
        open={props.open}
        onClose={props.handleClose}
        TransitionComponent={Transition}
        slotProps={{
          backdrop: {
            sx: {
              backgroundColor: "#00000000",
            },
          },
        }}
      >
        <Container maxWidth="sm" sx={{ padding: 1 }}>
          <Typography variant="h4" component="h2" sx={{ mb: 3 }}>
            Add Item
          </Typography>
          <Box sx={{ pt: 1 }}>
            <Autocomplete
            //   value={brandValue}
              onChange={(event, newValue) => {
                setBrandValue(newValue);
              }}
              options={top100Films}
              getOptionLabel={(option) => option}
              filterOptions={filterOptions}
              renderInput={(params) => (
                <TextField {...params} label="Brand Name" sx={{ borderColor: "#fff" }} />
              )}
              sx={{ backgroundColor: "var(--dsr-input-bg)", borderRadius: "14px" }}
            />
            <Box sx={{mt: 5, mb: 3 }}>
                <Counter 
                    onAmountChange={(newValue, event) => setAmount(newValue)}
                    value={amount}
                />
            </Box>
            <Divider sx={{ p: 2 }} />
            <Box sx={{ mt: 3, textAlign: "right" }}>
              <Button
                variant="contained"
                size="large"
                sx={{ borderRadius: "24px" }}
                disableElevation
                onClick={() => {
                    if (brandValue != null){
                        props.addItem({brandName: brandValue, amount: amount})
                    }
                    props.handleClose()
                }}
              >
                Create Item
              </Button>
            </Box>
          </Box>
        </Container>
      </Dialog>
    </>
  );
}

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="right" ref={ref} {...props} />;
});

const filterOptions = createFilterOptions({
  matchFrom: 'start',
  stringify: (option) => option,
});


// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
  'The Shawshank Redemption',
  'The Godfather',
  'The Godfather: Part II',
  'The Dark Knight',
  '12 Angry Men',
  "Schindler's List",
  'Pulp Fiction',
]

export default NewItemPage;
