import React from "react";
import avatar from "../../images/Avatar.png";

const Profile = () => {
  return (
    <section className="profile">
      <img
        src={avatar}
        alt="User Avatar"
        className="profile__content-avatar-image"
      />
      <div className="profile__info">
        <h1 className="profile__info-name">Jacques Cousteau</h1>
        <button className="profile__info-button"></button>
      </div>
      <p className="profile__info-description">Explorador</p>
      <button className="profile__info-add-button"></button>
    </section>
  );
};

export default Profile;
