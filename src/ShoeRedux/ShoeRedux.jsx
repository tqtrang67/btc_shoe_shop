import React from "react";
import Cart from "./Cart";
import List from "./List";

export default function ShoeRedux() {
	return (
		<div className="d-flex">
			<Cart />
			<List />
		</div>
	);
}
