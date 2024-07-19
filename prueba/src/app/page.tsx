'use client'
import Card from "@/Components/Card";
import Modal from "@/Components/Modal";
import { ICardData } from "@/Interfaces/ICard";
import { Container } from "@/Styles/CardStyles";
import { BHome, FormH, IFHome, ImgContH, ImgHome, InpHome } from "@/Styles/HomeStyles";
import { useFormik } from "formik";
import React, { useState } from "react";
import * as Yup from "Yup";

const Home: React.FC = () => {

  const [cards, setCards] = useState<ICardData[]>([]);
  const [search, setSearch] = useState<string>("");
  const [showModalForm, setShowModalForm] = useState(false);
  const [showModalRanking, setShowModalRanking] = useState(false);
  const [editingCard, setEditingCard] = useState<number | null>(null);
  const [isNameEditable, setIsNameEditable] = useState(true);

  const cardSchema = Yup.object({
    name: Yup.string().required('El título es obligatorio'),
    price: Yup.number().required('El precio es obligatorio').min(1, 'Debe ser al menos 1'),
    model: Yup.string().required('El modelo es obligatorio'),
    state: Yup.string().required('El estado es obligatorio'),
  });

  const formik = useFormik({
    initialValues: { name: "", price: 0, state: "", img: "https://http2.mlstatic.com/D_NQ_NP_918178-MLA71783088444_092023-O.webp", model: "" },
    onSubmit: values => { handleSubmit(values) },
    enableReinitialize: true,
    validationSchema: cardSchema
  })

  const handleSubmit = (values: ICardData) => {
    if(editingCard !== null){
      const updatedCards = [...cards];
      updatedCards[editingCard] = values;
      setCards(updatedCards);
      setEditingCard(null);
    }else{
      setCards([...cards, values]);
    }
    setShowModalForm(false);
    formik.resetForm();
  }

  const handleEdit = (index: number)=> {
    const card = cards[index];
    setIsNameEditable(false);
    formik.setValues(card);
    setEditingCard(index);
    setShowModalForm(true);
  }

  const handleDelete = (index: number) => {
    const newCards = [...cards]
    newCards.splice(index,1)
    setCards(newCards)
  }

  const filteredCards = cards.filter(card => card.name.toLowerCase().includes(search.toLowerCase()));

  const sortedCounts = Object.entries(
    cards.reduce((acc, card) => {
      acc[card.name] = (acc[card.name] || 0) + 1;
        return acc;
      }, {} as Record<string, number>)
  ).sort((a, b) => b[1] - a[1]);
  return (
    <div>
      <div className="Home-Title">

        <BHome onClick={() => {setIsNameEditable(true) ;setShowModalForm(true) ; formik.resetForm()}}> Nueva Card </BHome>
        <Modal onClose={() => setShowModalForm(false)} show={showModalForm} >
          <div> {editingCard !== null ? "Editar Card" : "Nueva Card"} </div>
          {JSON.stringify(formik.errors)}
          <ImgContH>
          <ImgHome src="https://http2.mlstatic.com/D_NQ_NP_918178-MLA71783088444_092023-O.webp"></ImgHome>
          </ImgContH>
          <FormH onSubmit={formik.handleSubmit}>
            <IFHome name="name" type="text" value={formik.values.name} onChange={formik.handleChange} placeholder="Name" disabled={!isNameEditable}/>
            <IFHome name="price" type="number" value={formik.values.price} onChange={formik.handleChange} placeholder="price"/>
            <IFHome name="model" type="text" value={formik.values.model} onChange={formik.handleChange} placeholder="model"/>
            <select name="state" onChange={formik.handleChange} >
                  <option value="Nuevo" >Nuevo</option>
                  <option value="Usado">Usado</option>
                  <option value="Casi Nuevo">Casi Nuevo</option>
                </select>
            <button type="submit"> {editingCard !== null ? "Guardar" : "Agregar Card"} </button>
          </FormH>
        </Modal>

        <BHome onClick={()=> setShowModalRanking(true)}> Ranking </BHome>
        <Modal onClose={()=> setShowModalRanking(false)} show={showModalRanking} >
          <div>
          <h3>Teléfono más repetidos</h3>

          <ol>
            {sortedCounts.map(([name, count]) => (
              <li key={name}> {name} : {count} </li>
              ))            
            }
          </ol>
          </div>
        </Modal>

        <InpHome  type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Buscar por título"/>

      </div>
      <h1>Teléfonos</h1>
      <Container>
        {filteredCards.map((card, index) => (
          <Card key={index} data={card} onDelete={()=>handleDelete(index)} onEdit={()=>handleEdit(index)}></Card>
        ))}
      
      </Container>
    </div>
  );
}

export default Home;