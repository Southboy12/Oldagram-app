import React from "react"
import vangogh from "../src/avatar-vangogh.jpg"
import postVangogh from "../src/post-vangogh.jpg"
import heart from "../src/icon-heart.png"
import share from "../src/icon-dm.png"
import comment from "../src/icon-comment.png"


export default function Courbet() {
    return (
        <div>
            <section className="user-info">
                <img src={vangogh} className="avatar" alt="user picture" />
                <div>
                    <h3 className="user-full--name">Vincent van Gogh</h3>
                    <h3 className="location-text">Zundert, Netherlands</h3>
                </div>
            </section>
           
            <section className="post-image--container">
                <img src={postVangogh} className="post-image" alt="post image" />
            </section>

            <section className="body">
                <div className="icon-container">
                    <img src={heart} className="icon" alt="likes" />
                    <img src={comment} className="icon" alt="comment" />
                    <img src={share} className="icon" alt="share" />
                </div>
                <h3 className="likes">21,492 likes</h3>
                <h3 className="username-caption">vincey1853 <span>just took a few mushrooms lol</span></h3>
            </section>
        

        </div>
    )
}