/* import React from "react"; */
import Elements from "../Elements/Elements";

const Cards = ({ elements, setCards }) => {
  const handleLike = (_id) => {
    console.log(_id, "_id");
    elements.forEach((element) => {
      if (element._id === _id) {
        console.log("Herer");
        element.isLiked ? false : true;
      }
    });
    setCards(elements);
  };
  return (
    <section className="cards">
      {elements.map((elements) => (
        <Elements key={elements._id} {...elements} handleLike={handleLike} />
      ))}
    </section>
  );
};

export default Cards;
