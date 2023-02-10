import styled from "styled-components";

const TopNaviBarContent = styled.div`
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 121;
    background-color: #e2231a;
    display: flex;
    justify-content: space-between;
    align-items: center;
  `;

const SideBar = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    padding-top: 55px;
    height: 100%;
    width: 220px;
    overflow: hidden;
    height: 100%;
    padding-bottom: 20px;
    background-color: #f5f5f5;
    overflow-x: hidden;
    -webkit-overflow-scrolling: touch;
    &:after {
      content: "";
      background: rgba(0, 0, 0, 0.15);
      position: absolute;
      display: block;
      top: 0;
      bottom: 0;
      right: 0;
      width: 1px;
      -webkit-transform: translateZ(0);
    }
  `;


const ContentWrapper = styled.div`
    position: relative;
    height: 100%;
    margin-top: 54px;
    margin-left: 220px;
    z-index: 111;
    background-color: #f5f7fa;
    margin-bottom: 60px!important;
    padding: 15px;
    border-top: 1px solid rgba(0,0,0,.15);
`;

export {TopNaviBarContent, SideBar, ContentWrapper}