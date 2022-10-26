import React, { useState } from 'react';
import {
    NavbarContainer,
    LeftContainer,
    RightContainer,
    NavbarInnerContainer,
    NavbarExtendedContainer,
    NavbarLinkContainer,
    NavbarLinkExtended,
    NavbarLink,
    Logo,
    OpenLinksButton
} from './Navbar.style';

import LogoImg from '../images/ftl-logo.png';


function Navbar() {
    const [extendNavbar, setExtendNavbar] = useState(false);


    return (
        <NavbarContainer extendNavbar={extendNavbar}>
            <NavbarInnerContainer>
                <LeftContainer>
                    <Logo src={LogoImg}></Logo>
                </LeftContainer>
                <RightContainer>
                    <NavbarLinkContainer>
                        <NavbarLink to=""> Home</NavbarLink>
                        <NavbarLink to="/fixtures"> Fixtures</NavbarLink>
                        <NavbarLink to="/players"> Players</NavbarLink>
                        <NavbarLink to="/results"> Results</NavbarLink>
                        <OpenLinksButton onClick={() => { setExtendNavbar((curr) => !curr); }}>{extendNavbar ? <> &#10005; </> : <>&#8801;</>}</OpenLinksButton>
                    </NavbarLinkContainer>
                </RightContainer>
            </NavbarInnerContainer>
            {extendNavbar && (
                <NavbarExtendedContainer>
                    <NavbarLinkExtended to=""> Home</NavbarLinkExtended>
                    <NavbarLinkExtended to="/fixtures"> Fixtures</NavbarLinkExtended>
                    <NavbarLinkExtended to="/players"> Players</NavbarLinkExtended>
                    <NavbarLinkExtended to="/results"> Results</NavbarLinkExtended>
                </NavbarExtendedContainer>
            )}
        </NavbarContainer>
    )
}

export default Navbar