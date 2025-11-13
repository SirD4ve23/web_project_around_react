/* import React from "react"; */
import Elements from "../Elements/Elements";

const Cards = ({ elements, setCards }) => {
  const handleLike = (_id) => {
    setCards((prev) =>
      prev.map((card) =>
        card._id === _id ? { ...card, isLiked: !card.isLiked } : card
      )
    );
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
