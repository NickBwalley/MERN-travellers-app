import React from 'react';
import { Autocomplete } from '@react-google-maps/api';
import { AppBar, Toolbar, Typography, InputeBase, Box} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

import useStyles from './styles';

const Header = () => {
    const classes = useStyles();
    return (
        <AppBar position="static">
            <Toolbar className={classes.toolbar}>
                <Typography variant="h5" className={classes.title}>
                    safiri-salama
                </Typography>
                <Box display="flex">
                <Typography variant="h6" className={classes.title}>
                    Explore new places
                </Typography>
                <Autocomplete>
                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <SearchIcon/>
                        </div>
                        <InputeBase placeholder="Search..." classes={{root: classes.inputRoot, input: classes.inputInput}}/>

                    </div>
                </Autocomplete>
                </Box>
            </Toolbar>
        </AppBar>
    )
}

export default Header;