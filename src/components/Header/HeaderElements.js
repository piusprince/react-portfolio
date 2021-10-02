import styled from "styled-components";
import {device} from '../../breakpoints'

export const HeaderWrapper = styled.section`
    padding: 2rem 5rem;  
    background-image: linear-gradient(to right, #33345A, #051937);
    display: flex;
    flex-direction: row;
    height: 100vh;
    border-radius: 0 0 2rem 2rem;

    @media ${device.mobileM} {
        height: 90vh;
    }


`

export const HeaderLeftWrapper = styled.div`
    width: 45%;

     @media screen and (min-width: 768px) and (max-width: 1091px) {
         height: 100%;
        margin-top: -5rem;
    }


    @media ${device.tablet} {
        width: 100%;
        margin-top: 25%;
    }

    @media ${device.mobileL} {
       align-self: stretch;
       margin: 16rem 0;

    }

    @media ${device.mobileM} {
        margin: 5rem 0;
        height: 80%;
        padding-top: 5rem;
        padding-bottom: 5rem;
    }

    @media ${device.mobileS} {

        margin: 1rem 0;
        height: 90%;
        padding-top: 2rem ;
    }

    
`


export const HeaderMainText = styled.h1`
    font-size: 4.8rem;
    font-weight: 700;
    color: white;
    text-align: left;
    margin-top: 10rem;

    @media screen and (min-width: 768px) and (max-width: 1024px) {
        padding-bottom: 2rem;
    }

    @media ${device.laptop} {
        text-align: center;
    }

    
    @media ${device.tablet} {
        text-align: center;
    }

    @media ${device.mobileL} {
      display: none;
    }

    
   
`

export const HeaderAltText = styled.h1`
    display: none;

    @media ${device.mobileL} {
        display: block;
        color: white;
        font-size: 4.8rem;
        text-align: center;
        margin: 10rem 0;
    }

    @media ${device.mobileM} {
        display: block;
        color: white;
        font-size: 4.8rem;
        text-align: center;
        margin: 1rem 0;
    }

    @media screen and (min-width: 378px) and (max-width: 420px) {
        margin-top: -3rem;
    }
`

export const HeaderBtn = styled.button`
    padding: 1rem 5rem;
    cursor: pointer;
    background-color: #60ECBD;
    border-radius: 1rem;
    border: 0 solid;
    margin-top: 5rem;
    outline: none;
    animation: pulsate 1s infinite;
   

    &:hover {
        transform: scale(1.2);
        transition: all .2s ease-in;
    }

    @media screen and (min-width: 769px) and (max-width: 1024px) {
        margin-top: -8rem;
        margin-left: 8rem;
    }


    @media ${device.tablet} {
        margin-left: 40%;
    }

    
    @media screen and (min-width: 378px) and (max-width: 420px) {
        margin-top: -3rem;
        margin-left: 8rem;
    }


    @media ${device.mobileL} {
        margin-left: 5rem;
    }

    @media ${device.mobileS} {
        margin-left: 2rem;
        margin-top: 2rem;
    }


`

export const HeaderImg = styled.div`
    display: flex;
    justify-content: flex-end;
    margin: 8rem 0rem 6rem 8rem;
    width: 50%;


    @media ${device.laptop} {
        display: none;
    }


`

export const HeaderSVG = styled.img`
    width: 100%;

`

