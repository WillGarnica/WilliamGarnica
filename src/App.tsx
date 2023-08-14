import { Container, DialogActions, DialogTitle } from '@mui/material';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import React from 'react';
import './App.css';

const App: React.FC = () => {

  const [openDialogAboutThisPage, setOpenDialogAboutThisPage] = React.useState(false);

  return (
    <div className="App">
      <header className="App-header">
        <p>Hi. I'm <h2>William Garnica</h2></p>

        <p><h1>Backend developer!</h1></p>

        <Button variant="contained"
          style={{ textTransform: 'none' }}
          target="blank"
          href="https://www.linkedin.com/in/william-garnica-70b93a196">
          My Linkedin
        </Button>

        <p></p>

        <Button variant="outlined" onClick={() => { setOpenDialogAboutThisPage(true) }}>
          About this page
        </Button>

        <Dialog
          onClose={() => { setOpenDialogAboutThisPage(false) }}
          open={openDialogAboutThisPage}>
          <DialogTitle>About this page</DialogTitle>
          <Container>
            App made in React v18.
            <br />
            <br />
            <DialogActions>
              <Button
                onClick={() => { setOpenDialogAboutThisPage(false) }}
                autoFocus>Close</Button>
            </DialogActions>
          </Container>
        </Dialog>


      </header>
    </div >
  );
};

export default App;
