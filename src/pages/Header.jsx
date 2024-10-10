import React,{useState} from 'react';
import styled from 'styled-components';
import { MdOutlineLanguage } from "react-icons/md";
import logo from './img/logo.png';

const HeaderWrapper = styled.div`
    width: 100%;
    height: 60px;
    background: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const HeaderIcon = styled(MdOutlineLanguage)`
    width: 30px;
    height: 30px;
    margin: 0;
    padding: 0;
    margin-right: 20px;
    color: gray;
    &:hover{
        color: black;
    }
`

const Logo = styled.img`
    padding: 0;
    margin: 0;
    margin-left: 20px;
    height: 30px;
`

const Header = () => {

    return(
        <HeaderWrapper>
            <Logo src={logo}/>
            <HeaderIcon></HeaderIcon>
        </HeaderWrapper>
    );
};

export default Header;