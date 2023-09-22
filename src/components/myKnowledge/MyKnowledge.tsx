
import { Avatar, List, ListItem, ListItemAvatar, ListItemText } from '@mui/material';
import './MyKnowledge.css';

const MyKnowledge = () => {

    return (
        <div >
            <h1>My knowledge</h1>
            <List>
                <ListItem style={{ backgroundColor: 'white' }}>
                    <ListItemAvatar>
                        <Avatar alt="J" src="%PUBLIC_URL%/logo192.png" />
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
        </div>
    );
}

export default MyKnowledge;