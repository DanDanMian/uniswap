import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Button from '@mui/material/Button';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';


export default function TokenInput() {
  return (
    <Paper
      component="form"
      elevation={0}
      sx={{ 
        display: 'flex', 
        flexFlow: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '1rem',
        borderRadius: 5,
        backgroundColor: 'rgb(245, 246, 249)',
        border: "solid rgb(245, 246, 249)",
        marginTop: '0.5rem',
        boxShadow: 'none',
        "&:hover": {
          border: "solid rgb(195, 197, 208)",
        },
      }}
    >
      <InputBase
        placeholder="0.0"
        // type="number"
        sx={{
          fontWeight: 500,
          appearance: 'textfield',
          flex: '1 1 auto',
          boxShadow: 'border-box',
          fontSize: 28,
          paddingRight: '1rem',
          fontVariantNumeric: 'slashed-zero',
        }}
      />
      <Button 
        variant="contained"
        sx={{
          borderRadius: 4,
          backgroundColor: 'rgb(232, 0, 111);',
          "&:hover": {
            backgroundColor: 'rgb(193, 0, 81)',
          },
          fontSize: '1.1rem',
          fontWeight: 500,
          color: 0,
          textTransform: 'none',
          height: '2.4rem',
          width: 'initial',
          padding: '0.5rem 0.5rem 0.5rem 1rem',
          minWidth: 'fit-content',
          whiteSpace: 'nowrap',
        }}
      >
        Select a token <KeyboardArrowDownIcon />
      </Button>
    </Paper>
  );
}