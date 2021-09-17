import React, { useState } from "react";
import CardList from "./CardList";

function Card(){

    const [CardItems, setCardItems] = useState([
        {
            id:'1',
            src:'https://picsum.photos/200',
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus tempora earum quia accusantium consectetur laboriosam quibusdam delectus esse fugiat, molestias maxime quae provident modi laudantium nesciunt cumque natus quos quasi?."
        },
        {
            id:'2',
            src:'https://picsum.photos/200',
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus tempora earum quia accusantium consectetur laboriosam quibusdam delectus esse fugiat, molestias maxime quae provident modi laudantium nesciunt cumque natus quos quasi?."
        },
        {
            id:'3',
            src:'https://picsum.photos/200',
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus tempora earum quia accusantium consectetur laboriosam quibusdam delectus esse fugiat, molestias maxime quae provident modi laudantium nesciunt cumque natus quos quasi?."
        },
        {
            id:'4',
            src:'https://picsum.photos/200',
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus tempora earum quia accusantium consectetur laboriosam quibusdam delectus esse fugiat, molestias maxime quae provident modi laudantium nesciunt cumque natus quos quasi?."
        },
        {
            id:'5',
            src:'https://picsum.photos/200',
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus tempora earum quia accusantium consectetur laboriosam quibusdam delectus esse fugiat, molestias maxime quae provident modi laudantium nesciunt cumque natus quos quasi?."
        },
        {
            id:'6',
            src:'https://picsum.photos/200',
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus tempora earum quia accusantium consectetur laboriosam quibusdam delectus esse fugiat, molestias maxime quae provident modi laudantium nesciunt cumque natus quos quasi?."
        },
        {
            id:'7',
            src:'https://picsum.photos/200',
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus tempora earum quia accusantium consectetur laboriosam quibusdam delectus esse fugiat, molestias maxime quae provident modi laudantium nesciunt cumque natus quos quasi?."
        },
        {
            id:'8',
            src:'https://picsum.photos/200',
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus tempora earum quia accusantium consectetur laboriosam quibusdam delectus esse fugiat, molestias maxime quae provident modi laudantium nesciunt cumque natus quos quasi?."
        },
        {
            id:'9',
            src:'https://picsum.photos/200',
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus tempora earum quia accusantium consectetur laboriosam quibusdam delectus esse fugiat, molestias maxime quae provident modi laudantium nesciunt cumque natus quos quasi?."
        },
        {
            id:'10',
            src:'https://picsum.photos/200',
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus tempora earum quia accusantium consectetur laboriosam quibusdam delectus esse fugiat, molestias maxime quae provident modi laudantium nesciunt cumque natus quos quasi?."
        },
    ]);
    
    const handleDelete = (id) =>{
        const newCardItems = CardItems.filter((item) => item.id !== id);
        setCardItems(newCardItems);
    }
    return(
        <CardList CardItems={CardItems} handleDelete={handleDelete}/>
    );
}
export default Card;