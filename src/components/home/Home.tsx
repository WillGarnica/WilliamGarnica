
import { Button, Container, Dialog, DialogActions, DialogTitle, Link } from '@mui/material';
import './Home.css';
import React from 'react';

const Home = () => {
    const [openDialogAboutThisPage, setOpenDialogAboutThisPage] = React.useState(false);

    return (
        <div className='myHome'>
            <p>Hi. I'm <h2>William Garnica</h2></p>

            <p><h1>Backend developer!</h1></p>

            <div>
                <Button variant="contained"
                    style={{ textTransform: 'none', margin: 15 }}
                    target="blank"
                    href="https://www.linkedin.com/in/william-garnica-70b93a196">
                    My Linkedin
                </Button>

                <Button variant="outlined" onClick={() => { setOpenDialogAboutThisPage(true) }}>
                    About this page
                </Button>

                <br />
                <a href='#my-knowledge' >
                    <Button variant="outlined" >
                        My knowledge
                    </Button>
                </a>
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
                    <p><Link href="https://github.com/WillGarnica/WilliamGarnica" target='blank'>Github repository</Link></p>
                    <DialogActions>
                        <Button
                            onClick={() => { setOpenDialogAboutThisPage(false) }}
                            autoFocus>Close</Button>
                    </DialogActions>
                </Container>
            </Dialog>
        </div>
    );
}

export default Home;