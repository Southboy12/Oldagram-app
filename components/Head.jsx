import React from "react"
import logo from "../src/logo.png"
import avatar from "../src/user-avatar.png"


export default function Head() {
    return (
        <div className="header">
            <img className="logo" src={logo} alt="header logo" />
            <img className="avatar" src={avatar} alt="avatar" />
        </div>
    )
}