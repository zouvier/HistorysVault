import type { NextPage } from 'next';
import Link from 'next/link';
import { AppBar, Toolbar, Typography, Grid, Box } from '@mui/material';
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles(({
    navItem: {
        marginRight: 140,
        fontFamily: 'Merriweather'
    },
    userArea: {
        display: 'flex',
        alignItems: 'center'
    },
    userPicture: {
        borderRadius: 16, 
        height: 40, 
        width: 40, 
        backgroundColor: 'red'
    },
    userText: {
        marginRight: 40,
        fontFamily: 'Gotham Pro'
    }
}));

const Navbar: NextPage = () => {
    const classes = useStyles();

    return (
        <AppBar position="static">
            <Toolbar style={{justifyContent: 'space-between'}}>
                <Box sx={{display: 'flex'}}>
                    <Typography className={classes.navItem} variant="h6">
                        <Link href="/home"> Home </Link>
                    </Typography>
                    
                    <Typography className={classes.navItem} variant="h6">
                        <Link href="/marketplace"> Marketplace </Link>
                    </Typography>
                    <Typography className={classes.navItem} variant="h6">
                        <Link href="/featured"> Featured </Link>
                    </Typography>
                </Box>

                <Box className={classes.userArea}> 
                    <Typography className={classes.userText}> Connect Wallet </Typography>
                    <Box className={classes.userPicture}></Box>
                </Box>
            </Toolbar>
            
        </AppBar>
    )
}

export default Navbar;