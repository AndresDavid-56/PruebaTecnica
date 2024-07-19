import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;

export const CardContainer = styled.div`
    margin: 10px;
    display: grid;
    position: relative;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 8px;
    background-color: white;
    border-radius: 8px;
    padding: 15px;
    box-shadow: 0px 5px 15px 0px rgba(0, 0, 0, 0.25);
    width: fit-content;
    text-align: left;
    transition: transform 0.6s ease-in-out  ;

    &:hover {
        transform: translateY(-10px);
        transition: transform 0.6s ease-in-out;
    }
`;

export const ImgCont = styled.div`
    display: flex; 
    justify-content: center;
    align-items: center;
`;


export const Imagen = styled.img`
    height: 7rem;
    width: 5rem;
    
`;

export const CardName = styled.div`
    font-weight: bold;
    text-align: center;
`;

export const XButton = styled.button`
    position: absolute;
    top: 10px;
    right: 10px;
    border-radius: 1rem;
    background-color: red;
    color: white;
    border: none;

    &:hover{
        background-color: #ff6347;
    }
`;

export const EButton = styled.button`
    background-color: yellow;
    padding: 0.2rem;
    border-radius: 1rem;
    border: none;

    &:hover{
        background-color: #ff15;
    }
`;