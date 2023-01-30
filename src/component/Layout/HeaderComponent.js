import React, { useEffect } from 'react'
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import LogoutIcon from '@mui/icons-material/Logout';
import {useSelector, useDispatch} from 'react-redux';
import Stack from '@mui/material/Stack';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import {UserService} from '../../service/user/user-service.js'

const drawerWidth = 240;

function HeaderComponent() {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [roleId, setRoleId] = React.useState('');
  const item1 = useSelector(state => state.loginState?.skb?.roleItems)

  React.useEffect(() =>{
    let item2 = localStorage.getItem('skb.roleItems')
    console.log('HeaderComponent - useEffect 0', item1, item2);
    if(item1) {
      console.log('HeaderComponent - useEffect 1', JSON.parse(item1)[0].roleId);
      setRoleId(JSON.parse(item1)[0].roleId);
    } else if (item2) {
      console.log('HeaderComponent - useEffect 2', JSON.parse(item2)[0].roleId);
      setRoleId(JSON.parse(item2)[0].roleId);
    }
  }, [])

  const state = useSelector(state => state)
  
  const dispatch = useDispatch();

  

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  //Remove single todo in the list
  const removeTokenItem = () => {
    const newTodoList = {
      token : '',
      expireIn : '',
      tokenType : '',
      userName : '',
      roleItems : '',
      userInfo : '',
      currRoleId : '',
      menuItems : '',
      conditions : '',
    }
    dispatch({type: 'EDIT_LOGINSTATE', payload: newTodoList})
    dispatch({type: 'EDIT_MENUTREE', payload: []})
    logout();
    getRoleItems();
  }

  function logout(){
    localStorage.removeItem('skb.token');
    localStorage.removeItem('skb.expireIn');
    localStorage.removeItem('skb.tokenType');
    localStorage.removeItem('skb.userName');
    localStorage.removeItem('skb.roleItems');
    localStorage.removeItem('skb.userInfo');
    localStorage.removeItem('skb.currRoleId');
    localStorage.removeItem('skb.menuItems');
    localStorage.removeItem('skb.conditions');
    setRoleId('');
  }

  function getRoleItems() {
    console.log('state',state);
    setRoleId(roleItems);
  }

  // const handleChange = (event) => {
  //   setRoleId(event.target.value);
  // };

  function handleRoleIdChange(event) {
    setRoleId(event.target.value);

    let paras = {
      userId: localStorage.getItem('skb.userName'),
      roleId: event.target.value,
    }
    console.log('paras ', paras);
    UserService.getMenu(paras).then(response => {
      console.log('response ', response);
      console.log('response.resultObj ', response.resultObj);
      if (response.status == 1) {
        console.log('state ', state);
        console.log('response.resultObj.menuItems ', response.resultObj.menuItems);
        dispatch({type: 'EDIT_MENUTREE', payload: response.resultObj.menuItems})
      } 
    })
  }

  return (
    <div className="container">
      
      <Button onClick={getRoleItems} variant="contained">getRoleItems</Button>
      <div className="row justify-content-md-center">
        {
          roleId && 
          <Grid
            container
            direction="row"
            justifyContent="flex-end"
          >
            <Stack spacing={2} direction="row">
            <Box sx={{ minWidth: 120}}>
              <FormControl variant="standard" sx={{ m: 1, minWidth: 120 , backgroundColor: 'white'}}>
                <InputLabel id="demo-simple-select-label">RoleId</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={roleId}
                  label="roleId"
                  onChange={handleRoleIdChange}
                  >
                  {
                    JSON.parse(localStorage.getItem('skb.roleItems'))?.map(({ roleId, roleName }) => {

                      return <MenuItem key={roleId} value={roleId}>{roleName}</MenuItem>
                    }
                    )
                  }
                </Select>
              </FormControl>
            </Box>
              

              <IconButton aria-label="logout" onClick={removeTokenItem}>
                <LogoutIcon />
              </IconButton>
            </Stack>
          </Grid>
        }

      </div>
    </div>
    // <nav class="navbar topnavbar" role="navigation">
    //   <div class="navbar-header">
    //       <a class="navbar-brand" href="#/">
    //           <div class="brand-logo">
    //               {/* <img class="img-fluid" src="assets/img/logo.png" alt="App Logo" /> */}
    //           </div>
    //           <div class="brand-logo-collapsed">
    //               {/* <img class="img-fluid" src="assets/img/logo-single.png" alt="App Logo" /> */}
    //           </div>
    //       </a>
    //   </div>
    //   <ul class="navbar-nav mr-auto flex-row">
    //       <li class="nav-item">
    //           <a class="nav-link d-none d-md-block d-lg-block d-xl-block" trigger-resize="">
    //               <em class="fas fa-bars"></em>
    //           </a>
    //           <a class="nav-link sidebar-toggle d-md-none">
    //               <em class="fas fa-bars"></em>
    //           </a>
    //       </li>
    //       <li class="nav-item d-none d-md-block">
    //           <a  class="nav-link">
    //               <em class="icon-user"></em>
    //           </a>
    //       </li>
    //   </ul>
    //   <ul class="navbar-nav flex-row">
    //       <li class="nav-item d-none d-md-block">
    //         <select class="form-control" >
    //           {/* // <option [value]="item.roleId" *ngFor="let item of roleItems">{{item.roleId}} {{item.roleName}}</option> */}
    //         </select>
    //       </li>
    //       <li class="nav-item d-none d-md-block">
    //           <a class="nav-link" >
    //               <em class="fa fa-expand"></em>
    //           </a>
    //       </li>
    //       <li class="nav-item">
    //           <a class="nav-link">
    //               <em class="icon-logout"></em>
    //           </a>
    //       </li>
    //   </ul>
    // </nav>
  )
}

export default HeaderComponent