import styled from "styled-components";
import { Link } from "react-router-dom";


export const NavbarContainer = styled.nav`
    width: 100%;
    height: ${(props) => (props.extendNavbar ? "100vh" : "80px")};
    background-color: #3FA9F5;
    display: flex;
    flex-direction: column;

    @media (min-width: 700px) {
        height: 200px;
    }
`;

export const NavbarDividerVR = styled.nav`
  border-left: 6px solid white;
  height: 50px;

    @media (max-width: 700px) {
        display:none;
    }
`;

export const NavbarDividerHR = styled.nav`
  border-left: 100px solid white;
  height: 5px;

    @media (min-width: 700px) {
        display:none;
    }
`;

export const LeftContainer = styled.div`
    flex: 70%;
    display: flex;
    align-items: center;
    /* padding-left: 5%; */
`;

export const RightContainer = styled.div`
    flex: 30%;
    display: flex;
    justify-content: flex-end;
    padding-left: 50px;
`;


export const NavbarInnerContainer = styled.div`
    width: 100%;
    height: 80px;
    display: flex;
`;

export const NavbarLinkContainer = styled.div`
    display: flex;
`;

export const NavbarLink = styled(Link)`
    color: white;
    font-size: x-large;
    font-family: Arial, Helvetica, sans-serif;
    text-decoration: none;
    margin: 10px;

    @media (max-width: 700px) {
        display: none;
    }
`;

export const NavbarLinkExtended = styled(Link)`
    color: white;
    font-size: x-large;
    font-family: Arial, Helvetica, sans-serif;
    text-decoration: none;
    margin: 10px;
`;


export const Logo = styled.img`
    height: auto;
    width:200px;
    margin-top: 120px;

    @media (max-width: 700px) {
    max-width: 80px;
    height: auto;
    margin-top: 0px;
    }
`;

export const OpenLinksButton = styled.button`
    width: 70px;
    height: 50px;
    background: none;
    border: none;
    color: white;
    font-size: 45px;
    cursor: pointer;

    @media (min-width: 700px) {
        display: none;
    }
`;

export const NavbarExtendedContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (min-width: 700px) {
        display: none;
    }
`;