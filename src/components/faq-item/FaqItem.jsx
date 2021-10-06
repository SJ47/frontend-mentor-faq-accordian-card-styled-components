import React from "react";
import { FaqItemContainer } from "./FaqItem.styled";
import faqArrowImage from "../../assets/images/icon-arrow-down.svg";

const FaqItem = ({ faq, active, handleFaqItemClicked }) => {
    return (
        <>
            <FaqItemContainer onClick={() => handleFaqItemClicked(faq.id)}>
                <div className={`accordion_item ${active ? "active" : ""}`}>
                    {faq.question}
                    <img src={faqArrowImage} alt="down arrow" />
                </div>
                <div className={`answer_wrapper ${active ? "open" : ""}`}>
                    <p>{faq.answer}</p>
                </div>
            </FaqItemContainer>
        </>
    );
};

export default FaqItem;
