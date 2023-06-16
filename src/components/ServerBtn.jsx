import React, { useState } from "react"
import logo from "../logo.svg"
import "../style/ServerList.css"

export default function FolderBtn(props){
    return (
        <div>
            <img className="serverLogo btnHover" src={logo} key={props.index} alt=""/>
        </div>
    )
}