import React from 'react'
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import * as moment from 'moment';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import {UserService} from '../../service/user/user-service.js'
import { useSelector, useDispatch} from 'react-redux';
import { useNavigate } from "react-router-dom";
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

const drawerWidth = 240;

function ContentComponent() {

  const state = useSelector(state => state)
  const menuItems = useSelector(state => state.url?.menuItems)
  const roleItems = useSelector(state => state.loginState?.skb?.roleItems)

  const dispatch = useDispatch();

  const para = {
    userName:'M00000',
    password:'0'
  }
  function getMemuTree () {
    let paras = {
      userId: localStorage.getItem('skb.userName'),
      roleId: localStorage.getItem('skb.currRoleId'),
    }
    console.log('paras ', paras);
    UserService.getMenu(paras).then(response => {
      console.log('response ', response);
      console.log('response.resultObj ', response.resultObj);
      if (response.status == 1) {
        console.log('state ', state);
        console.log('response.resultObj.menuItems ', response.resultObj.menuItems);
        
        localStorage.setItem('skb.menuItems', JSON.stringify(response.resultObj.menuItems));

        dispatch({type: 'EDIT_MENUTREE', payload: response.resultObj.menuItems})
      } 
    })
  };

  const [loginState,setLoginState] =  React.useState({});

  const addTokenItem = () => {
    const loginState = {
      token : localStorage.getItem('skb.token') ?? '',
      expireIn : localStorage.getItem('skb.expireIn') ?? '',
      tokenType : localStorage.getItem('skb.tokenType') ?? '',
      userName : localStorage.getItem('skb.userName') ?? '',
      roleItems : localStorage.getItem('skb.roleItems') ?? '',
      userInfo : localStorage.getItem('skb.userInfo') ?? '',
      currRoleId : localStorage.getItem('skb.currRoleId') ?? '',
      menuItems : localStorage.getItem('skb.menuItems') ?? '',
      conditions : localStorage.getItem('skb.conditions') ?? '',
    }
    console.log('loginState',loginState);
    dispatch({type: 'EDIT_LOGINSTATE', payload: loginState})
  }

  function login(){
    if(!roleItems) {
      UserService.login(para).then(response => {
        console.log('login - response ', response);
        console.log('login - response.resultObj ', response.resultObj);
        if (response.status == 1) {
          let roleItems = response.resultObj['roleItems'];
          let userInfo = response.resultObj['userItem'];
          let tokenObj = response.resultObj['token'];
          localStorage.setItem('skb.token', tokenObj['token']);
          localStorage.setItem('skb.expireIn', tokenObj['expireIn']);
          localStorage.setItem('skb.tokenType', tokenObj['tokenType']);
          localStorage.setItem('skb.userName', tokenObj['userName']);
          localStorage.setItem('skb.roleItems', JSON.stringify(roleItems));
          localStorage.setItem('skb.userInfo', JSON.stringify(userInfo));
          localStorage.setItem('skb.currRoleId', roleItems[0].roleId);
          localStorage.setItem('skb.userLoginTime', moment(new Date()).format('YYYY/MM/DD HH:mm:ss'));
    
          addTokenItem();

          console.log('login - localStorage', localStorage);
          console.log('login - state', state);

          getMemuTree();
        } 
      })
    }
  }

  function getRoleItems(){
    console.log('roleItems', localStorage.getItem('skb.roleItems'));
  }

  const navigate = useNavigate()
  const gotoPage = () => {
    navigate('/user');
  }

  function handleRoleIdChange(event) {
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

  // gotoPage(url);
  // const [roleId, setRoleId] = React.useState('');
  // const handleChange = (event) => {
  //   setRoleId(event.target.value);
  // };

  return (
    <div>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Stack spacing={2} direction="row">
          <Button onClick={login} variant="contained">login</Button>
          <Button onClick={getMemuTree} variant="contained">getMemuTree</Button>
          <Button onClick={getRoleItems} variant="contained">getRoleItems</Button>
          <Button onClick={gotoPage} variant="contained">gotoUserPage</Button>
        </Stack>
        <Typography paragraph>
          Consequat 
        </Typography>
      </Box>
    </div>
  )
}

export default ContentComponent