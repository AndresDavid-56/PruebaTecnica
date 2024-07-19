import React from "react";
import { IModal } from "@/Interfaces/IModal";
import { M1, M2, BM } from "@/Styles/ModalStyles";

const Modal: React.FC<IModal> =({show, onClose, children})=> {
    if(!show){
        return null;
    }

    return(
        <M1 className="M1" onClick={onClose}>
            <M2 className="M2" onClick={(e)=> e.stopPropagation() }>
                <BM onClick={onClose}>X</BM>
                {children}
            </M2>
        </M1>
    )
}

export default Modal;