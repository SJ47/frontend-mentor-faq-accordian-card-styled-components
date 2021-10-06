import React, { useState } from "react";
import FaqList from "../../components/faq-list/FaqList";
import Logo from "../../components/logo/Logo";
import { StyledCardContainer } from "./CardContainer.styled";

const CardContainer = () => {
    const [clicked, setClicked] = useState(false);

    const handleFaqItemClicked = (id) => {
        // console.log("Clicked", id);
        if (clicked === id) {
            return setClicked(null);
        }
        setClicked(id);
    };

    return (
        <StyledCardContainer>
            <Logo />
            <h1>FAQ</h1>
            <FaqList
                handleFaqItemClicked={handleFaqItemClicked}
                clicked={clicked}
            />
        </StyledCardContainer>
    );
};

export default CardContainer;
