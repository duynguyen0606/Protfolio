import { AppBar, Box, IconButton, Typography, Toolbar, Button } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import { GoogleLogin, googleLogout, useGoogleLogin } from '@react-oauth/google';
import { useEffect, useState } from 'react';
import axios from 'axios';

const LoginPopup = () => {

}

function LoginHeader() {

    const [user, setUser] = useState<{
        access_token: string
    }>();
    const [profile, setProfile] = useState<{
        picture?: string,
        name?: string,
        email?: string
    }>();

    const login = useGoogleLogin({
        onSuccess: (codeResponse) => setUser(codeResponse),
        onError: (error) => console.log('Login Failed:', error)
    });
    const logOut = () => {
        googleLogout();
        setProfile(undefined);
    };

    useEffect(
        () => {
            if (user) {
                axios
                    .get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`, {
                        headers: {
                            Authorization: `Bearer ${user.access_token}`,
                            Accept: 'application/json'
                        }
                    })
                    .then((res) => {
                        setProfile(res.data);
                    })
                    .catch((err) => console.log(err));
            }
        },
        [user]
    );
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        News
                    </Typography>
                    {profile ? (
                        <div>
                            <img src={profile.picture} alt="user image" />
                            <h3>User Logged in</h3>
                            <p>Name: {profile.name}</p>
                            <p>Email Address: {profile.email}</p>
                            <br />
                            <br />
                            <Button onClick={logOut}>Log out</Button>
                        </div>
                    ) : (
                        <Button color="inherit" onClick={() => login()}>Sign in with Google 🚀 </Button>
                    )}
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default LoginHeader; 