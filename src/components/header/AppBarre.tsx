import {FC} from 'react';
import Nav from "./Nav";
import {createTheme, ThemeProvider} from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Stack from "@mui/material/Stack";
import * as React from "react";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Typography from "@mui/material/Typography";

const AppBarre: FC<{}> = ({}) => {
    function appBarLabel(label: string) {
        return (
            <Toolbar>
                <IconButton edge="start" color="inherit" aria-label="menu" sx={{mr: 2}}>
                    <MenuIcon/>
                </IconButton>
                <Typography variant="h6" noWrap component="div" sx={{flexGrow: 1}}>
                    {label}
                </Typography>
            </Toolbar>
        );
    }

    const darkTheme = createTheme({
        palette: {
            mode: 'dark',
            primary: {
                main: '#00788b',
            },
        },
    });
    return (
        <>
            <Stack spacing={2} sx={{flexGrow: 1}}>
                <ThemeProvider theme={darkTheme}>
                    <AppBar position="static" color="primary" enableColorOnDark>
                        {appBarLabel('ProductShop')}<Nav/>
                    </AppBar>
                </ThemeProvider>

            </Stack>

        </>
    );
};

export default AppBarre;