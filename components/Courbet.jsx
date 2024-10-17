import React from "react"
import vangogh from "../src/avatar-vangogh.jpg"
import postVangogh from "../src/post-vangogh.jpg"


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

            <section>
                <div>
                    <img src="#" alt="likes" />
                    <img src="#" alt="comment" />
                    <img src="#" alt="share" />
                </div>
                <h3>21,492 likes</h3>
                <h3>vincey1853 just took a few mushrooms lol</h3>
            </section>
        

        </div>
    )
}