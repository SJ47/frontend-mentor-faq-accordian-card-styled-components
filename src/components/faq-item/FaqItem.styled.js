import styled from "styled-components";

export const FaqItemContainer = styled.div`
    text-align: left;
    padding-top: 1.5em;
    padding-bottom: 1.5em;
    border-bottom: 1px solid var(--primary-color-divider);
    width: 80%;
    margin: 0 auto;
    color: var(--quaternary-color-text);
    /* display: flex;
    flex-direction: row; */
    align-items: center;
    justify-content: space-between;

    &:hover {
        color: orange;
        cursor: pointer;
    }

    &:hover.active {
        color: pink;
        cursor: pointer;
    }

    div {
        display: flex;
        justify-content: space-between;
    }
    
    img {
        height: 100%;
        cursor: pointer;
    }

    p {
        overflow: hidden;
    }
`;

