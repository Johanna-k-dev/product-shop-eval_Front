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
import { Link } from 'react-router';

const AppBarre: FC<{}> = ({}) => {
    function appBarLabel(label: string) {
        return (
            <Toolbar
                sx={{

            }}
                >

                <Typography variant="h2" noWrap component="div" sx={{flexGrow: 1}}>
                    {label}
                </Typography>
            </Toolbar>
        );
    }
    const darkTheme = createTheme({
        palette: {
            primary: {
                main: '#F6EDF0',
            },
        },
    });
    return (
        <>



        </>
    );
};

export default AppBarre;