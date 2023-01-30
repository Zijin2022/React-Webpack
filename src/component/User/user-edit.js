import React from 'react'
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { useNavigate } from "react-router-dom";


function userEdit() {
  const navigate = useNavigate()

  const gotoHome = () => {
    navigate('/')
  };

  return (
    // <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
    //     <Toolbar />
    //     User Page
    //     <Stack spacing={2} direction="row">
    //         <Button onClick={gotoHome} variant="contained">goToHome</Button>

    //         <button className="btn mr-1 btn-warning" type="button" >
    //           <em className="bi bi-browser-chrome mr-1"></em>詢價送出
    //         </button>
    //     </Stack>

    // </Box>
        <div className="sk-form">
          <div className="card-header">
            <div className="card-title float-left">
              <span>Sys-User</span>
            </div>
            <div className="float-right">
              <button className="btn mr-1 btn-warning" type="button" onClick={gotoHome}>
                <em className="bi bi-browser-chrome mr-1"></em>goToHome
              </button>
            </div>
          </div>
    
          <div className="sk-form-body">
            <div className="form-input text-left">
              <div className="form-group row justify-content-center">
                <label className="col-form-label col-sm-1 col-md-1" style={{padding: '7px 0px'}}>代碼類別</label>
                <div className="col-sm-2 col-md-2">
                  <input className="form-control"></input>
                </div>
              </div>
            </div>
          </div>
        </div>
        // <div className="card card-default">
        //   <div className="card-header">
        //   <div className="float-left">
        //     <select className="form-control">
        //       <option value="10">10</option>
        //       <option value="30">30</option>
        //       <option value="50">50</option>
        //     </select>
        //   </div>
        //   </div>
        // </div>
  )
}

export default userEdit