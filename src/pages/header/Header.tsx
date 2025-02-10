import {FC} from 'react';
import {createTheme, ThemeProvider} from "@mui/material/styles";

import Stack from "@mui/material/Stack";
import * as React from "react";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Typography from "@mui/material/Typography";
import AppBarre from "../../components/header/AppBarre";

const Header: FC<{}> = ({}) => {


    return (
        <header>
            <AppBarre/>
        </header>
    );
};

export default Header;