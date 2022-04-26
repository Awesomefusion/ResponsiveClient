import Grid from '@mui/material/Grid';
import React from 'react';
import Navbar from '../components/Navbar';


function App() {

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Navbar/>
      </Grid>
    </Grid>


  );
}
export default App;
