import styled from "styled-components";

export const StyledCardContainer = styled.div`
    background: white;
    margin: 8em 1em 2em 1em;
    border-radius: var(--radius-corner);
    text-align: center;
    padding-top: 9.4em;
    width: 375px;
    box-shadow: var(--box-shadow-light);
    padding-bottom: 4em;

    @media (min-width: 776px) {
        width: 800px;
        justify-items: center;
        padding-top: 2em;
}
`;