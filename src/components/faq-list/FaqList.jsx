import React from "react";
import FaqItem from "../faq-item/FaqItem";
import Data from "../../data";

const FaqList = ({ handleFaqItemClicked, clicked }) => {
    const faqs = Data.map((faq) => {
        return (
            <FaqItem
                key={faq.id}
                faq={faq}
                handleFaqItemClicked={handleFaqItemClicked}
                onClick={() => handleFaqItemClicked(faq.id)}
                active={clicked === faq.id}
            />
        );
    });

    return <div>{faqs}</div>;
};

export default FaqList;
