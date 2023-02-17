import React from "react"
import tick from "./svg/tick.svg"
import redo from "./svg/redo.svg"
import undo from "./svg/undo.svg"
import logo from "./svg/logo.svg"

function Header() {
	return (
		<div className="header">
			<div className="btn-groups">
				<button className="btn undo">
					<img src={undo} />
				</button>

				<button className="btn redo">
					<img src={redo} />
				</button>
			</div>
			<a href="" className="logo">
				<img src={logo} />
			</a>

			<button className="finish">
				<img src={tick} className="tick" />
			</button>
		</div>
	)
}

export default Header
