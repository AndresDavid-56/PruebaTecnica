import styled from "styled-components";

export const M1 = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
`;

export const M2 = styled.div`
    background: white;
    padding: 20px;
    border-radius: 8px;
    position: relative;
`;

export const BM = styled.button`
    position: absolute;
    top: 10px;
    right: 10px;
    background: red;
    border: none;
    color: white;
    border-radius: 50%;
    width: 24px;
    height: 24px;
    cursor: pointer;
    font-size: 1rem;
`;
