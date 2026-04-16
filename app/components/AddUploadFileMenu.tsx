import React from 'react'
import { MenuList, MenuItem, ListItemIcon, ListItemText, Paper } from "@mui/material";
import UploadFileIcon from '@mui/icons-material/UploadFile';
import CreateNewFolderIcon from '@mui/icons-material/CreateNewFolder';

function AddUploadFileMenu() {
  return (
    <div>
        <Paper sx={{ width: 320, maxWidth: '100%' }}>
            <MenuList>
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
            </MenuList>
        </Paper>
    </div>
  )
}

export default AddUploadFileMenu