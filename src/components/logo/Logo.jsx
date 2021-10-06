import React from "react";
import logoImage from "../../assets/images/illustration-woman-online-mobile.svg";
import logoShadowImage from "../../assets/images/bg-pattern-mobile.svg";
import { StyledLogo, StyledLogoShadow, StyledLogoContainer } from "./Logo.styled";

const Logo = () => {
    return (
        <>
            <StyledLogoContainer>
                <StyledLogo src={logoImage} alt="logo" />
                <StyledLogoShadow src={logoShadowImage} alt="logo shadow" />
            </StyledLogoContainer>
        </>
    );
};

export default Logo;
