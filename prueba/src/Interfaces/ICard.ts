export interface ICard {
    data: ICardData,
    onDelete: ()=> void,
    onEdit: ()=> void,
}

export interface ICardData {
    name: string,
    img: string,
    price: number,
    model: string,
    state: string,
}
