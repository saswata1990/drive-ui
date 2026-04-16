"use client"

import React, { useState } from 'react'
import { Grid,Paper,Button, TableContainer, Table, TableHead, TableRow, TableCell, TableBody } from "@mui/material"
import AddIcon from '@mui/icons-material/Add';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DownloadIcon from '@mui/icons-material/Download';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import { Console } from 'console';

interface File {
    id: string;
  name: string;
  owner: string;
  datemodified: string;
  filesize: string;
}

interface FileTableProps{
    files: File[];
}

function createFile(
    id: string,
  name: string,
  owner: string,
  datemodified: string,
  filesize: string

) {
  return { id,name, owner, datemodified, filesize,  };
}

const rows = [
  createFile('1', 'File 1', 'John Doe', '2023-01-01', '1.2 MB'),
  createFile('2', 'File 2', 'Jane Smith', '2023-01-02', '2.5 MB'),
  createFile('3', 'File 3', 'Bob Johnson', '2023-01-03', '3.1 MB'),
  createFile('4', 'File 4', 'Alice Williams', '2023-01-04', '4.8 MB'),
  createFile('5', 'File 5', 'Charlie Brown', '2023-01-05', '5.3 MB'),
];


function FileTable() {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const open = Boolean(anchorEl);

    const handleMenuOpen = (event: React.MouseEvent<HTMLButtonElement>, file: File) => {
      setAnchorEl(event.currentTarget);
      setSelectedFile(file);
    };

    const handleClose = () => {
      setAnchorEl(null);
      setSelectedFile(null);
    };

    function handleDownload(file: File): void {
        console.log("Download file", file);
        handleClose();
    }

    function handleRename(file: File): void {
        console.log("Rename file", file);
        handleClose();
    }

    function handleMenuItemClick(event: React.MouseEvent<HTMLTableRowElement, MouseEvent>, row: { id: string; name: string; owner: string; datemodified: string; filesize: string; }): void {
        console.log("Row clicked", row);
    }

  return (
    <TableContainer >
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell>Owner</TableCell>
                    <TableCell>Date Modified</TableCell>
                    <TableCell>File Size</TableCell>
                    <TableCell></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <TableRow key={row.id} hover role="checkbox" sx={{ cursor: 'pointer' }} onClick={(event) => handleMenuItemClick(event, row)}>
                      <TableCell>{row.name}</TableCell>
                      <TableCell>{row.owner}</TableCell>
                      <TableCell>{row.datemodified}</TableCell>
                      <TableCell>{row.filesize}</TableCell>
                      <TableCell>
                        <Button variant='text'
                            aria-controls={open ? 'file-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                            onClick={(event) => handleMenuOpen(event, row)}
                            id="basic-button"
                        >
                            <MoreVertIcon />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>

              <Menu id="file-menu" anchorEl={anchorEl} open={open} onClose={handleClose}>
                  <MenuItem onClick={() => selectedFile && handleDownload(selectedFile)}>
                      <ListItemIcon>
                          <DownloadIcon fontSize="small" />
                      </ListItemIcon>
                      <ListItemText>Download</ListItemText>
                  </MenuItem>
                  <MenuItem onClick={() => selectedFile && handleRename(selectedFile)}>
                      <ListItemIcon>
                          <DriveFileRenameOutlineIcon fontSize="small" />
                      </ListItemIcon>
                      <ListItemText>Rename</ListItemText>
                  </MenuItem>
              </Menu>
            </TableContainer>
  )
}

export default FileTable