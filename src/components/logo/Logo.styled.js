import styled from "styled-components";

export const StyledLogoContainer = styled.div`
    height: 0;
`;

export const StyledLogo = styled.img`
    position: relative;
    top: -290px;
    right: 15px;

    @media (min-width: 776px) {
        top: -50px;
        right: 280px;
        width: 500px;
    }
`;

export const StyledLogoShadow = styled.img`
    position: relative;
    top: -380px;

    @media (min-width: 776px) {
        top: -220px;
        right: 270px;
        width: 500px;
    }
`;