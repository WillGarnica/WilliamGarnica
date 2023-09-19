import { Container, DialogActions, DialogTitle, List, ListItem, ListItemAvatar, ListItemText } from '@mui/material';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import React from 'react';
import Avatar from '@mui/material/Avatar';

import './App.css';

const App: React.FC = () => {

  const [openDialogAboutThisPage, setOpenDialogAboutThisPage] = React.useState(false);

  return (
    <div className="App">
      <header className="App-header">
        <p>Hi. I'm <h2>William Garnica</h2></p>

        <p><h1>Backend developer!</h1></p>

        <div>
          <Button variant="contained"
            style={{ textTransform: 'none' , margin:15 }}
            target="blank"
            href="https://www.linkedin.com/in/william-garnica-70b93a196">
            My Linkedin
          </Button>

          <Button variant="outlined" onClick={() => { setOpenDialogAboutThisPage(true) }}>
            About this page
          </Button>
        </div>

        <Dialog
          onClose={() => { setOpenDialogAboutThisPage(false) }}
          open={openDialogAboutThisPage}>
          <DialogTitle>About this page</DialogTitle>
          <Container>
            <p>App made in React v18.</p>
            <p>Typescript: 5.1.6</p>
            <p>Deployed and published using Github Pages.</p>
            <p>Yes I know, sometimes I do things in the FrontEnd.</p>
            <DialogActions>
              <Button
                onClick={() => { setOpenDialogAboutThisPage(false) }}
                autoFocus>Close</Button>
            </DialogActions>
          </Container>
        </Dialog>

        <br />
        <br />
        <h1>My knowledge</h1>

        <List>
          <ListItem style={{ backgroundColor: 'white' }}>
            <ListItemAvatar>
              <Avatar alt="J" src="%PUBLIC_URL%/logo192.png"   />
            </ListItemAvatar>
            <ListItemText primary="Java" secondary="10 years of experience" style={{ color: 'black' }} />
          </ListItem>

          <ListItem style={{ backgroundColor: 'white' }}>
            <ListItemAvatar>
              <Avatar alt="S" src="./img/linkedin_icon_135436.png" />
            </ListItemAvatar>
            <ListItemText primary="Spring Framework" secondary="5 years of experience" style={{ color: 'black' }} />
          </ListItem>

          <ListItem style={{ backgroundColor: 'white' }}>
            <ListItemAvatar>
              <Avatar alt="M" src="./src/img/linkedin_icon_135436.png" />
            </ListItemAvatar>
            <ListItemText primary="Microservices" secondary="5 years of experience" style={{ color: 'black' }} />
          </ListItem>

          <ListItem style={{ backgroundColor: 'white' }}>
            <ListItemAvatar>
              <Avatar alt="DP" src="../src/img/linkedin_icon_135436.png" />
            </ListItemAvatar>
            <ListItemText primary="Design patterns" secondary="7 years of experience" style={{ color: 'black' }} />
          </ListItem>

          <ListItem style={{ backgroundColor: 'white' }}>
            <ListItemAvatar>
              <Avatar alt="J" src="../public/linkedin_icon_135436.png" />
            </ListItemAvatar>
            <ListItemText primary="Junit / Mockito" secondary="5 years of experience" style={{ color: 'black' }} />
          </ListItem>
        </List>

        <br />

      </header>
    </div >
  );
};

export default App;
