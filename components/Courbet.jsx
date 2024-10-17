import React, { useState } from "react";
import vangogh from "../src/avatar-vangogh.jpg";
import postVangogh from "../src/post-vangogh.jpg";
import heart from "../src/icon-heart.png";
import share from "../src/icon-dm.png";
import comment from "../src/icon-comment.png";
import data from "../data.js";

export default function Courbet() {
  const [userData, setUserData] = useState(data);

  return (
    <div>
      {userData.map((user) => (
        <div key={user.username}>
          <section className="user-info">
            <img src={user.avatar} className="avatar" alt="user picture" />
            <div>
              <h3 className="user-full--name">{user.name}</h3>
              <h3 className="location-text">{user.location}</h3>
            </div>
          </section>

          <section className="post-image--container">
            <img src={user.post} className="post-image" alt="post image" />
          </section>

          <section className="body">
            <div className="icon-container">
              <img src={heart} className="icon" alt="likes" />
              <img src={comment} className="icon" alt="comment" />
              <img src={share} className="icon" alt="share" />
            </div>
            <h3 className="likes">{user.likes} likes</h3>
            <h3 className="username-caption">
              {user.username} <span>{user.comment}</span>
            </h3>
          </section>

          <section className="spacing">

          </section>
        </div>
      ))}
    </div>
  );
}
