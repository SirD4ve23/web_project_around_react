import React from "react";
/* import trash from "../../images/Trash.svg"; */

const Elements = ({ name, link, isLiked, _id, handleLike }) => {
  const like = isLiked
    ? "elements__info-button_active"
    : "elements__info-button";
  console.log(isLiked, "isLiked");
  return (
    <div className="elements">
      <img src={link} alt={name} className="elements__image" />
      <button className="elements__trash"></button>
      <div className="elements__info">
        <p className="elements__info-title">{name}</p>
        <button className={like} onClick={() => handleLike(_id)}></button>
      </div>
    </div>
  );
};

export default Elements;
