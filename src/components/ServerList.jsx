import React from "react"
import logo from "../logo.svg"
import test from "../5557855.jpg"
import "bootstrap/dist/css/bootstrap.css"
import "../style/ServerList.scss"

export default function ServerList(props) {
	console.log(props.expanded)
	return (
		<div className="Navbar d-flex flex-column">
			<div className="NavbarTop">
				<img className="server-logo" src={test} alt="" />
			</div>
            <div className="hr"></div>
			<div className="ServerListMaster">
				<img className="server-logo" src={logo} alt="" />
				<img className="server-logo" src={logo} alt="" />
				<img className="server-logo" src={logo} alt="" />
				<img className="server-logo" src={logo} alt="" />
                <img className="server-logo" src={logo} alt="" />
				<img className="server-logo" src={logo} alt="" />
				<img className="server-logo" src={logo} alt="" />
				<img className="server-logo" src={logo} alt="" />
                <img className="server-logo" src={logo} alt="" />
				<img className="server-logo" src={logo} alt="" />
				<img className="server-logo" src={logo} alt="" />
				<img className="server-logo" src={logo} alt="" />
                <img className="server-logo" src={logo} alt="" />
				<img className="server-logo" src={logo} alt="" />
				<img className="server-logo" src={logo} alt="" />
				<img className="server-logo" src={logo} alt="" />
			</div>
			<div className="NavbarBottom">
				<img className="server-logo" src={logo} alt="" />
			</div>
		</div>
	)
}
