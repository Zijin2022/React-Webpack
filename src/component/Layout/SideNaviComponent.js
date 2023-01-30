import React from 'react'
// import "../../css/sidebar.css";
// import SidebarLink from "../Common/SidebarLink";

// import HomeIcon from "@mui/icons-material/Home";
// import SearchIcon from "@mui/icons-material/Search";
// import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
// import MailOutlineIcon from "@mui/icons-material/MailOutline";
// import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
// import ListAltIcon from "@mui/icons-material/ListAlt";
// import PermIdentityIcon from "@mui/icons-material/PermIdentity";
// import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import Collapse from "@mui/material/Collapse";

import People from '@mui/icons-material/People';
import Dns from '@mui/icons-material/Dns';
import PermMedia from '@mui/icons-material/PermMedia';
import Public from '@mui/icons-material/Public';

import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import {UserService} from '../../service/user/user-service.js'
import { useSelector, useDispatch} from 'react-redux';
import { Link } from "react-router-dom";

const drawerWidth = 240;
// interface Props {
//   window?: () => Window;
// }
// let lists = [
  // { 
  //   icon: <People />, 
  //   label: 'Authentication',
  //   items: [
  //     {
  //       label: 'PermMedia',
  //       icon: <PermMedia />,
  //     },
  //     {
  //       label: 'Public',
  //       icon: <Public />,
  //     },
  //   ]
  // },
  // { 
  //   icon: <Dns />, 
  //   label: 'Database',
  //   items:[
  //     {
  //       label: 'InboxIcon',
  //       icon: <InboxIcon />,
  //     },
  //     {
  //       label: 'MailIcon',
  //       icon: <MailIcon />,
  //     },
  //   ]
  // },
  // { icon: <PermMedia />, label: 'Storage' },
  // { icon: <Public />, label: 'Hosting' },
// ];

function SideNaviComponent(props) {
  const [open, setOpen] = React.useState({});
  const [lists, setLists] = React.useState([]);
  const list1 = useSelector(state => state.router?.menuItems);

  React.useEffect(() =>{
    let list2 = localStorage.getItem('skb.menuItems')
    console.log('SideNaviComponent - useEffect 0', list1, list2);
    if(list1) {
      console.log('SideNaviComponent - useEffect 1', JSON.parse(list1));
      setLists(JSON.parse(list1));
    } else if (list2) {
      console.log('SideNaviComponent - useEffect 2', JSON.parse(list2));
      setLists(JSON.parse(list2));
    }
  }, [])

  console.log('SideNaviComponent - lists',lists);

  // const roleItems = useSelector(state => state.loginState?.skb?.roleItems)
  // console.log('roleItems', roleItems );
  // console.log('JSON roleItems', roleItems ? JSON.parse(roleItems) : 'null');

  // let paras = {
  //   userId: localStorage.getItem('skb.userName'),
  //   roleId: localStorage.getItem('skb.currRoleId'),
  // }
  // console.log('paras ', paras);
  // UserService.getMenu(paras).then(response => {
  //   console.log('response ', response);
  //   console.log('response.resultObj ', response.resultObj);
  //   if (response.status == 1) {
  //     console.log('response.resultObj.menuItems ', response.resultObj.menuItems);
  //     setLists(response.resultObj.menuItems);
  //   } 
  // })


  const handleClick = key => () => {
    // console.log('key', key);
    setOpen(
      { 
        ...open,
        [key]: !open[key]
      }
    );
    // console.log('open', open);
  };

  // function setListInit () {
  //   lists.forEach(({label}) => {
  //     console.log('label', label);
  //     handleClick(label);
  //   })
  // };

  // React.useEffect(() => {
  //   setListInit();
  // })
  // const dispatch = useDispatch();

  const gotoUserPage = (paras) => {
    console.log('paras',paras);
  //   dispatch({type: 'EDIT_URL', payload: paras})
  }


  return (
    <div className="sidebar">
        <Box sx={{ display: 'auto' }}>
          {lists && lists.map(({ parentName, menuChildItems }) => {
            return (
              <div key={parentName}>
                <ListItem button onClick={handleClick(parentName)}>
                  <ListItemIcon>
                    <MailIcon />
                  </ListItemIcon>
                  <ListItemText primary={parentName} />
                  {open ? (open[parentName] ? <ExpandLess /> : <ExpandMore/> ) : <ExpandMore />}
                </ListItem>
                <Collapse in={open ? open[parentName] : false} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding dense>
                    {menuChildItems.map(({ funcName: childLabel, funcURL }) => (
                      <ListItem key={childLabel} button component={Link} to={funcURL} alignItems="center">
                        <ListItemIcon sx={{justifyContent: 'center'}} >
                          <MailIcon />
                        </ListItemIcon>
                        <ListItemText primary={childLabel} />
                      </ListItem>
                    ))}
                  </List>
                </Collapse>
              </div>
            );
          })}
        </Box>
    </div>
    // <div>
    //   <div className="aside-inner">
    //     <nav className="sidebar" sidebar-anyclick-close="">
    //       <div>
    //         sidenavi
    //       </div>
    //     </nav>
    //   </div>
    // </div>
  )
}

export default SideNaviComponent