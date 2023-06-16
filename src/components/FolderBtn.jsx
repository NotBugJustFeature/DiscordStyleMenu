import React, { useState } from "react"
import { Folder } from "react-bootstrap-icons"
import "../style/ServerList.css"
import ServerBtn from "./ServerBtn"

export default function FolderBtn(props){
    const [expanded, setExpanded] = useState(false)

    return (
        <div className="serverFolder">
            <Folder className="serverFolder-icon btnHover" onClick={() => setExpanded(!expanded)}/>
            <div>
            {
                expanded && props.data.map((value)=>{
                    return ((value.type === "folder") ? <FolderBtn data={value.items}/> : <ServerBtn/> )
                })
            }
            </div>
        </div>
    )
}