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
                        <NavbarLink to="/FantasyTennisLeague/"> Home</NavbarLink>
                        <NavbarLink to="/FantasyTennisLeague/fixtures"> Fixtures</NavbarLink>
                        <NavbarLink to="/FantasyTennisLeague/players"> Players</NavbarLink>
                        <NavbarLink to="/FantasyTennisLeague/results"> Results</NavbarLink>
                        <OpenLinksButton onClick={() => { setExtendNavbar((curr) => !curr); }}>{extendNavbar ? <> &#10005; </> : <>&#8801;</>}</OpenLinksButton>
                    </NavbarLinkContainer>
                </RightContainer>
            </NavbarInnerContainer>
            {extendNavbar && (
                <NavbarExtendedContainer>
                    <NavbarLinkExtended to="FantasyTennisLeague/"> Home</NavbarLinkExtended>
                    <NavbarLinkExtended to="/FantasyTennisLeague/fixtures"> Fixtures</NavbarLinkExtended>
                    <NavbarLinkExtended to="/FantasyTennisLeague/players"> Players</NavbarLinkExtended>
                    <NavbarLinkExtended to="/FantasyTennisLeague/results"> Results</NavbarLinkExtended>
                </NavbarExtendedContainer>
            )}
        </NavbarContainer>
    )
}

export default Navbar