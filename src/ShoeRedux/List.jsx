import React from "react";
import { useSelector } from "react-redux";
import Item from "./Item";

export default function List() {
	let listShoe = useSelector((state) => {
		return state.shoeReducer.listShoe;
	});
	console.log("🚀 ~ listShoe ~ listShoe:", listShoe);
	let renderListShoe = () => {
		return listShoe.map((shoe) => {
			return <Item key={shoe.id} shoe={shoe} />;
		});
	};
	return <div className="row col-5">{renderListShoe()}</div>;
}
