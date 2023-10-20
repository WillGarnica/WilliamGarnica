
import { Avatar, List, ListItem, ListItemAvatar, ListItemText } from '@mui/material';
import './MyKnowledge.css';  
import IconJava from "../../svg/IconJava.svg";   
import IconMicroservices from "../../svg/IconMicroservices.svg";
import IconSpringFramework from "../../svg/IconSpringFramework.svg";
import IconUnitTesting from "../../svg/IconUnitTesting.svg";
import IconDesingPatters from "../../svg/IconDesingPatters.svg";  

const MyKnowledge = () => {
    return (   
        <section id="my-knowledge" >
            <div className="App App-header">
                <h1>My knowledge</h1>
                <List>
                    <ListItem style={{ backgroundColor: 'white' }}>
                        <ListItemAvatar>
                            <Avatar><img src={IconJava} /></Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="Java" secondary="10 years of experience" style={{ color: 'black' }} />
                    </ListItem>

                    <ListItem style={{ backgroundColor: 'white' }}>
                        <ListItemAvatar>
                            <Avatar><img src={IconSpringFramework} /></Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="Spring Framework" secondary="5 years of experience" style={{ color: 'black' }} />
                    </ListItem>

                    <ListItem style={{ backgroundColor: 'white' }}>
                        <ListItemAvatar>
                            <Avatar><img src={IconMicroservices} /></Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="Microservices" secondary="5 years of experience" style={{ color: 'black' }} />
                    </ListItem>

                    <ListItem style={{ backgroundColor: 'white' }}>
                        <ListItemAvatar>
                            <Avatar><img src={IconDesingPatters} /></Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="Design patterns" secondary="7 years of experience" style={{ color: 'black' }} />
                    </ListItem>

                    <ListItem style={{ backgroundColor: 'white' }}>
                        <ListItemAvatar>
                            <Avatar><img src={IconUnitTesting} /></Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="Junit / Mockito" secondary="5 years of experience" style={{ color: 'black' }} />
                    </ListItem>
                </List>
            </div>
        </section>
    );
}

export default MyKnowledge;