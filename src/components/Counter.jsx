import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <Box
      sx={{
        mt: 2,
        display: 'flex',
        // flexDirection: 'column',
        alignItems: 'center',
        // justifyContent: 'center',
        // height: '100vh',
        gap: 2,
      }}
    >
      <Typography variant="subtitle1">Counter: {count}</Typography>
      <TextField
          id="outlined-number"
          label="Number"
          type="number"
          slotProps={{
            inputLabel: {
              shrink: true,
            },
          }}
        />
      <Box sx={{ display: 'flex', gap: 2 }}>
        <Button variant="contained" color="primary" onClick={increment}>
          Increment
        </Button>
        <Button variant="contained" color="secondary" onClick={decrement}>
          Decrement
        </Button>
        {/* <Button variant="outlined" color="error" onClick={reset}>
          Reset
        </Button> */}
      </Box>
    </Box>
  );
};

export default Counter;
