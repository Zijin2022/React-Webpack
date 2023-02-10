import React from 'react'
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import {Button} from 'react-bootstrap';

function userEdit() {
  const navigate = useNavigate()

  const gotoHome = () => {
    navigate('/role-limit')
  };

  const SkForm = styled.div`
    margin-bottom: 1.25rem;
    border-top-width: 3px;
    border-color: #cfdbe2;
    box-shadow: 0 1px 1px rgb(0 0 0 / 5%);
    position: relative;
    display: flex;
    flex-direction: column;
    min-width: 0;
    word-wrap: break-word;
    background-color: #fff;
    background-clip: border-box;
    border: 1px solid rgba(0,0,0,.125);
    border-radius: 0.25rem;
  `;

  const CardHeader = styled.div`
    background-color: #e4f0fe;
    color: #5d8cff;
    border-bottom: 0;
    padding: 0.3rem;
    margin-bottom: 0;
    font-size: 1.2rem;
    display: flex;
    justify-content: space-between;
    border-radius: calc(0.25rem - 1px) calc(0.25rem - 1px) 0 0;
  `;

  const StyledButton = styled(Button).attrs(({type}) =>({
    type: type || "button"
  }))`
    border: 2px solid tomato;
    background-color: tomato;
    color: white;
  `;

  return (
        <SkForm>
          <CardHeader>
            <div className="card-title float-left">
              <span>Sys-User</span>
            </div>
            <div className="float-right">
              <StyledButton onClick={gotoHome}>
                <em className="bi bi-browser-chrome mr-1"></em>goToHome
              </StyledButton>
            </div>
          </CardHeader>
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
        </SkForm>

    // <div className="sk-form">
    // <div className="card-header">
    //   <div className="card-title float-left">
    //     <span>Sys-User</span>
    //   </div>
    //   <div className="float-right">
    //     <button className="btn mr-1 btn-warning" type="button" onClick={gotoHome}>
    //       <em className="bi bi-browser-chrome mr-1"></em>goToHome
    //     </button>
    //   </div>
    // </div>
    // <div className="sk-form-body">
    //   <div className="form-input text-left">
    //     <div className="form-group row justify-content-center">
    //       <label className="col-form-label col-sm-1 col-md-1" style={{padding: '7px 0px'}}>代碼類別</label>
    //       <div className="col-sm-2 col-md-2">
    //         <input className="form-control"></input>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    // </div>

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