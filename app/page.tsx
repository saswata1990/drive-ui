"use client"
import Image from "next/image";
import { Grid,Paper,Button, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Typography } from "@mui/material"
import AddIcon from '@mui/icons-material/Add';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import FileTable from "./components/FileTable";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import AddUploadFileMenu from "./components/AddUploadFileMenu"; 
import React, { useState } from "react";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import CreateNewFolderIcon from '@mui/icons-material/CreateNewFolder';
import Topbar from "./components/Topbar";
import Sidemenu from "./components/Sidemenu";










export default function Home() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div>
      <Grid container spacing={2}>
          <Grid size={12} >
            <Topbar />
          </Grid>
          <Grid size={2} sx={{ mx: 1 }}>
            <Button variant="outlined"  size="large"  startIcon={<AddIcon /> } aria-controls={open ? 'upload-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onClick={handleClick}
              id="basic-button" 
              sx={{ width: 320, maxWidth: '100%' }}
            >
              New
            </Button>
            <Menu id="upload-menu" anchorEl={anchorEl} open={open} onClose={handleClose}>
                <MenuItem>
                    <ListItemIcon>
                        <UploadFileIcon fontSize="small" />
                    </ListItemIcon>
                    <ListItemText>Upload File</ListItemText>
                </MenuItem>
                <MenuItem>
                    <ListItemIcon>
                        <CreateNewFolderIcon fontSize="small" />
                    </ListItemIcon>
                    <ListItemText>Upload Folder</ListItemText>
                </MenuItem>
            </Menu>
            <Sidemenu />
          </Grid>
          <Grid size={9} component={Paper} sx={{px:2, pt:2}}>
            <Button variant="text" color="primary" size="large"
              aria-controls={open ? 'upload-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onClick={handleClick}
              id="basic-button" 
            >
              <Typography variant="h4" sx={{color:'black'}}>My Drive</Typography>
              <ArrowDropDownIcon sx={{color:'black'}}/>
            </Button>
            
            <FileTable />
            
          </Grid>
      </Grid>
    </div>
  );
}
