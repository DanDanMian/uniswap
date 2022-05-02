import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Grid from '@mui/material/Grid';
import TokenInput from './TokenInput';
import { IconButton } from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import "typeface-inter";

const theme = createTheme({
  typography: {
    fontFamily: '"Inter", sans-serif',
  },
  components:{
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 24,
          boxShadow: "rgb(0 0 0 / 1%) 0px 0px 1px, rgb(0 0 0 / 4%) 0px 4px 8px, rgb(0 0 0 / 4%) 0px 16px 24px, rgb(0 0 0 / 1%) 0px 24px 32px",
          maxWidth: '30rem',
        },
      },
    },
  },
});

export default function FormDialog() {
  return (
    <ThemeProvider theme={theme}>
      <div sx={{backgroundColor: 225}}>
        <Dialog open hideBackdrop={true}>
          <DialogTitle sx={{
            paddingBottom: 0,
            fontSize: '1rem',
          }}>
            <Grid 
              justifyContent="space-between"
              container
            >
            Swap
            <IconButton><SettingsIcon /></IconButton>
            </Grid>
          </DialogTitle>
          <DialogContent sx={{
            margin: 0,
            padding: '0.5rem'
          }}>
            <IconButton 
              size="small"
              sx={{
                position:'absolute', 
                left: '50%', 
                top: '47%', 
                transform: 'translate(-50%,-50%)',
                border: "0.3rem solid white",
                borderRadius: "0.8rem",
                backgroundColor: "rgb(245, 246, 249)",
                "&:hover": {
                  border: "0.3rem solid rgb(195, 197, 208)",
                  backgroundColor: "rgb(245, 246, 249)",
                },
              }}>
              <ArrowDownwardIcon sx={{
                fontSize: "1rem",
              }}/>
            </IconButton>
            <TokenInput />
            <TokenInput />
          </DialogContent>
          <DialogActions>
            <Button 
              fullWidth
              variant="contained"
              disableElevation
              sx={{
                borderRadius: 5,
                backgroundColor: 'rgb(253, 234, 241)',
                "&:hover": {
                  backgroundColor: 'rgb(251, 210, 226)',
                },
                fontSize: 18,
                fontWeight: 500,
                color: 'rgb(213, 0, 102)',
                textTransform: 'none',
                padding: '16px',
              }}
            >
              Connect Wallet
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </ThemeProvider>
  );
}
