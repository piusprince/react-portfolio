import styled from "styled-components";
import {device} from '../../breakpoints'

export const HeaderWrapper = styled.section`
    padding: 2rem 5rem;    
    background-color: #051937;   
    display: flex;
    flex-direction: row;
    /* height: 100vh; */

    @media ${device.mobileL} {
        
    }
    
`

export const HeaderLeftWrapper = styled.div`
    width: 45%;

    @media ${device.tablet} {
        width: 100%;
    }
`


export const HeaderMainText = styled.p`
    font-size: 4.8rem;
    font-weight: 700;
    color: white;
    text-align: left;
    margin-top: 10rem;


    @media ${device.mobileS} {
        /* color: red;  */
    }
   
    @media ${device.mobileL} {
        color: red;
    }
    
    @media ${device.tablet} {
        text-align: center;
    }

    

`

export const HeaderBtn = styled.button`
    padding: 1rem 5rem;
    cursor: pointer;
    background-color: #60ECBD;
    border-radius: 1rem;
    border: 0 solid;
    margin-left: 22rem;
    margin-top: 5rem;
   

    &:hover {
        transform: scale(1.2);
        transition: all .2s ease-in;
    }

    &:focus {
        outline: none;
        animation: pulsate 1s infinite;
    }

    @media ${device.tablet} {
        margin-left: 40%;
    }

    
    @media ${device.mobileL} {
        
    }

    @media ${device.laptop} {
        white-space: nowrap;
    }
`

export const HeaderImg = styled.div`
    display: flex;
    justify-content: flex-end;
    margin: 8rem 0rem 6rem 8rem;
    width: 50%;

    @media ${device.tablet} {
        display: none;
    }

`

export const HeaderSVG = styled.img`
    width: 100%;

`

