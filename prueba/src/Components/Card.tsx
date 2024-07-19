import React from "react";
import { ICard } from "@/Interfaces/ICard";
import {CardContainer, CardName, EButton, Imagen, ImgCont, XButton} from "@/Styles/CardStyles"

const Card: React.FC<ICard> = ( {data, onDelete, onEdit} ) => {
    return (
        <CardContainer className="CardContainer">
            <XButton onClick={onDelete}> X </XButton>
            <ImgCont>
                <Imagen src={data.img} alt="Celular"></Imagen>
            </ImgCont>
            
            <CardName> {data.name} </CardName>
            <div> Precio: $ {data.price} </div>
            <div> Estado: {data.state} </div>
            <div> Modelo: {data.model} </div>
            <EButton onClick={onEdit} > Editar </EButton>
        </CardContainer>
    )
}


export default Card;