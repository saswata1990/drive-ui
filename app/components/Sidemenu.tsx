import React from 'react'
import { MenuList, MenuItem, ListItemIcon, Typography, LinearProgress, Stack, Menu } from '@mui/material';
import { AccessTime, Cloud, Delete, Home, People, Share, Star, WarningAmber } from '@mui/icons-material';

function Sidemenu() {
  return (
    <div>
        <MenuList>
          <MenuItem>
            <ListItemIcon>
                <Home fontSize="small" />
              </ListItemIcon>
              <Typography variant="inherit">Home</Typography>
          </MenuItem>
          <MenuItem>
            <ListItemIcon>
              <People fontSize="small" />
            </ListItemIcon>
            <Typography variant="inherit">Shared with me</Typography>
          </MenuItem>
          <MenuItem>
            <ListItemIcon>
              <AccessTime fontSize="small" />
            </ListItemIcon>
            <Typography variant="inherit">Recent</Typography>
          </MenuItem>
          <MenuItem>
            <ListItemIcon>
              <Star fontSize="small" />
            </ListItemIcon>
            <Typography variant="inherit">Starred</Typography>
          </MenuItem>
          <MenuItem>
            <ListItemIcon>
              <WarningAmber fontSize="small" />
            </ListItemIcon>
            <Typography variant="inherit">Spam</Typography>
          </MenuItem>
          <MenuItem>
            <ListItemIcon>
              <Delete fontSize="small" />
            </ListItemIcon>
            <Typography variant="inherit">Trash</Typography>
          </MenuItem>
          <MenuItem>
            <ListItemIcon>
              <Cloud fontSize="small" />
            </ListItemIcon>
            <Typography variant="inherit" sx={{width:'100%'}}>Storage (73% full)</Typography>
            
          </MenuItem>
        </MenuList>
       <Stack sx={{px:2}}>
          <LinearProgress variant="determinate" value={73}  color="primary"/>
          <Typography variant='caption'>11.03 GB of 15 GB used</Typography>
       </Stack>
       

    </div>
    
  )
}

export default Sidemenu