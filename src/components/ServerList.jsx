import React, { useState } from "react"
import logo from "../logo.svg"
import "bootstrap/dist/css/bootstrap.css"
import "../style/ServerList.css"
import { ArrowBarRight } from "react-bootstrap-icons"
import FolderBtn from "./FolderBtn"
import ServerBtn from "./ServerBtn"

export default function ServerList(props) {

	const data = [
		{ type: "server", name: "test"},
		{ type: "folder", items: [
			{type: "server", name: "test"},
			{type: "server", name: "test"},
			{type: "server", name: "test"},
			{type: "server", name: "test"},
			{type: "server", name: "test"},
			{type: "server", name: "test"},
		]},
		{ type: "server", name: "test"},
		{ type: "server", name: "test"},
		{ type: "server", name: "test"},
		{ type: "server", name: "test"},
		{ type: "server", name: "test"},
		{ type: "server", name: "test"},
		{ type: "folder", items: [
			{type: "server", name: "test"},
			{type: "server", name: "test"},
			{type: "server", name: "test"},
			{type: "server", name: "test"},
			{type: "server", name: "test"},
			{type: "server", name: "test"},
		]},
		{ type: "server", name: "test"},
		{ type: "server", name: "test"},
		{ type: "server", name: "test"},
	]

	return (
		<div className="Navbar d-flex flex-column">
			<div className="NavbarTop">
				<img className="serverLogo" src={logo} alt=""/>
			</div>
			<div className="serverList">
			{
				data.map((value, index) => 
					((value.type === "folder") ? <FolderBtn data={value.items}/> : <ServerBtn/> )
			)}
			</div>
			<div className="NavbarBottom mt-auto d-flex justify-content-center flex-wrap">
				<ArrowBarRight className="bottomArrow"/>
			</div>
		</div>
	)
}
